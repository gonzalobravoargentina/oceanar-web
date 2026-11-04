// Turns Cande's original photos and drawings into light web versions.
//
// Usage: node scripts/optimize-media.mjs <path to material-oceanar>
//
// Originals never enter the repo (it is public). Only the files listed below
// are exported: photos at 1920 px on the long side, drawings at 900 px with
// transparency. next/image then serves smaller sizes to each device.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const source = process.argv[2];
if (!source) {
  console.error("Usage: node scripts/optimize-media.mjs <material-oceanar>");
  process.exit(1);
}

const photos = {
  "_DSC6020.jpg": "surface-diver",
  "20260204_GON_2500.jpg": "kelp-forest-light",
  "GON_2970.jpg": "southern-right-whale",
  "GON_2881.jpg": "whale-under-surface",
  "medusa.jpg": "jellyfish",
  "_DSC6123.jpg": "diver-reef",
  "IMG_7792.jpg": "fish-school",
  "IMG_5931_C2.jpg": "wave",
  "20190901_IMG_9723.jpg": "surface-algae",
  "Kelp Forest_PH_GONZALO BRAVO_00003.jpg": "kelp-aerial",
};

const drawings = {
  "VidaMarina_dibujo_NEGROfondoblanco_Salmón de mar.png": "fish",
  "VidaMarina_dibujo_NEGROfondoblanco_Cangrejo nadador.png": "crab",
  "VidaMarina_dibujo_NEGROfondoblanco_Macrocystis.png": "kelp",
  "VidaMarina_dibujo_NEGROfondoblanco_Macrocystis pyrifera bosque.png":
    "kelp-forest",
  "meros.png.png": "fish-school",
  "VidaMarina_dibujo_NEGROfondoblanco_Lobo marino de un pelo.png": "sea-lion",
  "VidaMarina_dibujo_NEGROfondoblanco_Medusa.png": "jellyfish",
};

async function run(map, from, to, transform) {
  fs.mkdirSync(to, { recursive: true });
  for (const [file, name] of Object.entries(map)) {
    const output = path.join(to, `${name}.webp`);
    await transform(sharp(path.join(from, file)).rotate()).toFile(output);
    const kb = Math.round(fs.statSync(output).size / 1024);
    console.log(`${name}.webp  ${kb} KB`);
  }
}

await run(
  photos,
  path.join(source, "Fotos y videos"),
  "public/images/photos",
  (image) =>
    image
      .resize(1920, 1920, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 78 }),
);

await run(
  drawings,
  path.join(source, "Dibujos PNG - vida marina"),
  "public/images/drawings",
  (image) =>
    image
      .trim()
      .resize(900, 900, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 85, alphaQuality: 90 }),
);
