import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const iconsDir = 'src/assets/images/icons';

const files = await readdir(iconsDir);
const pngs = files.filter(f => extname(f).toLowerCase() === '.png');

console.log(`Konvertuji ${pngs.length} PNG souborů na WebP...\n`);

for (const file of pngs) {
  const input = join(iconsDir, file);
  const output = join(iconsDir, basename(file, '.png') + '.webp');

  const before = (await stat(input)).size;
  await sharp(input).webp({ quality: 85 }).toFile(output);
  const after = (await stat(output)).size;

  const saving = Math.round((1 - after / before) * 100);
  console.log(`${file} → ${basename(output)}  (${Math.round(before/1024)} KB → ${Math.round(after/1024)} KB, -${saving}%)`);
}

console.log('\nHotovo!');
