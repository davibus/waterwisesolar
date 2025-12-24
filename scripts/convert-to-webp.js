const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const articleImages = [
  'article-introduction.jpg',
  'article-land-vs-water.jpg',
  'article-fpv-business-case.jpg',
  'article-electricity-pricing.jpg',
  'article-water-conservation.jpg',
  'article-political-considerations.jpg',
  'article-international-fpv.jpg',
  'article-environmental-factors.jpg'
];

async function convertToWebP() {
  console.log('Converting images to WebP format...\n');

  for (const filename of articleImages) {
    const inputPath = path.join(imagesDir, filename);
    const outputPath = path.join(imagesDir, filename.replace('.jpg', '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${filename} -> ${path.basename(outputPath)}`);
      console.log(`  Original: ${(inputStats.size / 1024).toFixed(1)}KB`);
      console.log(`  WebP: ${(outputStats.size / 1024).toFixed(1)}KB`);
      console.log(`  Savings: ${savings}%\n`);
    } catch (error) {
      console.error(`✗ Error converting ${filename}:`, error.message);
    }
  }

  console.log('Conversion complete!');
}

convertToWebP();
