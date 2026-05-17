import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Disable sharp cache to prevent file locking on Windows
sharp.cache(false);

const IMAGES_DIR = './public/images';
const PROJECTS_DIR = './public/images/projects';

async function optimizeImage(filePath, maxWidth, quality = 80) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const tempPath = filePath + '.temp';
    
    // Get original metadata
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    console.log(`Optimizing ${filePath} (Original: ${metadata.width}x${metadata.height}, ${fs.statSync(filePath).size} bytes)`);
    
    let pipeline = sharp(filePath);
    
    // Resize if wider than maxWidth
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth);
    }
    
    // Format options
    if (ext === '.webp') {
      pipeline = pipeline.webp({ quality, effort: 6 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    } else {
      return; // Skip unsupported formats
    }
    
    await pipeline.toFile(tempPath);
    
    const origSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(tempPath).size;
    
    if (newSize < origSize) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      console.log(`  Success! Saved ${(origSize - newSize) / 1024.0.toFixed(2)} KB (${((origSize - newSize) / origSize * 100).toFixed(1)}% reduction) -> New size: ${newSize} bytes`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`  Skipped (new size was larger or identical)`);
    }
  } catch (err) {
    console.error(`Error optimizing ${filePath}:`, err);
  }
}

async function run() {
  console.log('Starting image optimization process...');
  
  // Clean up any stray temp files from previous runs
  const cleanTempFiles = (dir) => {
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach(file => {
        if (file.endsWith('.temp')) {
          try {
            fs.unlinkSync(path.join(dir, file));
            console.log(`Cleaned up stray temp file: ${file}`);
          } catch (e) {}
        }
      });
    }
  };
  cleanTempFiles(IMAGES_DIR);
  cleanTempFiles(PROJECTS_DIR);
  
  // 1. Optimize portfolio profile picture (max-width 800px for Retina display)
  const profilePicWebp = path.join(IMAGES_DIR, 'hamid-ai-developer-portfolio.webp');
  if (fs.existsSync(profilePicWebp)) {
    await optimizeImage(profilePicWebp, 800, 75);
  }
  
  const profilePicJpg = path.join(IMAGES_DIR, 'hamid-ai-developer-portfolio.jpg');
  if (fs.existsSync(profilePicJpg)) {
    await optimizeImage(profilePicJpg, 800, 75);
  }

  // 2. Optimize all project showcase images (max-width 1000px, quality 75)
  if (fs.existsSync(PROJECTS_DIR)) {
    const files = fs.readdirSync(PROJECTS_DIR);
    for (const file of files) {
      if (file.endsWith('.temp')) continue; // Skip temporary files
      
      const filePath = path.join(PROJECTS_DIR, file);
      if (!fs.existsSync(filePath)) continue; // Double check existence
      
      const stat = fs.statSync(filePath);
      if (stat.isFile() && /\.(webp|jpg|jpeg|png)$/i.test(file)) {
        await optimizeImage(filePath, 1000, 75);
      }
    }
  }
  
  console.log('Image optimization process complete!');
}

run();
