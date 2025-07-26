#!/usr/bin/env python3
"""
Test script for Slack integration
"""

import os
import sys
from slack_popular_links import get_popular_slack_links

def test_slack_integration():
    """Test the Slack popular links integration"""
    print("Testing Slack integration...")
    
    # Check if environment variables are set
    slack_token = os.getenv('SLACK_TOKEN')
    if not slack_token:
        print("❌ SLACK_TOKEN environment variable not found")
        print("Please set SLACK_TOKEN environment variable with your Slack API token")
        return False
    
    print("✅ SLACK_TOKEN found")
    
    try:
        print("Fetching popular links from Slack...")
        popular_links = get_popular_slack_links()
        
        if not popular_links:
            print("⚠️  No popular links found")
            return True
        
        print(f"✅ Found {len(popular_links)} popular links")
        
        # Display results
        for i, link in enumerate(popular_links[:3], 1):
            print(f"\n{i}. Score: {link['score']}")
            print(f"   URL: {link['url'][:80]}...")
            print(f"   Mentions: {link['mention_count']}, Reactions: {link['reactions']}")
            print(f"   Channels: {', '.join([f'#{ch}' for ch in link['channels']])}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error during test: {e}")
        return False

if __name__ == "__main__":
    success = test_slack_integration()
    if success:
        print("\n✅ Slack integration test completed successfully!")
        sys.exit(0)
    else:
        print("\n❌ Slack integration test failed!")
        sys.exit(1)