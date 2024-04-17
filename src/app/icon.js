import { generateImageMetadata } from 'next/image';

export default async function generateIcons() {
  const imageConfig = await generateImageMetadata({
    width: [16, 32], // Specify desired icon widths
    height: [16, 32], // Specify desired icon heights
    layout: 'fill',
    quality: 100, // Optional: Adjust image quality (0-100)
    deviceSizes: [640, 750, 828, 1024, 1200, 1536], // Optional: Generate for various devices
  });

  return {
    '/favicon.ico': imageConfig.image.content, // Set the path for the favicon
  };
}