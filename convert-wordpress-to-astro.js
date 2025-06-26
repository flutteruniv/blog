import fs from 'fs';
import xml2js from 'xml2js';
import slugify from 'slugify';
import { decode } from 'html-entities';

async function convertWordPressToAstro() {
  try {
    // Read the WordPress XML file
    const xmlData = fs.readFileSync('flutter.WordPress.2025-06-25.xml', 'utf8');
    
    // Parse XML
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlData);
    
    // Extract posts from the XML structure
    const items = result.rss.channel[0].item || [];
    
    console.log('Converting WordPress posts to Astro...\n');
    
    let convertedCount = 0;
    let skippedCount = 0;
    
    // Get list of existing markdown files to avoid overwriting
    const existingFiles = new Set();
    if (fs.existsSync('src/data/blog')) {
      const existingFilesArray = fs.readdirSync('src/data/blog').filter(f => f.endsWith('.md'));
      existingFilesArray.forEach(f => existingFiles.add(f));
    }
    
    for (const item of items) {
      const status = item['wp:status'] && item['wp:status'][0];
      const postType = item['wp:post_type'] && item['wp:post_type'][0];
      
      if (status === 'publish' && postType === 'post') {
        const title = item.title[0];
        const author = item['dc:creator'] ? item['dc:creator'][0] : 'Unknown';
        const pubDate = item.pubDate ? new Date(item.pubDate[0]) : new Date();
        const content = item['content:encoded'] ? item['content:encoded'][0] : '';
        
        // Use original WordPress slug (wp:post_name) if available
        let originalSlug = item['wp:post_name'] && item['wp:post_name'][0];
        if (originalSlug) {
          // Decode URL-encoded characters
          originalSlug = decodeURIComponent(originalSlug);
        }
        
        const slug = originalSlug || slugify(title, { lower: true, strict: true });
        const filename = `${slug}.md`;
        const filepath = `src/data/blog/${filename}`;
        
        // Skip if file already exists
        if (existingFiles.has(filename)) {
          console.log(`⏭️  Skipping (already exists): ${filename}`);
          skippedCount++;
          continue;
        }
        
        // Format the date for frontmatter
        const formattedDate = pubDate.toISOString().split('T')[0];
        
        // Clean and convert content
        let cleanContent = content
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/\\"/g, '"') // Unescape quotes
          .replace(/\\'/g, "'") // Unescape single quotes
          .replace(/\\n/g, '\n') // Keep escaped newlines
          .replace(/\\\\/g, '\\'); // Fix escaped backslashes
        
        // Decode HTML entities
        cleanContent = decode(cleanContent);
        
        // Create frontmatter
        const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: ""
pubDate: "${formattedDate}"
author: "${author}"
tags:
  - "Flutter"
imgUrl: ""
layout: "../../layouts/BlogPost.astro"
---

${cleanContent}`;

        // Write the file
        fs.writeFileSync(filepath, frontmatter, 'utf8');
        
        console.log(`✅ Converted: ${filename}`);
        convertedCount++;
      }
    }
    
    console.log(`\n📊 Conversion Summary:`);
    console.log(`- Successfully converted: ${convertedCount}`);
    console.log(`- Skipped (already exists): ${skippedCount}`);
    console.log(`- Total processed: ${convertedCount + skippedCount}`);
    
  } catch (error) {
    console.error('Error converting posts:', error);
  }
}

convertWordPressToAstro();
