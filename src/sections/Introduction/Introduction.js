import React from "react";
import { IntroContainer, MainTitle } from "./Introduction.styles";
// import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { SplitLetters } from "animation/Text";

// const container = {
//   hidden: {
//     y: "200%",
//     transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
//   },
//   visible: {
//     y: 0,
//     transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
//   },
// };
const variant = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
  exit: () => ({
    y: 1,
    opacity: 0,
    transition: { duration: 0 },
  }),
};

const Introduction = () => {
  const [active, setActive] = React.useState(0);

  const wordsList = [
    "Products",
    "Products2",
    "Products3",
    "Products4",
    "Products5",
  ];

  const handleChange = (value) => {
    setActive(active === wordsList.length - 1 ? 0 : value + 1);
  };

  React.useEffect(() => {
    setTimeout(() => {
      handleChange(active);
    }, 6000);
  });

  return (
    <IntroContainer>
      <MainTitle>
        We make
        <AnimatePresence>
          {wordsList.map(
            (word, i) =>
              active === i && (
                <SplitLetters
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate="visible"
                  exit="exit"
                  variants={variant}
                >
                  {word}
                </SplitLetters>
              )
          )}
        </AnimatePresence>
        <br />
        that make your life easier
      </MainTitle>
    </IntroContainer>
  );
};

export default Introduction;
