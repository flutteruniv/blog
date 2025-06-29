#!/bin/bash

# Script to convert all images in wp-content to WebP format
# This will significantly reduce file sizes while maintaining quality

set -e

# Configuration
IMAGE_DIR="/Users/fujikawakei/app/blog/public/images"
BLOG_DIR="/Users/fujikawakei/app/blog/src/data/blog"
WEBP_QUALITY=85
LOG_FILE="/tmp/webp_conversion.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Statistics
TOTAL_FILES=0
CONVERTED_FILES=0
ORIGINAL_SIZE=0
NEW_SIZE=0
ERRORS=0

echo -e "${BLUE}Starting WebP conversion process...${NC}"
echo "Log file: $LOG_FILE"
echo "Quality setting: $WEBP_QUALITY%"
echo ""

# Create log file
echo "WebP Conversion Log - $(date)" > "$LOG_FILE"
echo "===========================================" >> "$LOG_FILE"

# Function to convert a single image
convert_image() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    # Skip if WebP already exists and is newer
    if [[ -f "$output_file" && "$output_file" -nt "$input_file" ]]; then
        echo -e "${YELLOW}Skipping ${input_file##*/} (WebP exists and is newer)${NC}"
        return 0
    fi
    
    # Get original file size
    local original_size=$(stat -f%z "$input_file" 2>/dev/null || echo 0)
    ORIGINAL_SIZE=$((ORIGINAL_SIZE + original_size))
    
    echo -e "${BLUE}Converting: ${input_file##*/}${NC}"
    
    # Convert to WebP
    if magick "$input_file" -quality $WEBP_QUALITY "$output_file" 2>>"$LOG_FILE"; then
        # Get new file size
        local new_size=$(stat -f%z "$output_file" 2>/dev/null || echo 0)
        NEW_SIZE=$((NEW_SIZE + new_size))
        
        # Calculate compression ratio
        local ratio=0
        if [[ $original_size -gt 0 ]]; then
            ratio=$(echo "scale=1; ($original_size - $new_size) * 100 / $original_size" | bc -l)
        fi
        
        echo -e "${GREEN}✓ Converted: ${input_file##*/} (${ratio}% reduction)${NC}"
        echo "SUCCESS: $input_file -> $output_file (${ratio}% reduction)" >> "$LOG_FILE"
        CONVERTED_FILES=$((CONVERTED_FILES + 1))
    else
        echo -e "${RED}✗ Failed: ${input_file##*/}${NC}"
        echo "ERROR: Failed to convert $input_file" >> "$LOG_FILE"
        ERRORS=$((ERRORS + 1))
    fi
}

# Function to update markdown files
update_markdown_files() {
    echo -e "\n${BLUE}Updating markdown files to reference WebP images...${NC}"
    
    local updated_files=0
    
    # Find all markdown files
    find "$BLOG_DIR" -name "*.md" -type f | while read -r md_file; do
        local changes_made=false
        local temp_file="${md_file}.tmp"
        
        # Create a backup and work on temp file
        cp "$md_file" "$temp_file"
        
        # Replace image references with WebP versions
        # Match patterns like: /images/wp-content/uploads/2022/02/image.jpg or /images/authors/image.jpg
        while IFS= read -r line; do
            # Look for image references
            if echo "$line" | grep -q '/images/.*\.\(jpg\|jpeg\|png\|gif\)'; then
                # Replace extension with .webp
                new_line=$(echo "$line" | sed -E 's/\/images\/([^"]*)\.(jpg|jpeg|png|gif)/\/images\/\1.webp/g')
                if [[ "$new_line" != "$line" ]]; then
                    changes_made=true
                    echo "$new_line"
                else
                    echo "$line"
                fi
            else
                echo "$line"
            fi
        done < "$md_file" > "$temp_file"
        
        # Only update if changes were made
        if [[ "$changes_made" == true ]]; then
            mv "$temp_file" "$md_file"
            echo -e "${GREEN}✓ Updated: ${md_file##*/}${NC}"
            updated_files=$((updated_files + 1))
        else
            rm "$temp_file"
        fi
        
        echo "$updated_files" > /tmp/webp_updated_count
    done
    
    local final_count=$(cat /tmp/webp_updated_count 2>/dev/null || echo 0)
    echo -e "${GREEN}Updated $final_count markdown files${NC}"
    rm -f /tmp/webp_updated_count
}

# Main conversion process
echo "Scanning for images..."

# Find all image files and convert them
find "$IMAGE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read -r file; do
    TOTAL_FILES=$((TOTAL_FILES + 1))
    convert_image "$file"
    
    # Update counters in temp files for the subshell
    echo "$TOTAL_FILES" > /tmp/webp_total
    echo "$CONVERTED_FILES" > /tmp/webp_converted
    echo "$ORIGINAL_SIZE" > /tmp/webp_original_size
    echo "$NEW_SIZE" > /tmp/webp_new_size
    echo "$ERRORS" > /tmp/webp_errors
done

# Read final statistics from temp files
TOTAL_FILES=$(cat /tmp/webp_total 2>/dev/null || echo 0)
CONVERTED_FILES=$(cat /tmp/webp_converted 2>/dev/null || echo 0)
ORIGINAL_SIZE=$(cat /tmp/webp_original_size 2>/dev/null || echo 0)
NEW_SIZE=$(cat /tmp/webp_new_size 2>/dev/null || echo 0)
ERRORS=$(cat /tmp/webp_errors 2>/dev/null || echo 0)

# Clean up temp files
rm -f /tmp/webp_*

# Update markdown files
update_markdown_files

# Calculate total savings
SAVED_SIZE=$((ORIGINAL_SIZE - NEW_SIZE))
SAVINGS_PERCENT=0
if [[ $ORIGINAL_SIZE -gt 0 ]]; then
    SAVINGS_PERCENT=$(echo "scale=1; $SAVED_SIZE * 100 / $ORIGINAL_SIZE" | bc -l)
fi

# Convert bytes to human readable format
format_bytes() {
    local bytes=$1
    if [[ $bytes -gt $((1024*1024*1024)) ]]; then
        echo "$(echo "scale=1; $bytes / 1024 / 1024 / 1024" | bc -l)GB"
    elif [[ $bytes -gt $((1024*1024)) ]]; then
        echo "$(echo "scale=1; $bytes / 1024 / 1024" | bc -l)MB"
    elif [[ $bytes -gt 1024 ]]; then
        echo "$(echo "scale=1; $bytes / 1024" | bc -l)KB"
    else
        echo "${bytes}B"
    fi
}

# Display final statistics
echo ""
echo -e "${BLUE}=== WebP Conversion Complete ===${NC}"
echo -e "Total images found: ${YELLOW}$TOTAL_FILES${NC}"
echo -e "Successfully converted: ${GREEN}$CONVERTED_FILES${NC}"
echo -e "Errors: ${RED}$ERRORS${NC}"
echo -e "Original size: ${YELLOW}$(format_bytes $ORIGINAL_SIZE)${NC}"
echo -e "New size: ${GREEN}$(format_bytes $NEW_SIZE)${NC}"
echo -e "Space saved: ${GREEN}$(format_bytes $SAVED_SIZE) (${SAVINGS_PERCENT}%)${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Test your site to ensure all images load correctly"
echo "2. Consider removing original images once you're satisfied"
echo "3. Update your build process to prefer WebP images"
echo ""
echo -e "Full log available at: ${YELLOW}$LOG_FILE${NC}"