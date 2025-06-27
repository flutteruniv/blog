#!/usr/bin/env node

/**
 * Script to generate meta descriptions for blog posts
 * This analyzes blog content and creates SEO-friendly descriptions
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const BLOG_DIR = 'src/data/blog';
const MAX_DESCRIPTION_LENGTH = 155;

// Extract meaningful content from markdown
function extractContent(markdown) {
  // Remove frontmatter
  const contentMatch = markdown.match(/---[\s\S]*?---\n?([\s\S]*)/);
  if (!contentMatch) return '';
  
  let content = contentMatch[1];
  
  // Remove HTML tags and special markdown syntax
  content = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links (keep text)
    .replace(/#{1,6}\s+/g, '') // Remove heading markers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold markers
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic markers
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/\n\s*\n/g, '\n') // Remove extra line breaks
    .trim();

  return content;
}

// Generate description from content and title
function generateDescription(title, content, tags) {
  // Clean title for keywords
  const titleKeywords = title
    .replace(/【.*?】/g, '') // Remove Japanese brackets
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2);

  // Get first meaningful paragraph
  const sentences = content.split(/[.。!！?？]/).filter(s => s.trim().length > 20);
  let description = '';

  if (sentences.length > 0) {
    description = sentences[0].trim();
  } else {
    // Fallback: use first meaningful content
    const words = content.split(/\s+/).slice(0, 20);
    description = words.join(' ');
  }

  // Add Flutter context if not present and it's a Flutter post
  const isFlutterPost = tags.some(tag => 
    ['Flutter', 'Widget', 'Dart', 'Package'].includes(tag)
  );
  
  if (isFlutterPost && !description.toLowerCase().includes('flutter')) {
    if (description.length + 8 < MAX_DESCRIPTION_LENGTH) {
      description = `Flutter${description.startsWith('で') ? '' : 'の'}${description}`;
    }
  }

  // Truncate if too long
  if (description.length > MAX_DESCRIPTION_LENGTH) {
    description = description.substring(0, MAX_DESCRIPTION_LENGTH - 3) + '...';
  }

  return description;
}

// Parse frontmatter
function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;

  const frontmatter = {};
  const lines = frontmatterMatch[1].split('\n');
  
  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      const [, key, value] = match;
      if (key === 'tags') {
        // Parse tags array
        const tagsMatch = value.match(/\[(.*)\]/);
        if (tagsMatch) {
          frontmatter[key] = tagsMatch[1]
            .split(',')
            .map(tag => tag.trim().replace(/['"]/g, ''))
            .filter(tag => tag);
        }
      } else {
        frontmatter[key] = value.replace(/^["']|["']$/g, '');
      }
    }
  }
  
  return frontmatter;
}

// Update blog post with new description
function updateBlogPost(filePath, newDescription) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content.replace(
    /description: ""/,
    `description: "${newDescription}"`
  );
  
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  return true;
}

// Main function
async function main() {
  console.log('🔍 Scanning blog posts for empty descriptions...');
  
  const blogFiles = await glob(`${BLOG_DIR}/*.md`);
  let processedCount = 0;
  let errorCount = 0;

  for (const filePath of blogFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if description is empty
      if (!content.includes('description: ""')) {
        continue;
      }

      const frontmatter = parseFrontmatter(content);
      if (!frontmatter) {
        console.warn(`⚠️  Could not parse frontmatter: ${filePath}`);
        errorCount++;
        continue;
      }

      const { title, tags = [] } = frontmatter;
      const postContent = extractContent(content);
      
      if (!postContent || postContent.length < 50) {
        console.warn(`⚠️  Insufficient content: ${filePath}`);
        errorCount++;
        continue;
      }

      const description = generateDescription(title, postContent, tags);
      
      if (description && description.length > 30) {
        updateBlogPost(filePath, description);
        console.log(`✅ Updated: ${path.basename(filePath)}`);
        console.log(`   Description: ${description}`);
        processedCount++;
      } else {
        console.warn(`⚠️  Could not generate description: ${filePath}`);
        errorCount++;
      }

    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n📊 Summary:');
  console.log(`✅ Successfully processed: ${processedCount} posts`);
  console.log(`⚠️  Errors: ${errorCount} posts`);
  console.log(`📝 Total blog posts: ${blogFiles.length}`);
}

main().catch(console.error);