import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = resolve(__dirname, '../src/assets/images/Logo.png');
const publicDir = resolve(__dirname, '../public');

const meta = await sharp(logoPath).metadata();
const { width, height } = meta;

// Crop just the crane icon: top ~55% height, center ~38% width
const cropW = Math.floor(width * 0.38);
const cropL = Math.floor(width * 0.31);
const cropH = Math.floor(height * 0.55);
const cropT = 0;

// favicon.png 32x32
await sharp(logoPath)
  .extract({ left: cropL, top: cropT, width: cropW, height: cropH })
  .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(resolve(publicDir, 'favicon.png'));

// favicon-180.png for apple-touch-icon (full logo, white bg)
await sharp(logoPath)
  .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 255 } })
  .png()
  .toFile(resolve(publicDir, 'apple-touch-icon.png'));

console.log(`Logo: ${width}x${height}px`);
console.log('favicon.png (32x32) — ikona jerabu');
console.log('apple-touch-icon.png (180x180) — cele logo');
