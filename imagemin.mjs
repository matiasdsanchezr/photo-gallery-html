import imagemin from "imagemin";
import imageminJpegRecompress from "imagemin-jpeg-recompress";

const files = await imagemin(["src/assets/images/*.{jpg,png,svg}"], {
  destination: "dist/assets/images",
  plugins: [imageminJpegRecompress()],
});

console.log(files);
