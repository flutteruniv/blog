import { visit } from 'unist-util-visit';

/**
 * Remark plugin to convert link cards back to embeds for YouTube and Twitter
 * This runs AFTER remark-link-card-plus
 */
export function remarkPostEmbeds() {
  return (tree) => {
    visit(tree, 'html', (node, index, parent) => {
      // Check if this is a remark-link-card-plus generated HTML
      if (node.value && node.value.includes('remark-link-card-plus__container')) {
        // Extract URL from the link card HTML
        const urlMatch = node.value.match(/href="([^"]+)"/);        
        if (urlMatch) {
          const url = urlMatch[1];
          
          let embedHtml = null;
          if (isYouTubeUrl(url)) {
            embedHtml = createYouTubeEmbed(url);
          } else if (isTwitterUrl(url)) {
            embedHtml = createTwitterEmbed(url);
          }
          
          if (embedHtml) {
            node.value = embedHtml;
          }
        }
      }
    });
  };
}

function isYouTubeUrl(url) {
  return /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/.test(url);
}

function isTwitterUrl(url) {
  return /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/\w+\/status\/\d+/.test(url);
}

function createYouTubeEmbed(url) {
  let videoId = null;
  
  // Extract video ID from different YouTube URL formats
  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.match(/[?&]v=([^&]+)/)?.[1];
  } else if (url.includes('youtu.be/')) {
    videoId = url.match(/youtu\.be\/([^?]+)/)?.[1];
  }
  
  if (!videoId) return null;
  
  return `
    <div class="youtube-embed-container">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/${videoId}"
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  `;
}

function createTwitterEmbed(url) {
  const tweetId = url.match(/status\/(\d+)/)?.[1];
  if (!tweetId) return null;
  
  return `
    <div class="twitter-embed-container">
      <blockquote class="twitter-tweet" data-theme="light">
        <a href="${url}"></a>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  `;
}
