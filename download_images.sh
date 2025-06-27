#!/bin/bash

# Script to download WordPress images for migration
set -e

echo "Starting image download..."

# Create combined image list
cat /tmp/gcp_images.txt /tmp/blog_images.txt | sort | uniq > /tmp/all_images.txt

# Function to download image and create directory structure
download_image() {
    local url="$1"
    local base_url
    local path
    
    if [[ "$url" == *"34.145.4.125"* ]]; then
        base_url="http://34.145.4.125"
        path="${url#http://34.145.4.125}"
    else
        base_url="http://blog.flutteruniv.com"
        path="${url#http://blog.flutteruniv.com}"
    fi
    
    # Create local path
    local local_path="public/images${path}"
    local local_dir=$(dirname "$local_path")
    
    # Create directory if it doesn't exist
    mkdir -p "$local_dir"
    
    # Download if file doesn't exist
    if [[ ! -f "$local_path" ]]; then
        echo "Downloading: $url"
        if curl -f -s -o "$local_path" "$url"; then
            echo "✓ Downloaded: $local_path"
        else
            echo "✗ Failed: $url"
            return 1
        fi
    else
        echo "⊘ Exists: $local_path"
    fi
}

# Process images in batches to avoid overwhelming the server
total=$(wc -l < /tmp/all_images.txt)
current=0

while IFS= read -r url; do
    current=$((current + 1))
    echo "[$current/$total] Processing: $url"
    
    # Extract just the URL part (remove file prefix)
    clean_url=$(echo "$url" | sed 's/^[^:]*://')
    
    if download_image "$clean_url"; then
        true # Success
    else
        echo "Failed to download: $clean_url" >> /tmp/failed_downloads.txt
    fi
    
    # Small delay to be respectful to the server
    sleep 0.1
    
done < /tmp/all_images.txt

echo "Download complete!"
echo "Total processed: $total"

if [[ -f /tmp/failed_downloads.txt ]]; then
    failed_count=$(wc -l < /tmp/failed_downloads.txt)
    echo "Failed downloads: $failed_count"
    echo "See /tmp/failed_downloads.txt for details"
else
    echo "All downloads successful!"
fi