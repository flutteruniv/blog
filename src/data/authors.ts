export interface Author {
  name: string;
  bio: string;
  avatar: string;
  twitterHandle?: string;
  website?: string;
}

export const AUTHORS: Record<string, Author> = {
  Aoi: {
    name: "Aoi",
    bio: "ライター兼個人Flutter開発者\nFlutterにて5つのアプリを開発。QiitaではFlutter記事にて約500のContributionを獲得。",
    avatar: "/images/authors/aoi.jpg?v=2",
    twitterHandle: "Aoi_Umigishi",
    website: "https://flutteruniv.com",
  },
  kboy: {
    name: "kboy",
    bio: "Flutter大学創設者。モバイルエンジニア歴10年。技術評論社「ゼロから学ぶFlutterアプリ開発」著者。",
    avatar: "/images/authors/kboy-profile.jpg",
    twitterHandle: "kboy_silvergym",
    website: "https://flutteruniv.com",
  },
  shimano: {
    name: "shimano",
    bio: "Flutter開発者\nFlutter大学メンバーとして技術記事を執筆。実践的なFlutterチュートリアルを提供。",
    avatar: "/images/authors/default.jpg",
    twitterHandle: "FlutterUniv",
    website: "https://flutteruniv.com",
  },
  konbu: {
    name: "konbu",
    bio: "Flutter開発者\nFlutter大学コミュニティの一員として、学翕支援やコンテンツ作成に参加。",
    avatar: "/images/authors/default.jpg",
    twitterHandle: "FlutterUniv",
    website: "https://flutteruniv.com",
  },
};

export function getAuthor(authorName: string): Author | null {
  return AUTHORS[authorName] || null;
}
