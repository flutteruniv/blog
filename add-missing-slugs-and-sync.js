import fs from 'fs';
import path from 'path';

function addMissingSlugs(blogDir) {
    const files = fs.readdirSync(blogDir);
    let added = 0;
    let errors = 0;
    
    console.log('🔍 Adding missing slug fields...\n');
    
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(blogDir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Check if slug field exists
            const hasSlug = content.match(/^slug:\s/m);
            
            if (!hasSlug) {
                const filename = path.basename(file, '.md');
                
                try {
                    // Add slug after title or at the end of frontmatter
                    if (content.includes('title:')) {
                        content = content.replace(/^(title:\s*["']?.*?["']?$)/m, `$1\nslug: "${filename}"`);
                    } else {
                        // If no title, add before the closing ---
                        content = content.replace(/^---$/m, `slug: "${filename}"\n---`);
                    }
                    
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`✅ Added slug to: ${file} → "${filename}"`);
                    added++;
                } catch (error) {
                    console.log(`❌ Error adding slug to ${file}: ${error.message}`);
                    errors++;
                }
            }
        }
    }
    
    console.log(`\n📊 Added slugs to ${added} files, ${errors} errors\n`);
    return { added, errors };
}

function extractMarkdownFilesWithSlugs(blogDir) {
    const markdownFiles = [];
    const files = fs.readdirSync(blogDir);
    
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(blogDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            
            const titleMatch = content.match(/^title:\s*["']?(.*?)["']?$/m);
            const title = titleMatch ? titleMatch[1].trim() : '';
            
            const slugMatch = content.match(/^slug:\s*["']?(.*?)["']?$/m);
            const slug = slugMatch ? slugMatch[1].trim() : '';
            
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
            }
        }
    }
    
    return markdownFiles;
}

function renameFileToMatchSlug(file, blogDir) {
    const currentPath = file.fullPath;
    const newFilename = `${file.slug}.md`;
    const newPath = path.join(blogDir, newFilename);
    
    // Skip if already the same
    if (currentPath === newPath) {
        return true;
    }
    
    // Check if target file already exists
    if (fs.existsSync(newPath)) {
        console.log(`⚠️  Skipping rename ${file.currentFilename} → ${newFilename} (target exists)`);
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
    
    console.log('🔧 Step 1: Adding missing slug fields...\n');
    
    // First, add missing slugs
    const { added, errors: addErrors } = addMissingSlugs(blogDir);
    
    console.log('🔧 Step 2: Syncing filenames with slugs...\n');
    
    // Then sync filenames
    const markdownFiles = extractMarkdownFilesWithSlugs(blogDir);
    const filesToRename = markdownFiles.filter(file => file.needsRename);
    
    console.log(`📊 Total files: ${markdownFiles.length}`);
    console.log(`📊 Files needing rename: ${filesToRename.length}\n`);
    
    if (filesToRename.length === 0) {
        console.log('🎉 All filenames already match their slugs!');
        return { slugsAdded: added, renamed: 0, errors: addErrors };
    }
    
    let renamed = 0;
    let renameErrors = 0;
    
    // Perform renames
    for (const file of filesToRename) {
        if (renameFileToMatchSlug(file, blogDir)) {
            renamed++;
        } else {
            renameErrors++;
        }
    }
    
    console.log('\n📊 Final Summary:');
    console.log(`📝 Slugs added: ${added}`);
    console.log(`📁 Files renamed: ${renamed}`);
    console.log(`❌ Total errors: ${addErrors + renameErrors}`);
    console.log(`📊 Total files processed: ${markdownFiles.length}`);
    
    if (renamed > 0 || added > 0) {
        console.log('\n🎉 Filename synchronization completed!');
    }
    
    return { slugsAdded: added, renamed, errors: addErrors + renameErrors };
}

// Run the synchronization
const results = syncFilenamesWithSlugs();