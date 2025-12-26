#!/bin/bash

echo "Converting hero video to optimized formats..."
echo ""

cd "$(dirname "$0")/.."

echo "Step 1: Converting .mov to .mp4 (H.264)..."
ffmpeg -i "public/videos/hero-video.mov" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "public/videos/hero-video.mp4"

if [ $? -ne 0 ]; then
    echo "Error converting to MP4"
    exit 1
fi

echo ""
echo "Step 2: Creating WebM version for better compression..."
ffmpeg -i "public/videos/hero-video.mov" -c:v libvpx-vp9 -crf 30 -b:v 0 "public/videos/hero-video.webm"

if [ $? -ne 0 ]; then
    echo "Error converting to WebM"
    exit 1
fi

echo ""
echo "========================================"
echo "Conversion complete!"
echo "========================================"
echo "Created files:"
echo "- public/videos/hero-video.mp4"
echo "- public/videos/hero-video.webm"
echo ""
