import "./grid.scss";
import React from "react";
import { GRID_IMAGES } from "../../data/mock";
import GridImage from "../grid-image/GridImage";
import { useAppSelector } from "../../hooks/use-selectors";
import { motion, AnimatePresence } from "framer-motion";
import {
  gridVariant,
  imageGridVariant,
  screenGridVariant,
} from "../../variants/grid-variant";

export default function Grid() {
  const { expandGrid } = useAppSelector((state) => state.app);

  return (
    <AnimatePresence exitBeforeEnter>
      <>
        {expandGrid ? (
          <motion.div
            className="grid__align"
            variants={gridVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {GRID_IMAGES.map((item, index) =>
              item.map((image, id) => (
                <div className="grid__align__content" key={id}>
                  <motion.img
                    variants={imageGridVariant}
                    initial="initial"
                    animate="animate"
                    className="grid__align__content__img"
                    layoutId={`grid-img-${id}x${index}`}
                    src={image}
                  />
                </div>
              ))
            )}
          </motion.div>
        ) : (
          <motion.div
            variants={screenGridVariant}
            animate="animate"
            initial="initial"
            exit="exit"
            className="grid__expand"
          >
            {GRID_IMAGES.map((item, index) =>
              item.map((image, id) => (
                <GridImage image={image} col={index} currentKey={id} key={id} />
              ))
            )}
          </motion.div>
        )}
      </>
    </AnimatePresence>
  );
}
