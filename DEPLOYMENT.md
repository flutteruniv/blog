# 週刊Flutter大学 - Deployment Guide

## Current Status
- ✅ WordPress content migrated to Astro
- ✅ Category system matches original structure
- ✅ SEO-friendly URLs preserved
- ✅ Japanese navigation implemented
- ✅ Enhanced typography and styling
- ✅ Link cards for rich previews
- ✅ Search functionality (Pagefind)

## Deployment Steps

### 1. Repository Setup
1. Create GitHub repository for this project
2. Push all code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Complete WordPress to Astro migration"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### 2. Netlify Deployment
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings will auto-detect from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
5. Click "Deploy site"

### 3. Domain Configuration
1. Once deployed, note your temporary Netlify URL (e.g., `amazing-site-123.netlify.app`)
2. Test thoroughly:
   - All pages load correctly
   - Categories work (`/category/flutter/beginer/`)
   - Search functionality works
   - Images from WordPress CDN load properly
3. In Netlify dashboard → Domain settings → Add custom domain
4. Add `blog.flutteruniv.com`
5. Update DNS records as instructed by Netlify

### 4. SSL & Performance
- SSL certificate will be automatically provisioned
- CDN is included for global performance
- Build time optimizations included in `netlify.toml`

## Image Strategy
- **WordPress CDN**: Images remain on WordPress hosting
- **URLs**: All image links continue to work (e.g., `https://blog.flutteruniv.com/wp-content/uploads/...`)
- **Benefits**: Zero migration effort, reliable hosting, multiple image sizes

## Post-Deployment Checklist
- [ ] Test all major pages and functionality
- [ ] Verify category pages load correctly
- [ ] Check search works properly
- [ ] Confirm images display correctly
- [ ] Test mobile responsiveness
- [ ] Submit new sitemap to Google Search Console
- [ ] Monitor analytics for any issues

## Rollback Plan
If any issues occur:
1. Revert DNS to point back to WordPress
2. WordPress site remains unchanged as backup
3. Investigate and fix issues on Netlify
4. Re-deploy when ready

## Future Optimizations
- Consider migrating images to new hosting for full control
- Add analytics (Google Analytics, Plausible, etc.)
- Implement newsletter signup if needed
- Add comment system if desired

## Technical Details
- **Framework**: Astro 5.10.0
- **Styling**: Tailwind CSS 4.1.10
- **Search**: Pagefind
- **Build Time**: ~2-3 minutes
- **Performance**: Excellent (static generation)