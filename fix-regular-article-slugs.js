import fs from 'fs';
import path from 'path';

// Extract WordPress posts data
function extractWordPressPostsWithSlugs(xmlPath) {
    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    const posts = [];
    
    const items = xmlContent.split('<item>');
    
    for (let i = 1; i < items.length; i++) {
        const item = items[i];
        
        if (item.includes('<wp:post_type><![CDATA[post]]></wp:post_type>') && 
            item.includes('<wp:status><![CDATA[publish]]></wp:status>')) {
            
            const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            const slugMatch = item.match(/<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/);
            const wpSlug = slugMatch ? slugMatch[1].trim() : '';
            
            const idMatch = item.match(/<wp:post_id>(\d+)<\/wp:post_id>/);
            const id = idMatch ? parseInt(idMatch[1]) : 0;
            
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
            
            if (title) {
                posts.push({
                    id,
                    title,
                    wpSlug,
                    date: date.split(' ')[0], // Just the date part
                    time: date.split(' ')[1] || '00:00:00', // Time part
                    author,
                    content,
                    tags: [...new Set(tags)], // Remove duplicates
                    normalizedTitle: normalizeTitle(title)
                });
            }
        }
    }
    
    return posts;
}

// Extract markdown files data
function extractMarkdownSlugs(blogDir) {
    const markdownFiles = [];
    const files = fs.readdirSync(blogDir);
    
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(blogDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            
            const titleMatch = content.match(/^title:\s*["']?(.*?)["']?$/m);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            const slugMatch = content.match(/^slug:\s*["']?(.*?)["']?$/m);
            const mdSlug = slugMatch ? slugMatch[1].trim() : '';
            
            const filenameSlug = path.basename(file, '.md');
            
            if (title) {
                markdownFiles.push({
                    filename: file,
                    filepath: filePath,
                    filenameSlug,
                    title,
                    mdSlug: mdSlug || filenameSlug,
                    normalizedTitle: normalizeTitle(title)
                });
            }
        }
    }
    
    return markdownFiles;
}

function normalizeTitle(title) {
    return title.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// Check if a post is Flutter News
function isFlutterNews(title, wpSlug) {
    return title.includes('Flutter ニュース') || 
           title.includes('Flutterニュース') || 
           title.includes('Flutter ニュース') ||
           title.includes('今週のFlutterニュース') ||
           wpSlug.includes('flutter-news-') ||
           wpSlug.includes('flutternews-');
}

// Create markdown file
function createMarkdownFile(post, outputDir) {
    const filename = `${post.wpSlug}.md`;
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
slug: "${post.wpSlug}"
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

// Update existing file slug
function updateFileSlug(filePath, newSlug) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update slug in frontmatter
    if (content.includes('slug:')) {
        content = content.replace(/^slug:\s*["']?.*?["']?$/m, `slug: "${newSlug}"`);
    } else {
        // Add slug after title if it doesn't exist
        content = content.replace(/^(title:\s*["']?.*?["']?$)/m, `$1\nslug: "${newSlug}"`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
}

// Main function to fix regular article slugs
function fixRegularArticleSlugs() {
    const xmlPath = '/Users/fujikawakei/app/blog/flutter.WordPress.2025-06-25.xml';
    const blogDir = '/Users/fujikawakei/app/blog/src/data/blog';
    
    console.log('🔧 Fixing regular article slug mismatches...\n');
    
    const wordPressPosts = extractWordPressPostsWithSlugs(xmlPath);
    const markdownFiles = extractMarkdownSlugs(blogDir);
    
    // Create lookup maps
    const markdownByTitle = new Map();
    const wpPostsByTitle = new Map();
    
    markdownFiles.forEach(file => {
        markdownByTitle.set(file.normalizedTitle, file);
    });
    
    wordPressPosts.forEach(post => {
        wpPostsByTitle.set(post.normalizedTitle, post);
    });
    
    // Find regular article mismatches
    const regularMismatches = [];
    
    wordPressPosts.forEach(wpPost => {
        const matchingMd = markdownByTitle.get(wpPost.normalizedTitle);
        
        if (matchingMd && wpPost.wpSlug !== matchingMd.mdSlug) {
            const isNewsPost = isFlutterNews(wpPost.title, wpPost.wpSlug);
            
            if (!isNewsPost) {
                regularMismatches.push({
                    wpPost,
                    mdFile: matchingMd
                });
            }
        }
    });
    
    console.log(`📊 Found ${regularMismatches.length} regular article mismatches to fix\n`);
    
    let created = 0;
    let updated = 0;
    let errors = 0;
    
    // Process each mismatch
    for (const mismatch of regularMismatches) {
        const { wpPost, mdFile } = mismatch;
        
        console.log(`🔧 Fixing: "${wpPost.title}"`);
        console.log(`   Current: ${mdFile.mdSlug} (${mdFile.filename})`);
        console.log(`   Target:  ${wpPost.wpSlug}`);
        
        try {
            // Check if this is a content collision case (multiple posts mapped to same file)
            if (mdFile.filename === 'tyoflutterhack2023.md' || 
                mdFile.filename === 'dart_spread_operator.md' ||
                mdFile.filename === 'flutteruniv-flutter-training-plan.md') {
                
                // Create individual file for this post
                const newFilePath = createMarkdownFile(wpPost, blogDir);
                created++;
                
            } else {
                // Update existing file slug
                updateFileSlug(mdFile.filepath, wpPost.wpSlug);
                
                // Rename file if needed
                const newFilename = `${wpPost.wpSlug}.md`;
                const newFilePath = path.join(blogDir, newFilename);
                
                if (mdFile.filename !== newFilename && !fs.existsSync(newFilePath)) {
                    fs.renameSync(mdFile.filepath, newFilePath);
                    console.log(`📁 Renamed: ${mdFile.filename} → ${newFilename}`);
                }
                
                updated++;
            }
            
        } catch (error) {
            console.log(`❌ Error fixing ${wpPost.title}: ${error.message}`);
            errors++;
        }
        
        console.log('');
    }
    
    console.log('📊 Summary:');
    console.log(`✅ Files created: ${created}`);
    console.log(`📝 Files updated: ${updated}`);
    console.log(`❌ Errors: ${errors}`);
    console.log(`\n🎉 Regular article slug fixes completed!`);
    
    return { created, updated, errors };
}

// Run the fix
const results = fixRegularArticleSlugs();