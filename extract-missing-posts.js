import fs from 'fs';
import path from 'path';

// Function to extract specific posts by ID from WordPress XML
function extractMissingPosts(xmlPath, postIds) {
    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    const posts = [];
    
    // Split by <item> tags to process each post
    const items = xmlContent.split('<item>');
    
    for (let i = 1; i < items.length; i++) {
        const item = items[i];
        
        // Check if it's one of our target posts
        const idMatch = item.match(/<wp:post_id>(\d+)<\/wp:post_id>/);
        const postId = idMatch ? parseInt(idMatch[1]) : 0;
        
        if (postIds.includes(postId)) {
            // Extract all relevant data
            const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            const slugMatch = item.match(/<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/);
            const slug = slugMatch ? slugMatch[1].trim() : '';
            
            const dateMatch = item.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/);
            const date = dateMatch ? dateMatch[1] : '';
            
            const authorMatch = item.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/);
            const author = authorMatch ? authorMatch[1].trim() : 'admin';
            
            // Extract content (encoded)
            const contentMatch = item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s);
            let content = contentMatch ? contentMatch[1] : '';
            
            // Clean HTML content - basic conversion to markdown-like format
            content = content
                .replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/g, '\n## $1\n')
                .replace(/<p[^>]*>(.*?)<\/p>/g, '\n$1\n')
                .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
                .replace(/<strong[^>]*>(.*?)<\/strong>/g, '**$1**')
                .replace(/<em[^>]*>(.*?)<\/em>/g, '*$1*')
                .replace(/<code[^>]*>(.*?)<\/code>/g, '`$1`')
                .replace(/<ul[^>]*>/g, '\n')
                .replace(/<\/ul>/g, '\n')
                .replace(/<li[^>]*>(.*?)<\/li>/g, '- $1')
                .replace(/<ol[^>]*>/g, '\n')
                .replace(/<\/ol>/g, '\n')
                .replace(/<br\s*\/?>/g, '\n')
                .replace(/<[^>]*>/g, '') // Remove remaining HTML tags
                .replace(/&quot;/g, '"')
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&nbsp;/g, ' ')
                .replace(/\n\s*\n\s*\n/g, '\n\n') // Clean up multiple newlines
                .trim();
            
            // Extract tags
            const tagMatches = item.match(/<category[^>]*nicename="([^"]*)"[^>]*><!\[CDATA\[([^\]]*)\]\]><\/category>/g);
            const tags = [];
            if (tagMatches) {
                tagMatches.forEach(tagMatch => {
                    const nameMatch = tagMatch.match(/<!\[CDATA\[([^\]]*)\]\]>/);
                    if (nameMatch && nameMatch[1] !== 'Flutter' && nameMatch[1] !== 'Flutter大学') {
                        tags.push(nameMatch[1]);
                    }
                });
            }
            tags.push('Flutter');
            
            posts.push({
                id: postId,
                title,
                slug,
                date: date.split(' ')[0], // Just the date part
                time: date.split(' ')[1] || '00:00:00', // Time part
                author,
                content,
                tags: [...new Set(tags)] // Remove duplicates
            });
        }
    }
    
    return posts.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Function to create markdown file
function createMarkdownFile(post, outputDir) {
    const filename = `${post.slug}.md`;
    const filepath = path.join(outputDir, filename);
    
    // Convert author to match existing pattern
    let authorName = post.author;
    if (post.author === 'admin') authorName = 'kboy';
    
    // Create frontmatter
    const frontmatter = `---
layout: "../../layouts/BlogPost.astro"
title: "${post.title}"
description: ""
pubDatetime: "${post.date}"
author: ${authorName}
slug: "${post.slug}"
featured: false
draft: false
tags: ["${post.tags.join('", "')}"]
ogImage: ""
---

`;
    
    const fullContent = frontmatter + post.content;
    
    fs.writeFileSync(filepath, fullContent, 'utf8');
    console.log(`✅ Created: ${filename}`);
    
    return filepath;
}

// Main execution
function createMissingPosts() {
    const xmlPath = '/Users/fujikawakei/app/blog/flutter.WordPress.2025-06-25.xml';
    const outputDir = '/Users/fujikawakei/app/blog/src/data/blog';
    
    // The 4 missing post IDs
    const missingPostIds = [939, 1151, 1303, 1647];
    
    console.log('🔍 Extracting missing posts from WordPress XML...\n');
    
    const posts = extractMissingPosts(xmlPath, missingPostIds);
    
    console.log(`📊 Found ${posts.length} missing posts to create:\n`);
    
    posts.forEach(post => {
        console.log(`📝 Post ID ${post.id}: "${post.title}"`);
        console.log(`   Date: ${post.date}`);
        console.log(`   Slug: ${post.slug}`);
        console.log(`   Author: ${post.author}`);
        console.log(`   Tags: ${post.tags.join(', ')}`);
        console.log(`   Content length: ${post.content.length} characters\n`);
        
        // Create the markdown file
        createMarkdownFile(post, outputDir);
    });
    
    console.log(`\n🎉 Successfully created ${posts.length} missing posts!`);
}

// Run the extraction
createMissingPosts();