import fs from 'fs';
import path from 'path';

// Function to extract all WordPress posts with their data
function extractWordPressPostsWithSlugs(xmlPath) {
    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    const posts = [];
    
    // Split by <item> tags to process each post
    const items = xmlContent.split('<item>');
    
    for (let i = 1; i < items.length; i++) {
        const item = items[i];
        
        // Check if it's a published post
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
    
    return posts.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Function to extract markdown files with their slugs
function extractMarkdownSlugs(blogDir) {
    const markdownFiles = [];
    const files = fs.readdirSync(blogDir);
    
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(blogDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Extract title from frontmatter
            const titleMatch = content.match(/^title:\s*["']?(.*?)["']?$/m);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            // Extract slug from frontmatter
            const slugMatch = content.match(/^slug:\s*["']?(.*?)["']?$/m);
            const mdSlug = slugMatch ? slugMatch[1].trim() : '';
            
            // Also get filename without extension as potential slug
            const filenameSlug = path.basename(file, '.md');
            
            if (title) {
                markdownFiles.push({
                    filename: file,
                    filenameSlug,
                    title,
                    mdSlug: mdSlug || filenameSlug, // Use filename if no slug in frontmatter
                    normalizedTitle: normalizeTitle(title)
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

// Main comparison function
function compareWordPressAndMarkdownSlugs() {
    const xmlPath = '/Users/fujikawakei/app/blog/flutter.WordPress.2025-06-25.xml';
    const blogDir = '/Users/fujikawakei/app/blog/src/data/blog';
    
    console.log('🔍 Comparing WordPress slugs with Markdown slugs...\n');
    
    // Extract data
    const wordPressPosts = extractWordPressPostsWithSlugs(xmlPath);
    const markdownFiles = extractMarkdownSlugs(blogDir);
    
    console.log(`📊 WordPress posts: ${wordPressPosts.length}`);
    console.log(`📊 Markdown files: ${markdownFiles.length}\n`);
    
    // Create lookup maps
    const markdownByTitle = new Map();
    markdownFiles.forEach(file => {
        markdownByTitle.set(file.normalizedTitle, file);
    });
    
    // Compare slugs
    const exactMatches = [];
    const slugMismatches = [];
    const notFound = [];
    
    wordPressPosts.forEach(wpPost => {
        const matchingMd = markdownByTitle.get(wpPost.normalizedTitle);
        
        if (matchingMd) {
            if (wpPost.wpSlug === matchingMd.mdSlug) {
                exactMatches.push({
                    title: wpPost.title,
                    slug: wpPost.wpSlug,
                    wpId: wpPost.id,
                    filename: matchingMd.filename
                });
            } else {
                slugMismatches.push({
                    title: wpPost.title,
                    wpSlug: wpPost.wpSlug,
                    mdSlug: matchingMd.mdSlug,
                    filename: matchingMd.filename,
                    wpId: wpPost.id,
                    date: wpPost.date
                });
            }
        } else {
            notFound.push(wpPost);
        }
    });
    
    // Report results
    console.log(`✅ Exact slug matches: ${exactMatches.length}`);
    console.log(`⚠️  Slug mismatches: ${slugMismatches.length}`);
    console.log(`❌ Posts not found: ${notFound.length}\n`);
    
    if (slugMismatches.length > 0) {
        console.log('🔍 Detailed Slug Mismatches:');
        console.log('==============================');
        slugMismatches.forEach((mismatch, index) => {
            console.log(`${index + 1}. "${mismatch.title}"`);
            console.log(`   WordPress slug: "${mismatch.wpSlug}"`);
            console.log(`   Markdown slug:  "${mismatch.mdSlug}"`);
            console.log(`   Filename:       "${mismatch.filename}"`);
            console.log(`   WordPress ID:   ${mismatch.wpId}`);
            console.log(`   Date:           ${mismatch.date}`);
            console.log('');
        });
    }
    
    if (notFound.length > 0) {
        console.log('❌ Posts Not Found in Markdown:');
        console.log('===============================');
        notFound.forEach((post, index) => {
            console.log(`${index + 1}. "${post.title}"`);
            console.log(`   WordPress slug: "${post.wpSlug}"`);
            console.log(`   WordPress ID:   ${post.id}`);
            console.log('');
        });
    }
    
    // Summary statistics
    const slugMatchRate = ((exactMatches.length / wordPressPosts.length) * 100).toFixed(1);
    console.log(`📈 Slug Match Rate: ${slugMatchRate}%`);
    
    // Categorize types of mismatches
    if (slugMismatches.length > 0) {
        console.log('\n🔍 Mismatch Analysis:');
        console.log('=====================');
        
        const categories = {
            filenameMatches: 0,
            completelyDifferent: 0,
            minorDifferences: 0
        };
        
        slugMismatches.forEach(mismatch => {
            if (mismatch.wpSlug === mismatch.filename.replace('.md', '')) {
                categories.filenameMatches++;
            } else if (mismatch.mdSlug.includes(mismatch.wpSlug) || mismatch.wpSlug.includes(mismatch.mdSlug)) {
                categories.minorDifferences++;
            } else {
                categories.completelyDifferent++;
            }
        });
        
        console.log(`- Filename matches WordPress slug: ${categories.filenameMatches}`);
        console.log(`- Minor differences (partial match): ${categories.minorDifferences}`);
        console.log(`- Completely different slugs: ${categories.completelyDifferent}`);
    }
    
    return {
        totalPosts: wordPressPosts.length,
        exactMatches: exactMatches.length,
        slugMismatches: slugMismatches.length,
        notFound: notFound.length,
        slugMatchRate: parseFloat(slugMatchRate),
        mismatches: slugMismatches
    };
}

// Run the comparison
const results = compareWordPressAndMarkdownSlugs();