import { motion } from "framer-motion";
import React from "react";
import "./grid-image.scss";
import { imageGridVariant } from "../../variants/grid-variant";

type GridImageType = {
  image: string;
  col: number;
  currentKey: number;
};
export default function GridImage({ image, currentKey, col }: GridImageType) {
  console.log(currentKey, col);

  return (
    <div className="card">
      <motion.img
        variants={imageGridVariant}
        initial="initial"
        animate="animate"
        layoutId={`grid-img-${currentKey}x${col}`}
        className="card__img"
        src={image}
      />
    </div>
  );
}
