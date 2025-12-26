# Video Conversion Instructions

FFmpeg has been installed on your system. To convert your hero video to optimized formats, follow these steps:

## Quick Start

1. **Close this terminal and open a NEW terminal window** (required for PATH to refresh)

2. **Navigate to the project directory:**
   ```bash
   cd C:\Users\DCALL\Desktop\waterwisesolar\web
   ```

3. **Run the conversion script:**

   **Windows (Command Prompt or PowerShell):**
   ```cmd
   scripts\convert-video.bat
   ```

   **Git Bash or WSL:**
   ```bash
   bash scripts/convert-video.sh
   ```

## What This Does

The script will create two optimized video files:

1. **hero-video.mp4** - H.264 encoded for broad compatibility
   - CRF 23 (high quality)
   - AAC audio at 128k
   - Works on all browsers including Safari

2. **hero-video.webm** - VP9 encoded for best compression
   - CRF 30 (balanced quality/size)
   - Smaller file size than MP4
   - Preferred by Chrome, Firefox, Edge

## Browser Fallback Order

The HeroVideo component has been updated to use:
1. WebM (best compression) - Chrome, Firefox, Edge
2. MP4 (broad compatibility) - Safari, older browsers
3. MOV (original) - Fallback

## Performance Benefits

- **Smaller file sizes** = faster page loads
- **Better compression** = reduced bandwidth costs
- **Multiple formats** = optimal quality for each browser
- **Lazy metadata loading** = video info loads first, full video streams as needed

## Troubleshooting

If the script doesn't run:
- Verify ffmpeg is in PATH: `ffmpeg -version`
- If not found, restart your computer to ensure PATH is refreshed
- Alternatively, run: `winget list Gyan.FFmpeg` to confirm installation

## Manual Conversion (Alternative)

If the script doesn't work, run these commands manually:

```bash
# Convert to MP4
ffmpeg -i public/videos/hero-video.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k public/videos/hero-video.mp4

# Convert to WebM
ffmpeg -i public/videos/hero-video.mov -c:v libvpx-vp9 -crf 30 -b:v 0 public/videos/hero-video.webm
```
