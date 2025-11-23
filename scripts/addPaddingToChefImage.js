import sharp from "sharp";
import path from "path";

const inputImagePath = path.resolve("public/chefs/chef1.jpg");
const outputImagePath = path.resolve("public/chefs/chef1_padded.png");

async function addPadding() {
  try {
    // Read metadata to get image dimensions
    const image = sharp(inputImagePath);
    const metadata = await image.metadata();
    console.log("Original image dimensions:", metadata.width, "x", metadata.height);
    
    // Desired dimensions
    const desiredWidth = 1024;
    const desiredHeight = 1536;

    // Calculate top & bottom padding
    const topPadding = Math.floor((desiredHeight - metadata.height) / 2);
    const bottomPadding = desiredHeight - metadata.height - topPadding;

    // Calculate left & right padding
    const leftPadding = Math.floor((desiredWidth - metadata.width) / 2);
    const rightPadding = desiredWidth - metadata.width - leftPadding;

    // Create new image with white background and padding
    const paddedImage = await image
      .extend({
        top: topPadding,
        bottom: bottomPadding,
        left: leftPadding,
        right: rightPadding,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile(outputImagePath);

    console.log("Padded image saved at:", outputImagePath);
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

addPadding();
