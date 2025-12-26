@echo off
echo Converting hero video to optimized formats...
echo.

cd /d "%~dp0.."

echo Step 1: Converting .mov to .mp4 (H.264)...
ffmpeg -i "public\videos\hero-video.mov" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "public\videos\hero-video.mp4"

if %ERRORLEVEL% NEQ 0 (
    echo Error converting to MP4
    pause
    exit /b 1
)

echo.
echo Step 2: Creating WebM version for better compression...
ffmpeg -i "public\videos\hero-video.mov" -c:v libvpx-vp9 -crf 30 -b:v 0 "public\videos\hero-video.webm"

if %ERRORLEVEL% NEQ 0 (
    echo Error converting to WebM
    pause
    exit /b 1
)

echo.
echo ========================================
echo Conversion complete!
echo ========================================
echo Created files:
echo - public\videos\hero-video.mp4
echo - public\videos\hero-video.webm
echo.
pause
