import fs from 'fs';

const xml = fs.readFileSync('/Users/fujikawakei/app/blog/flutter.WordPress.2025-06-25.xml', 'utf8');

// Extract posts with their titles and tags
const postMatches = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
const posts = postMatches
  .map(item => {
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const statusMatch = item.match(/<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>/);
    const categoryMatches = item.match(/<category[^>]*><!\[CDATA\[(.*?)\]\]><\/category>/g) || [];
    
    if (!titleMatch || (statusMatch && statusMatch[1] !== 'publish')) return null;
    
    const tags = categoryMatches
      .map(cat => cat.match(/CDATA\[(.*?)\]/)?.[1])
      .filter(tag => tag && tag !== 'Uncategorized');
    
    return {
      title: titleMatch[1],
      tags: tags
    };
  })
  .filter(Boolean);

// Files using ウィジェット tag
const widgetJapaneseFiles = [
  'bottomnavigationbar-hide.md', 'dart-list-for.md', 'flutter-iconbutton.md', 
  'flutter-inheritedwidget.md', 'flutter-material-you-navigation-bar.md', 
  'flutter-navigationrail.md', 'flutter-riverpod.md', 'flutter-snackbar-scaffoldmessenger.md', 
  'flutter-themeextension.md', 'flutter-widget-placeholder.md', 'flutter-widget-stepper.md', 
  'widget-divider.md', 'widget-icon.md', 'widget-selectionarea.md', 'widget-sizedbox.md', 
  'widget-spacer.md'
];

// File using Widget tag (English)
const widgetEnglishFile = 'flutter-dropdownbutton.md';

console.log('=== CHECKING WIDGET TAGS IN WORDPRESS ===\n');

// Check a few sample files to see what WordPress used
const sampleTitles = [
  '【Flutter】 ドロップダウンボタン使ってみた！', // flutter-dropdownbutton.md
  '【Flutter】アイコンボタンを使ってみた！', // flutter-iconbutton.md
  '【Flutter】Divider Widget 仕切り線の作り方！', // widget-divider.md
  '【Flutter Widget】SizedBox Widgetの使い方' // widget-sizedbox.md
];

sampleTitles.forEach(title => {
  const post = posts.find(p => p.title === title);
  if (post) {
    console.log(`"${title}"`);
    console.log(`WordPress tags: [${post.tags.map(t => '"' + t + '"').join(', ')}]`);
    
    // Check if it contains Widget or ウィジェット
    const hasWidget = post.tags.includes('Widget');
    const hasWidgetJP = post.tags.includes('ウィジェット');
    console.log(`Has "Widget": ${hasWidget}, Has "ウィジェット": ${hasWidgetJP}`);
    console.log('');
  } else {
    console.log(`"${title}": NOT FOUND IN WORDPRESS`);
    console.log('');
  }
});

// Check all posts to see what WordPress actually used for widget-related tags
console.log('=== ALL WIDGET-RELATED TAGS IN WORDPRESS ===');
const allWordPressTags = new Set();
posts.forEach(post => {
  post.tags.forEach(tag => {
    if (tag.toLowerCase().includes('widget') || tag.includes('ウィジェット')) {
      allWordPressTags.add(tag);
    }
  });
});

console.log('WordPress used these widget-related tags:');
Array.from(allWordPressTags).forEach(tag => {
  console.log(`"${tag}"`);
});