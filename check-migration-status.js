import fs from 'fs';
import path from 'path';

// Function to extract published posts from WordPress XML
function extractWordPressData(xmlPath) {
    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    const posts = [];
    
    // Split by <item> tags to process each post
    const items = xmlContent.split('<item>');
    
    for (let i = 1; i < items.length; i++) { // Skip first empty split
        const item = items[i];
        
        // Check if it's a published post (not page, draft, etc.)
        if (item.includes('<wp:post_type><![CDATA[post]]></wp:post_type>') && 
            item.includes('<wp:status><![CDATA[publish]]></wp:status>')) {
            
            // Extract title
            const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            // Extract post name (slug)
            const slugMatch = item.match(/<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/);
            const slug = slugMatch ? slugMatch[1].trim() : '';
            
            // Extract post ID
            const idMatch = item.match(/<wp:post_id>(\d+)<\/wp:post_id>/);
            const id = idMatch ? parseInt(idMatch[1]) : 0;
            
            // Extract publish date
            const dateMatch = item.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/);
            const date = dateMatch ? dateMatch[1] : '';
            
            if (title) {
                posts.push({
                    id,
                    title,
                    slug,
                    date: date.split(' ')[0] // Just the date part
                });
            }
        }
    }
    
    return posts.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Function to extract titles from markdown files
function extractMarkdownTitles(blogDir) {
    const markdownFiles = [];
    const files = fs.readdirSync(blogDir);
    
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(blogDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Extract title from frontmatter
            const titleMatch = content.match(/^title:\s*["']?(.*?)["']?$/m);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            if (title) {
                markdownFiles.push({
                    filename: file,
                    title: title,
                    // Normalize title for comparison
                    normalizedTitle: title.toLowerCase()
                        .replace(/[^\w\s]/g, '')
                        .replace(/\s+/g, ' ')
                        .trim()
                });
            }
        }
    }
    
    return markdownFiles;
}

// Function to normalize titles for comparison
function normalizeTitle(title) {
    return title.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// Main execution
function checkMigrationStatus() {
    const xmlPath = '/Users/fujikawakei/app/blog/flutter.WordPress.2025-06-25.xml';
    const blogDir = '/Users/fujikawakei/app/blog/src/data/blog';
    
    console.log('🔍 Analyzing WordPress XML and Markdown files...\n');
    
    // Extract data
    const wordPressPosts = extractWordPressData(xmlPath);
    const markdownFiles = extractMarkdownTitles(blogDir);
    
    console.log(`📊 WordPress published posts: ${wordPressPosts.length}`);
    console.log(`📊 Markdown files found: ${markdownFiles.length}\n`);
    
    // Create lookup map for markdown files
    const markdownTitleMap = new Map();
    markdownFiles.forEach(file => {
        markdownTitleMap.set(file.normalizedTitle, file);
    });
    
    // Find matches and missing posts
    const matches = [];
    const missing = [];
    
    wordPressPosts.forEach(post => {
        const normalizedWpTitle = normalizeTitle(post.title);
        
        if (markdownTitleMap.has(normalizedWpTitle)) {
            const matchedFile = markdownTitleMap.get(normalizedWpTitle);
            matches.push({
                wordPressPost: post,
                markdownFile: matchedFile
            });
        } else {
            missing.push(post);
        }
    });
    
    // Report results
    console.log(`✅ Successfully migrated: ${matches.length} posts`);
    console.log(`❌ Missing from migration: ${missing.length} posts\n`);
    
    if (missing.length > 0) {
        console.log('📋 Missing Posts:');
        console.log('================');
        missing.forEach((post, index) => {
            console.log(`${index + 1}. "${post.title}"`);
            console.log(`   Date: ${post.date}`);
            console.log(`   Slug: ${post.slug}`);
            console.log(`   ID: ${post.id}\n`);
        });
    }
    
    // Summary
    const migrationRate = ((matches.length / wordPressPosts.length) * 100).toFixed(1);
    console.log(`📈 Migration Success Rate: ${migrationRate}%`);
    
    return {
        totalWordPressPosts: wordPressPosts.length,
        totalMarkdownFiles: markdownFiles.length,
        successfulMatches: matches.length,
        missingPosts: missing.length,
        migrationRate: parseFloat(migrationRate),
        missing: missing
    };
}

// Run the check
const results = checkMigrationStatus();