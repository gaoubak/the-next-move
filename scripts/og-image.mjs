// Génère public/og-image.png (1200×630), l'aperçu affiché lors d'un partage sur LinkedIn, WhatsApp, etc.
// Usage : npm run og
import sharp from 'sharp';

const W = 1200, H = 630, PHOTO_W = 440;
const creme = '#F4EFE7';

// Logo (zone utile du PNG fond crème) et portrait recadré à droite
const logo = await sharp('src/assets/logo/the-next-move-logo-fond-creme.webp')
  .extract({ left: 200, top: 240, width: 2080, height: 420 })
  .resize({ width: 600 })
  .toBuffer();
const photo = await sharp('src/assets/photos/tatiana-rizk.webp')
  .resize(PHOTO_W, H, { fit: 'cover', position: 'top' })
  .toBuffer();

const text = Buffer.from(`
<svg width="${W - PHOTO_W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <g font-family="Georgia, 'Times New Roman', serif" fill="#292824">
    <text x="72" y="300" font-size="40">Clarifier la suite.</text>
    <text x="72" y="352" font-size="40" font-style="italic" fill="#5F6858">Structurer le changement.</text>
    <text x="72" y="404" font-size="40">Passer à l’action.</text>
  </g>
  <line x1="72" y1="470" x2="${W - PHOTO_W - 72}" y2="470" stroke="#292824" stroke-opacity=".15"/>
  <text x="72" y="520" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="600" fill="#292824">Tatiana Rizk</text>
  <text x="72" y="550" font-family="Segoe UI, Arial, sans-serif" font-size="17" fill="#5E5B53" letter-spacing="1.5">CONSULTANTE · COACH · FORMATRICE</text>
</svg>`);

await sharp({ create: { width: W, height: H, channels: 3, background: creme } })
  .composite([
    { input: logo, left: 52, top: 70 },
    { input: text, left: 0, top: 0 },
    { input: photo, left: W - PHOTO_W, top: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png');

console.log('public/og-image.png généré');
