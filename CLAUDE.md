# Blog Project Instructions

## Deployment

### Manual Deployment
When user says "deploy please", run: `npm run build && netlify deploy --dir dist --prod --no-build`

This command builds the site locally (keeping rich link cards from remark-link-card-plus) and deploys only the built files to Netlify, avoiding build costs while maintaining functionality.

### Automatic Deployment (GitHub Actions)
The repository now has automated deployment via GitHub Actions:
- **Trigger**: Pushes to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Process**: Build locally on GitHub runner → Deploy to Netlify with `--no-build`
- **Secrets Required**:
  - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
  - `NETLIFY_SITE_ID`: Site ID from Netlify (`<YOUR_NETLIFY_SITE_ID>`)

### Deployment Tips (2024-06-28)
- **Timeout Issue**: `netlify deploy --dir dist --prod` may timeout during build phase on Netlify
- **Solution**: Use `--no-build` flag to skip remote build and deploy pre-built local files
- **Build Time**: Local build takes ~60s, much faster than remote build with HTTP requests
- **Cost Savings**: Local build is free, remote builds with remark-link-card-plus are expensive
- **One-liner**: `npm run build && netlify deploy --dir dist --prod --no-build`

## Japanese OG Image Support
The blog now supports Japanese text in dynamic OG images:
- Uses "Noto Sans JP" font for proper Japanese character rendering
- Optimized font sizes: title (56px), description (24px) for better readability
- Dynamic OG images are generated for all blog posts with Japanese titles
- Generated images are located at: `/[post-slug]/index.png`