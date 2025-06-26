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

// Function to extract markdown files with their data
function extractMarkdownFiles(blogDir) {
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
                    normalizedTitle: normalizeTitle(title),
                    content
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
           wpSlug.includes('flutter-news-');
}

// Function to generate date-based slug for Flutter News
function generateFlutterNewsSlug(date, title) {
    // Convert date to YYYYMMDD format
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    
    return `flutter-news-${year}${month}${day}`;
}

// Function to update markdown file slug
function updateMarkdownSlug(filePath, newSlug) {
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

// Function to rename file if needed
function renameFileIfNeeded(oldPath, newSlug) {
    const dir = path.dirname(oldPath);
    const oldFilename = path.basename(oldPath);
    const newFilename = `${newSlug}.md`;
    const newPath = path.join(dir, newFilename);
    
    if (oldFilename !== newFilename && !fs.existsSync(newPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`📁 Renamed: ${oldFilename} → ${newFilename}`);
        return newPath;
    }
    
    return oldPath;
}

// Main function to fix slugs
function fixSlugs() {
    const xmlPath = '/Users/fujikawakei/app/blog/flutter.WordPress.2025-06-25.xml';
    const blogDir = '/Users/fujikawakei/app/blog/src/data/blog';
    
    console.log('🔧 Starting slug correction process...\n');
    
    const wordPressPosts = extractWordPressPostsWithSlugs(xmlPath);
    const markdownFiles = extractMarkdownFiles(blogDir);
    
    // Create lookup map
    const markdownByTitle = new Map();
    markdownFiles.forEach(file => {
        markdownByTitle.set(file.normalizedTitle, file);
    });
    
    let corrected = 0;
    let flutterNewsKept = 0;
    let errors = 0;
    
    console.log('🔍 Processing each post...\n');
    
    wordPressPosts.forEach(wpPost => {
        const matchingMd = markdownByTitle.get(wpPost.normalizedTitle);
        
        if (matchingMd && wpPost.wpSlug !== matchingMd.mdSlug) {
            const isNewsPost = isFlutterNews(wpPost.title, wpPost.wpSlug);
            
            if (isNewsPost) {
                // For Flutter News, keep current flutter-news-{date} pattern
                const expectedSlug = generateFlutterNewsSlug(wpPost.date, wpPost.title);
                if (!matchingMd.mdSlug.startsWith('flutter-news-')) {
                    console.log(`📰 Flutter News: "${wpPost.title}"`);
                    console.log(`   Updating to: ${expectedSlug}`);
                    
                    try {
                        updateMarkdownSlug(matchingMd.filepath, expectedSlug);
                        const newPath = renameFileIfNeeded(matchingMd.filepath, expectedSlug);
                        flutterNewsKept++;
                    } catch (error) {
                        console.log(`❌ Error updating ${matchingMd.filename}: ${error.message}`);
                        errors++;
                    }
                } else {
                    flutterNewsKept++;
                }
            } else {
                // For regular articles, use original WordPress slug
                console.log(`📝 Regular Article: "${wpPost.title}"`);
                console.log(`   WP slug: ${wpPost.wpSlug}`);
                console.log(`   Current: ${matchingMd.mdSlug}`);
                console.log(`   Updating to: ${wpPost.wpSlug}`);
                
                try {
                    updateMarkdownSlug(matchingMd.filepath, wpPost.wpSlug);
                    const newPath = renameFileIfNeeded(matchingMd.filepath, wpPost.wpSlug);
                    corrected++;
                } catch (error) {
                    console.log(`❌ Error updating ${matchingMd.filename}: ${error.message}`);
                    errors++;
                }
            }
            console.log('');
        }
    });
    
    console.log('📊 Summary:');
    console.log(`✅ Regular articles corrected: ${corrected}`);
    console.log(`📰 Flutter News posts processed: ${flutterNewsKept}`);
    console.log(`❌ Errors: ${errors}`);
    console.log('\n🎉 Slug correction process completed!');
    
    return { corrected, flutterNewsKept, errors };
}

// Run the fix
const results = fixSlugs();