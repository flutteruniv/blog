# Slack Integration for Weekly News Articles

This document describes the Slack integration feature that automatically includes popular links shared in the Flutter大学 Slack community in the weekly news articles.

## Overview

The weekly news article generation now includes a "Flutter大学で話題になっていた記事" section that features the most popular links shared in the Slack workspace during the past week.

## How It Works

1. **Link Collection**: The system scans relevant channels in the Flutter大学 Slack workspace
2. **Popularity Analysis**: Links are ranked based on:
   - Number of mentions across channels
   - Number of reactions (🔥, ❤️, 👍, etc.)
   - Number of different channels where the link appeared
3. **Top Selection**: The top 5 most popular links are included in the article

## Popularity Scoring Algorithm

Each link receives a score calculated as:
```
Score = (mentions × 2) + (reactions × 3) + (unique_channels × 1)
```

## Files Added/Modified

### New Files
- `scripts/slack_popular_links.py` - Main Slack API integration
- `scripts/test_slack_integration.py` - Test script for the integration
- `SLACK_INTEGRATION.md` - This documentation

### Modified Files
- `scripts/generate_article.py` - Updated to include Slack links
- `.github/workflows/auto_news.yml` - Added SLACK_TOKEN environment variable

## Configuration

### Environment Variables
- `SLACK_TOKEN` - Slack Bot Token with the following permissions:
  - `channels:history` - Read message history from public channels
  - `channels:read` - Access information about public channels
  - `groups:history` - Read message history from private channels (if needed)
  - `groups:read` - Access information about private channels (if needed)

### GitHub Secrets
The following secret must be configured in the GitHub repository:
- `SLACK_TOKEN` - The Slack API token from the flutteruniv Firebase Functions configuration

## Channel Filtering

The integration focuses on channels relevant to mobile development:
- Channels containing keywords: `flutter`, `react`, `mobile`, `ios`, `android`, `general`, `dev`, `tech`, `news`
- Excludes archived channels
- Processes up to 10 channels to avoid API rate limits

## Link Filtering

Only relevant links are included:
- Excludes internal Slack links, Zoom meetings, Google Calendar invites
- Requires either multiple mentions OR reactions to be considered "popular"
- Filters out obviously spam or irrelevant content

## Usage

### Manual Testing
```bash
# Set environment variable
export SLACK_TOKEN="xoxb-your-slack-token-here"

# Run test script
python scripts/test_slack_integration.py

# Test full article generation
python scripts/generate_article.py
```

### Automatic Generation
The integration runs automatically every Monday via GitHub Actions as part of the existing `auto_news.yml` workflow.

## Error Handling

The system gracefully handles various error conditions:
- Missing or invalid Slack token
- Network connectivity issues
- API rate limiting
- Channel access permissions

If Slack integration fails, the article generation continues without the Slack section.

## API Rate Limiting

To avoid hitting Slack API rate limits:
- Processes only the 10 most relevant channels
- Limits history to the past 7 days
- Includes only top 5 links in the final output
- Implements error handling for rate limit responses

## Future Enhancements

Potential improvements:
1. **Better Link Metadata**: Fetch page titles and descriptions
2. **User Attribution**: Include information about who shared popular links
3. **Thread Analysis**: Analyze replies and thread engagement
4. **Custom Channel Selection**: Allow configuration of which channels to monitor
5. **Link Categorization**: Automatically categorize links by technology/topic