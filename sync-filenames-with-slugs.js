import fs from 'fs';
import path from 'path';

function extractMarkdownFilesWithSlugs(blogDir) {
    const markdownFiles = [];
    const files = fs.readdirSync(blogDir);
    
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(blogDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Extract title and slug from frontmatter
            const titleMatch = content.match(/^title:\s*["']?(.*?)["']?$/m);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            const slugMatch = content.match(/^slug:\s*["']?(.*?)["']?$/m);
            const slug = slugMatch ? slugMatch[1].trim() : '';
            
            // Get current filename without extension
            const currentFilename = path.basename(file, '.md');
            
            if (title && slug) {
                markdownFiles.push({
                    currentFilename: file,
                    currentFilenameWithoutExt: currentFilename,
                    fullPath: filePath,
                    title,
                    slug,
                    needsRename: currentFilename !== slug
                });
            } else {
                console.log(`⚠️  Warning: Missing title or slug in ${file}`);
                console.log(`   Title: ${title || 'MISSING'}`);
                console.log(`   Slug: ${slug || 'MISSING'}`);
            }
        }
    }
    
    return markdownFiles;
}

function renameFileToMatchSlug(file, blogDir) {
    const currentPath = file.fullPath;
    const newFilename = `${file.slug}.md`;
    const newPath = path.join(blogDir, newFilename);
    
    // Check if target file already exists
    if (fs.existsSync(newPath) && currentPath !== newPath) {
        console.log(`❌ Cannot rename ${file.currentFilename} to ${newFilename} - target file already exists`);
        return false;
    }
    
    try {
        fs.renameSync(currentPath, newPath);
        console.log(`✅ Renamed: ${file.currentFilename} → ${newFilename}`);
        return true;
    } catch (error) {
        console.log(`❌ Error renaming ${file.currentFilename}: ${error.message}`);
        return false;
    }
}

function syncFilenamesWithSlugs() {
    const blogDir = '/Users/fujikawakei/app/blog/src/data/blog';
    
    console.log('🔍 Scanning markdown files for filename/slug mismatches...\n');
    
    const markdownFiles = extractMarkdownFilesWithSlugs(blogDir);
    
    console.log(`📊 Total markdown files: ${markdownFiles.length}`);
    
    // Filter files that need renaming
    const filesToRename = markdownFiles.filter(file => file.needsRename);
    
    console.log(`📊 Files needing rename: ${filesToRename.length}`);
    console.log(`📊 Files already matching: ${markdownFiles.length - filesToRename.length}\n`);
    
    if (filesToRename.length === 0) {
        console.log('🎉 All filenames already match their slugs!');
        return { renamed: 0, errors: 0, total: markdownFiles.length };
    }
    
    console.log('🔧 Starting filename synchronization...\n');
    
    let renamed = 0;
    let errors = 0;
    
    // Show what will be renamed first
    console.log('📋 Files to be renamed:');
    console.log('======================');
    filesToRename.forEach((file, index) => {
        console.log(`${index + 1}. "${file.title}"`);
        console.log(`   Current: ${file.currentFilename}`);
        console.log(`   New:     ${file.slug}.md`);
        console.log('');
    });
    
    console.log('🔧 Proceeding with renames...\n');
    
    // Perform renames
    for (const file of filesToRename) {
        if (renameFileToMatchSlug(file, blogDir)) {
            renamed++;
        } else {
            errors++;
        }
    }
    
    console.log('\n📊 Summary:');
    console.log(`✅ Successfully renamed: ${renamed} files`);
    console.log(`❌ Errors: ${errors} files`);
    console.log(`📁 Total files: ${markdownFiles.length}`);
    
    if (errors === 0 && renamed > 0) {
        console.log('\n🎉 All filenames now match their slugs perfectly!');
    } else if (renamed === 0) {
        console.log('\n✨ All filenames were already in sync!');
    }
    
    return { renamed, errors, total: markdownFiles.length };
}

// Run the synchronization
const results = syncFilenamesWithSlugs();