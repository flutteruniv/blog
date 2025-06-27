#!/bin/bash

# Script to replace WordPress image URLs with local paths
set -e

echo "Starting image URL replacement..."

# Function to replace URLs in markdown files
replace_urls_in_files() {
    local search_pattern="$1"
    local replacement="$2"
    local description="$3"
    
    echo "Replacing $description..."
    
    # Find all markdown files and replace URLs
    find src/data/blog -name "*.md" -type f -exec grep -l "$search_pattern" {} \; | while read -r file; do
        echo "  Processing: $file"
        sed -i.bak "s|$search_pattern|$replacement|g" "$file"
        rm "$file.bak"  # Remove backup file
    done
}

# Replace GCP server URLs with local paths
replace_urls_in_files \
    "http://34\.145\.4\.125/wp-content/" \
    "/images/wp-content/" \
    "GCP server URLs"

# Replace blog.flutteruniv.com URLs with local paths  
replace_urls_in_files \
    "http://blog\.flutteruniv\.com/wp-content/" \
    "/images/wp-content/" \
    "blog.flutteruniv.com URLs"

echo "URL replacement complete!"

# Count remaining external URLs (for verification)
remaining_gcp=$(find src/data/blog -name "*.md" -exec grep -l "34\.145\.4\.125" {} \; | wc -l)
remaining_blog=$(find src/data/blog -name "*.md" -exec grep -l "blog\.flutteruniv\.com.*\.(png\|jpg\|jpeg\|gif\|webp)" {} \; | wc -l)

echo "Verification:"
echo "  Files with remaining GCP URLs: $remaining_gcp"
echo "  Files with remaining blog URLs: $remaining_blog"

if [[ $remaining_gcp -eq 0 && $remaining_blog -eq 0 ]]; then
    echo "✅ All image URLs successfully replaced!"
else
    echo "⚠️  Some URLs may still need replacement"
fi