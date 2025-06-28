# Blog Project Instructions

## Deployment
When user says "deploy please", run: `npm run build && netlify deploy --dir dist --prod`

This command builds the site locally (keeping rich link cards from remark-link-card-plus) and deploys only the built files to Netlify, avoiding build costs while maintaining functionality.