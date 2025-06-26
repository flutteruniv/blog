import fs from 'fs';
import path from 'path';

// Function to extract all WordPress posts with their data
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
            const date = dateMatch ? dateMatch[1].split(' ')[0] : '';
            
            if (title) {
                posts.push({
                    id,
                    title,
                    wpSlug,
                    date,
                    normalizedTitle: normalizeTitle(title)
                });
            }
        }
    }
    
    return posts;
}

// Function to extract markdown files with their slugs
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

// Function to check if a post is Flutter News
function isFlutterNews(title, wpSlug) {
    return title.includes('Flutter ニュース') || 
           title.includes('Flutterニュース') || 
           title.includes('Flutter ニュース') ||
           title.includes('今週のFlutterニュース') ||
           wpSlug.includes('flutter-news-') ||
           wpSlug.includes('flutternews-');
}

// Main comparison function
function analyzeMismatchTypes() {
    const xmlPath = '/Users/fujikawakei/app/blog/flutter.WordPress.2025-06-25.xml';
    const blogDir = '/Users/fujikawakei/app/blog/src/data/blog';
    
    console.log('🔍 Analyzing mismatch types (Flutter News vs Regular Articles)...\n');
    
    const wordPressPosts = extractWordPressPostsWithSlugs(xmlPath);
    const markdownFiles = extractMarkdownSlugs(blogDir);
    
    // Create lookup maps
    const markdownByTitle = new Map();
    markdownFiles.forEach(file => {
        markdownByTitle.set(file.normalizedTitle, file);
    });
    
    // Compare slugs and categorize mismatches
    const flutterNewsMismatches = [];
    const regularArticleMismatches = [];
    
    wordPressPosts.forEach(wpPost => {
        const matchingMd = markdownByTitle.get(wpPost.normalizedTitle);
        
        if (matchingMd && wpPost.wpSlug !== matchingMd.mdSlug) {
            const isNewsPost = isFlutterNews(wpPost.title, wpPost.wpSlug);
            
            const mismatch = {
                title: wpPost.title,
                wpSlug: wpPost.wpSlug,
                mdSlug: matchingMd.mdSlug,
                filename: matchingMd.filename,
                wpId: wpPost.id,
                date: wpPost.date
            };
            
            if (isNewsPost) {
                flutterNewsMismatches.push(mismatch);
            } else {
                regularArticleMismatches.push(mismatch);
            }
        }
    });
    
    // Report results
    console.log(`📊 Total mismatches: ${flutterNewsMismatches.length + regularArticleMismatches.length}`);
    console.log(`📰 Flutter News mismatches: ${flutterNewsMismatches.length}`);
    console.log(`📝 Regular article mismatches: ${regularArticleMismatches.length}\n`);
    
    const flutterNewsPercentage = ((flutterNewsMismatches.length / (flutterNewsMismatches.length + regularArticleMismatches.length)) * 100).toFixed(1);
    const regularPercentage = ((regularArticleMismatches.length / (flutterNewsMismatches.length + regularArticleMismatches.length)) * 100).toFixed(1);
    
    console.log(`📈 Mismatch breakdown:`);
    console.log(`   Flutter News: ${flutterNewsPercentage}%`);
    console.log(`   Regular Articles: ${regularPercentage}%\n`);
    
    if (flutterNewsMismatches.length > 0) {
        console.log('📰 Flutter News Mismatches:');
        console.log('===========================');
        flutterNewsMismatches.forEach((mismatch, index) => {
            console.log(`${index + 1}. "${mismatch.title}"`);
            console.log(`   WP slug: ${mismatch.wpSlug}`);
            console.log(`   MD slug: ${mismatch.mdSlug}`);
            console.log(`   Expected: flutter-news-{date} pattern`);
            console.log('');
        });
    }
    
    if (regularArticleMismatches.length > 0) {
        console.log('📝 Regular Article Mismatches (NEED FIXING):');
        console.log('============================================');
        regularArticleMismatches.forEach((mismatch, index) => {
            console.log(`${index + 1}. "${mismatch.title}"`);
            console.log(`   WP slug: ${mismatch.wpSlug}`);
            console.log(`   MD slug: ${mismatch.mdSlug}`);
            console.log(`   File: ${mismatch.filename}`);
            console.log('');
        });
    }
    
    return {
        flutterNewsCount: flutterNewsMismatches.length,
        regularArticlesCount: regularArticleMismatches.length,
        flutterNewsPercentage: parseFloat(flutterNewsPercentage),
        regularPercentage: parseFloat(regularPercentage),
        regularMismatches: regularArticleMismatches
    };
}

// Run the analysis
const results = analyzeMismatchTypes();