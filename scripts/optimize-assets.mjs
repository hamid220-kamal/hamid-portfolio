import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const ICONS_DIR = path.join(PUBLIC_DIR, 'icons');

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

async function generatePwaIcons() {
  console.log('--- Generating High-Res PWA Icons ---');
  const svgPath = path.join(PUBLIC_DIR, 'favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // 1. Standard 192x192 PNG
  await sharp(svgBuffer)
    .resize(192, 192)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'icon-192.png'));
  console.log('✓ Created public/icons/icon-192.png');

  // 2. Standard 512x512 PNG
  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'icon-512.png'));
  console.log('✓ Created public/icons/icon-512.png');

  // 3. Apple Touch Icon 180x180
  await sharp(svgBuffer)
    .resize(180, 180)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'apple-touch-icon.png'));
  console.log('✓ Created public/icons/apple-touch-icon.png');

  // 4. Maskable 512x512 with safe-zone padding (Android adaptive icon specification: 75% inner size)
  const innerSize512 = Math.round(512 * 0.75); // 384px inside 512px
  const innerBuffer512 = await sharp(svgBuffer)
    .resize(innerSize512, innerSize512)
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 15, g: 23, b: 42, alpha: 1 } // #0f172a
    }
  })
    .composite([{ input: innerBuffer512, gravity: 'center' }])
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'icon-maskable-512.png'));
  console.log('✓ Created public/icons/icon-maskable-512.png');

  // 5. Maskable 192x192
  const innerSize192 = Math.round(192 * 0.75); // 144px inside 192px
  const innerBuffer192 = await sharp(svgBuffer)
    .resize(innerSize192, innerSize192)
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: { r: 15, g: 23, b: 42, alpha: 1 }
    }
  })
    .composite([{ input: innerBuffer192, gravity: 'center' }])
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'icon-maskable-192.png'));
  console.log('✓ Created public/icons/icon-maskable-192.png');
}

async function convertDirectoryImagesToWebp(dirPath, quality = 82) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  let totalSavedBytes = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const baseName = path.basename(file, ext);
      const inputPath = path.join(dirPath, file);
      const outputPath = path.join(dirPath, `${baseName}.webp`);

      const originalStats = fs.statSync(inputPath);
      
      try {
        await sharp(inputPath)
          .webp({ quality, effort: 4 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const saved = originalStats.size - newStats.size;
        totalSavedBytes += saved;
        console.log(`✓ ${file}: ${(originalStats.size / 1024).toFixed(0)}KB -> ${(newStats.size / 1024).toFixed(0)}KB (${((saved / originalStats.size) * 100).toFixed(0)}% saved)`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err.message);
      }
    }
  }

  console.log(`Total saved in ${path.basename(dirPath)}: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
}

async function optimizeHeroHamid() {
  const inputPath = path.join(PUBLIC_DIR, 'images', 'hamid.png');
  const outputPath = path.join(PUBLIC_DIR, 'images', 'hamid.webp');
  if (fs.existsSync(inputPath)) {
    const originalStats = fs.statSync(inputPath);
    await sharp(inputPath)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 85, effort: 5 })
      .toFile(outputPath);
    const newStats = fs.statSync(outputPath);
    console.log(`✓ hamid.png: ${(originalStats.size / 1024).toFixed(0)}KB -> ${(newStats.size / 1024).toFixed(0)}KB (${(((originalStats.size - newStats.size) / originalStats.size) * 100).toFixed(0)}% saved)`);
  }
}

async function main() {
  await generatePwaIcons();
  console.log('\n--- Optimizing Hero Profile Image ---');
  await optimizeHeroHamid();
  console.log('\n--- Converting public/images/3d to WebP ---');
  await convertDirectoryImagesToWebp(path.join(PUBLIC_DIR, 'images', '3d'), 80);
  console.log('\n--- Converting public/images/projects to WebP ---');
  await convertDirectoryImagesToWebp(path.join(PUBLIC_DIR, 'images', 'projects'), 80);
  console.log('\nAsset optimization complete!');
}

main().catch(console.error);
