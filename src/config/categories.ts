// Category configuration based on original WordPress structure
export interface CategoryConfig {
  slug: string;
  displayName: string;
  parent?: string;
  description?: string;
}

// Category hierarchy mapping from WordPress XML
export const CATEGORIES: Record<string, CategoryConfig> = {
  // Root categories
  "dart": {
    slug: "dart",
    displayName: "Dart",
    description: "Dart言語に関する記事"
  },
  "flutter": {
    slug: "flutter", 
    displayName: "Flutter",
    description: "Flutterフレームワークに関する記事"
  },
  "flutterunivesity": {
    slug: "flutterunivesity", // Keep original typo for SEO
    displayName: "Flutter大学",
    description: "Flutter大学の活動やコミュニティに関する記事"
  },
  "test": {
    slug: "test",
    displayName: "テスト",
    description: "テストに関する記事"
  },
  "company": {
    slug: "company",
    displayName: "企業紹介", 
    description: "企業紹介やインタビューに関する記事"
  },
  "uncategorized": {
    slug: "uncategorized",
    displayName: "未カテゴリー",
    description: "未分類の記事"
  },

  // Flutter subcategories
  "flutter/package": {
    slug: "package",
    displayName: "Package",
    parent: "flutter",
    description: "Flutterパッケージに関する記事"
  },
  "flutter/widget": {
    slug: "widget", 
    displayName: "Widget",
    parent: "flutter",
    description: "Flutterウィジェットに関する記事"
  },
  "flutter/news": {
    slug: "news",
    displayName: "ニュース", 
    parent: "flutter",
    description: "Flutterニュースに関する記事"
  },
  "flutter/beginer": {
    slug: "beginer", // Keep original typo for SEO
    displayName: "初心者向け",
    parent: "flutter", 
    description: "Flutter初心者向けの記事"
  },

  // Flutter University subcategories
  "flutterunivesity/study_meeting": {
    slug: "study_meeting",
    displayName: "勉強会",
    parent: "flutterunivesity",
    description: "Flutter大学の勉強会に関する記事"
  },
  "flutterunivesity/joint_development": {
    slug: "joint_development", // Decoded from %e5%85%b1%e5%90%8c%e9%96%8b%e7%99%ba
    displayName: "共同開発",
    parent: "flutterunivesity",
    description: "Flutter大学の共同開発に関する記事"
  },
  "flutterunivesity/villa": {
    slug: "villa", // Decoded from %e5%88%a5%e8%8d%98
    displayName: "別荘",
    parent: "flutterunivesity", 
    description: "Flutter大学の別荘に関する記事"
  }
};

// Tag to category mapping - maps current tags to category keys
export const TAG_TO_CATEGORY: Record<string, string> = {
  // Japanese tags to category mapping
  "初心者向け": "flutter/beginer",
  "Widget": "flutter/widget", 
  "Package": "flutter/package",
  "ニュース": "flutter/news",
  "Dart": "dart",
  "Flutter": "flutter",
  "テスト": "test",
  "企業紹介": "company",
  "Flutter大学": "flutterunivesity",
  "勉強会": "flutterunivesity/study_meeting",
  "共同開発": "flutterunivesity/joint_development",
  "別荘": "flutterunivesity/villa",
  "未カテゴリー": "uncategorized",

  // Additional common tags that might exist
  "flutter大学": "flutterunivesity", // Alternative spelling
  "初心者": "flutter/beginer", // Shorter version
  "ウィジェット": "flutter/widget", // Alternative spelling
  "パッケージ": "flutter/package", // Alternative spelling
  "ニュース記事": "flutter/news", // Alternative form
};

// Helper functions
export function getCategoryConfig(categoryKey: string): CategoryConfig | undefined {
  return CATEGORIES[categoryKey];
}

export function getCategoryFromTag(tagName: string): string | undefined {
  return TAG_TO_CATEGORY[tagName];
}

export function getCategoryPath(categoryKey: string): string {
  const config = CATEGORIES[categoryKey];
  if (!config) return `/category/${categoryKey}/`;
  
  if (config.parent) {
    const parentConfig = CATEGORIES[config.parent];
    return `/category/${parentConfig?.slug || config.parent}/${config.slug}/`;
  }
  
  return `/category/${config.slug}/`;
}

export function getCategoryDisplayPath(categoryKey: string): string {
  const config = CATEGORIES[categoryKey];
  if (!config) return categoryKey;
  
  if (config.parent) {
    const parentConfig = CATEGORIES[config.parent];
    return `${parentConfig?.displayName || config.parent} / ${config.displayName}`;
  }
  
  return config.displayName;
}