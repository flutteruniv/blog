import type { CollectionEntry } from "astro:content";
import { getCategoryFromTag, getCategoryConfig } from "@/config/categories";

export interface UniqueCategory {
  categoryKey: string;
  displayName: string;
  count: number;
}

const getUniqueCategories = (posts: CollectionEntry<"blog">[]): UniqueCategory[] => {
  const categoryMap = new Map<string, number>();
  
  posts.forEach(post => {
    post.data.tags?.forEach(tag => {
      const categoryKey = getCategoryFromTag(tag);
      if (categoryKey) {
        const currentCount = categoryMap.get(categoryKey) || 0;
        categoryMap.set(categoryKey, currentCount + 1);
      }
    });
  });
  
  return Array.from(categoryMap.entries())
    .map(([categoryKey, count]) => {
      const config = getCategoryConfig(categoryKey);
      return {
        categoryKey,
        displayName: config?.displayName || categoryKey,
        count,
      };
    })
    .sort((a, b) => b.count - a.count); // Sort by post count descending
};

export default getUniqueCategories;