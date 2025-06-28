# Blog Project Instructions

## Deployment
When user says "deploy please", run: `npm run build && netlify deploy --dir dist --prod`

This command builds the site locally (keeping rich link cards from remark-link-card-plus) and deploys only the built files to Netlify, avoiding build costs while maintaining functionality.

## Japanese OG Image Support
The blog now supports Japanese text in dynamic OG images:
- Uses "Noto Sans JP" font for proper Japanese character rendering
- Optimized font sizes: title (56px), description (24px) for better readability
- Dynamic OG images are generated for all blog posts with Japanese titles
- Generated images are located at: `/[post-slug]/index.png`