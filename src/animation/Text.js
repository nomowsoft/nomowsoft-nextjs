import React from "react";
import { motion } from "framer-motion";

export function SplitLetters({ children, ...rest }) {
  let words = children.split("");
  return words.map((word, i) => {
    return (
      <motion.span
        {...rest}
        key={children + i}
        style={{ display: "inline-block" }}
        custom={i}
      >
        {word}
      </motion.span>
    );
  });
}
