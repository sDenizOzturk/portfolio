import fs from "fs-extra";
import path from "path";
import sharp from "sharp";
import glob from "fast-glob";

const FOLDERS = [
  "public/education",
  "public/product",
  "public/publication",
  "public/work-experience",
];

const MAX_WIDTH = 720;
const QUALITY = 80;

async function optimizeImage(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  const buffer = await fs.readFile(filePath);

  if (ext === ".png") {
    await sharp(buffer)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .png({ quality: QUALITY, compressionLevel: 9 })
      .toFile(filePath);
    console.log(`✅ Optimized PNG: ${filePath}`);
  } else if (ext === ".jpg" || ext === ".jpeg") {
    await sharp(buffer)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY })
      .toFile(filePath);
    console.log(`✅ Optimized JPEG: ${filePath}`);
  } else if (ext === ".webp") {
    await sharp(buffer)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(filePath);
    console.log(`✅ Re-optimized WebP: ${filePath}`);

    return;
  }

  if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
    const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");
    await sharp(buffer)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    console.log(`✅ WebP written: ${webpPath}`);
  }
}

async function main() {
  const allFiles: string[] = [];
  for (const folder of FOLDERS) {
    const abs = path.join(process.cwd(), folder);
    const files = await glob(`${abs}/**/*.{png,jpg,jpeg,webp}`);
    allFiles.push(...files);
  }

  console.log(`Found ${allFiles.length} image(s) to process.`);
  for (const file of allFiles) {
    try {
      await optimizeImage(file);
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err);
    }
  }
}

main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
