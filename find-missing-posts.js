import fs from 'fs';
import xml2js from 'xml2js';
import slugify from 'slugify';

async function findMissingPosts() {
  try {
    // Read the WordPress XML file
    const xmlData = fs.readFileSync('flutter.WordPress.2025-06-25.xml', 'utf8');
    
    // Parse XML
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlData);
    
    // Extract posts from the XML structure
    const items = result.rss.channel[0].item || [];
    
    console.log('Analyzing WordPress export...\n');
    
    const publishedPosts = [];
    const existingFiles = new Set();
    const duplicateSlugs = new Map();
    
    // Get list of existing markdown files
    const existingFilesArray = fs.readdirSync('src/data/blog').filter(f => f.endsWith('.md'));
    existingFilesArray.forEach(f => existingFiles.add(f));
    
    console.log(`Found ${existingFilesArray.length} existing markdown files\n`);
    
    // Analyze all published posts
    for (const item of items) {
      const status = item['wp:status'] && item['wp:status'][0];
      const postType = item['wp:post_type'] && item['wp:post_type'][0];
      
      if (status === 'publish' && postType === 'post') {
        const title = item.title[0];
        const author = item['dc:creator'] ? item['dc:creator'][0] : 'Unknown';
        
        // Use original WordPress slug (wp:post_name) if available
        let originalSlug = item['wp:post_name'] && item['wp:post_name'][0];
        if (originalSlug) {
          // Decode URL-encoded characters
          originalSlug = decodeURIComponent(originalSlug);
        }
        
        const slug = originalSlug || slugify(title, { lower: true, strict: true });
        const filename = `${slug}.md`;
        
        publishedPosts.push({
          title,
          author,
          slug,
          filename,
          exists: existingFiles.has(filename)
        });
        
        // Track duplicate slugs
        if (duplicateSlugs.has(slug)) {
          duplicateSlugs.get(slug).push(title);
        } else {
          duplicateSlugs.set(slug, [title]);
        }
      }
    }
    
    console.log(`Total published posts in WordPress: ${publishedPosts.length}`);
    
    // Find missing posts
    const missingPosts = publishedPosts.filter(post => !post.exists);
    console.log(`Missing posts: ${missingPosts.length}\n`);
    
    if (missingPosts.length > 0) {
      console.log('🚫 Missing Posts:');
      missingPosts.forEach((post, index) => {
        console.log(`${index + 1}. "${post.title}" by ${post.author}`);
        console.log(`   Slug: ${post.slug}`);
        console.log(`   Expected file: ${post.filename}\n`);
      });
    }
    
    // Find duplicate slugs
    const duplicates = Array.from(duplicateSlugs.entries()).filter(([slug, titles]) => titles.length > 1);
    if (duplicates.length > 0) {
      console.log('⚠️  Duplicate Slugs (posts that overwrite each other):');
      duplicates.forEach(([slug, titles]) => {
        console.log(`Slug: "${slug}" used by:`);
        titles.forEach((title, index) => {
          console.log(`  ${index + 1}. "${title}"`);
        });
        console.log('');
      });
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`- WordPress published posts: ${publishedPosts.length}`);
    console.log(`- Successfully converted: ${publishedPosts.length - missingPosts.length}`);
    console.log(`- Missing/Failed: ${missingPosts.length}`);
    console.log(`- Duplicate slugs: ${duplicates.length}`);
    
  } catch (error) {
    console.error('Error analyzing posts:', error);
  }
}

findMissingPosts();
