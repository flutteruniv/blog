import type { CollectionEntry } from "astro:content";
import { getCategoryFromTag } from "@/config/categories";

const getPostsByCategory = (
  posts: CollectionEntry<"blog">[],
  categoryKey: string
) => {
  return posts.filter(post => {
    return post.data.tags?.some(tag => {
      const mappedCategory = getCategoryFromTag(tag);
      return mappedCategory === categoryKey;
    });
  });
};

export default getPostsByCategory;