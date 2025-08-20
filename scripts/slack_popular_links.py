import os
import requests
import datetime
import json
from collections import defaultdict
from urllib.parse import urlparse
import re

class SlackPopularLinksAnalyzer:
    def __init__(self, slack_token: str):
        self.slack_token = slack_token
        self.headers = {
            'Authorization': f'Bearer {slack_token}',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        self.base_url = 'https://slack.com/api'
    
    def get_channels(self):
        """すべてのチャンネルを取得"""
        url = f'{self.base_url}/conversations.list'
        params = {
            'exclude_archived': 'true',
            'limit': 1000
        }
        
        response = requests.get(url, headers=self.headers, params=params)
        data = response.json()
        
        if not data.get('ok'):
            raise Exception(f"Failed to fetch channels: {data.get('error')}")
        
        return data['channels']
    
    def get_channel_history(self, channel_id: str, days_ago: int = 7):
        """指定したチャンネルの過去の履歴を取得"""
        # 過去N日間のメッセージを取得
        oldest_timestamp = (datetime.datetime.now() - datetime.timedelta(days=days_ago)).timestamp()
        
        url = f'{self.base_url}/conversations.history'
        params = {
            'channel': channel_id,
            'oldest': str(oldest_timestamp),
            'limit': 1000
        }
        
        response = requests.get(url, headers=self.headers, params=params)
        data = response.json()
        
        if not data.get('ok'):
            print(f"Failed to fetch history for channel {channel_id}: {data.get('error')}")
            return []
        
        return data.get('messages', [])
    
    def extract_links_from_message(self, message: dict):
        """メッセージからリンクを抽出"""
        links = []
        text = message.get('text', '')
        
        # URLパターンを検索
        url_pattern = r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+'
        urls = re.findall(url_pattern, text)
        
        for url in urls:
            # 無駄なURLを除外
            if self._is_relevant_url(url):
                links.append({
                    'url': url,
                    'timestamp': float(message.get('ts', 0)),
                    'user': message.get('user', ''),
                    'channel': message.get('channel', ''),
                    'reactions': self._count_reactions(message)
                })
        
        return links
    
    def _is_relevant_url(self, url: str) -> bool:
        """関連性のあるURLかどうかを判定"""
        # 除外するドメイン
        excluded_domains = ['slack.com', 'zoom.us', 'meet.google.com', 'calendar.google.com']
        
        try:
            domain = urlparse(url).netloc.lower()
            return not any(excluded in domain for excluded in excluded_domains)
        except:
            return False
    
    def _count_reactions(self, message: dict) -> int:
        """メッセージのリアクション数をカウント"""
        reactions = message.get('reactions', [])
        total_count = 0
        for reaction in reactions:
            total_count += reaction.get('count', 0)
        return total_count
    
    def analyze_popular_links(self, days_ago: int = 7, min_reactions: int = 2, max_channels: int = None):
        """人気のリンクを分析"""
        print("Fetching channels...")
        channels = self.get_channels()
        
        # すべてのチャンネルを対象にする
        relevant_channels = channels
        
        # アクティブなチャンネル順にソート（メンバー数が多い順）
        relevant_channels.sort(key=lambda x: x.get('num_members', 0), reverse=True)
        
        # オプションでチャンネル数を制限
        if max_channels:
            relevant_channels = relevant_channels[:max_channels]
            print(f"Limited to top {max_channels} channels by member count")
        
        print(f"Found {len(relevant_channels)} channels to process")
        
        all_links = []
        
        for i, channel in enumerate(relevant_channels):  # すべてのチャンネルを処理
            # Rate limiting: 簡単な遅延を追加
            if i > 0 and i % 10 == 0:
                print(f"Processed {i} channels, pausing briefly...")
                import time
                time.sleep(2)
            channel_id = channel['id']
            channel_name = channel['name']
            print(f"Processing channel: #{channel_name}")
            
            try:
                messages = self.get_channel_history(channel_id, days_ago)
                print(f"Found {len(messages)} messages in #{channel_name}")
                
                for message in messages:
                    links = self.extract_links_from_message(message)
                    for link in links:
                        link['channel_name'] = channel_name
                        all_links.append(link)
            
            except Exception as e:
                print(f"Error processing channel #{channel_name}: {e}")
                continue
        
        # リンクの人気度を計算
        link_popularity = defaultdict(lambda: {'count': 0, 'reactions': 0, 'channels': set(), 'latest': 0})
        
        for link in all_links:
            url = link['url']
            link_popularity[url]['count'] += 1
            link_popularity[url]['reactions'] += link['reactions']
            link_popularity[url]['channels'].add(link['channel_name'])
            link_popularity[url]['latest'] = max(link_popularity[url]['latest'], link['timestamp'])
        
        # 人気順にソート
        popular_links = []
        for url, stats in link_popularity.items():
            if stats['count'] >= 2 or stats['reactions'] >= min_reactions:  # 複数回言及されたか、リアクションがある
                score = stats['count'] * 2 + stats['reactions'] * 3 + len(stats['channels'])
                popular_links.append({
                    'url': url,
                    'score': score,
                    'mention_count': stats['count'],
                    'reactions': stats['reactions'],
                    'channels': list(stats['channels']),
                    'latest_timestamp': stats['latest']
                })
        
        # スコア順にソート
        popular_links.sort(key=lambda x: x['score'], reverse=True)
        
        return popular_links[:10]  # 上位10件を返す

def get_popular_slack_links():
    """Firebase Functions設定から Slack トークンを取得して人気リンクを分析"""
    # 環境変数からSlackトークンを取得
    slack_token = os.getenv('SLACK_TOKEN')
    
    if not slack_token:
        print("SLACK_TOKEN environment variable not found")
        return []
    
    try:
        analyzer = SlackPopularLinksAnalyzer(slack_token)
        popular_links = analyzer.analyze_popular_links(days_ago=7, min_reactions=1, max_channels=50)
        
        print(f"Found {len(popular_links)} popular links")
        for link in popular_links:
            print(f"Score: {link['score']}, URL: {link['url'][:50]}...")
        
        return popular_links
    
    except Exception as e:
        print(f"Error analyzing Slack links: {e}")
        return []

if __name__ == "__main__":
    links = get_popular_slack_links()
    print(json.dumps(links, indent=2, ensure_ascii=False))