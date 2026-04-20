const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const files = fs.readdirSync(imagesDir);

async function optimizeImages() {
  console.log('🔧 Optimizing images...\n');
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const inputPath = path.join(imagesDir, file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    // Skip if already a webp
    if (ext === '.webp') continue;

    const statBefore = fs.statSync(inputPath);
    
    try {
      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);
      
      const statAfter = fs.statSync(outputPath);
      const saving = Math.round((1 - statAfter.size / statBefore.size) * 100);
      
      console.log(`✅ ${file} → ${baseName}.webp | ${Math.round(statBefore.size/1024)}KB → ${Math.round(statAfter.size/1024)}KB (${saving}% smaller)`);
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err.message);
    }
  }

  console.log('\n✔ All images optimized!');
}

optimizeImages();
