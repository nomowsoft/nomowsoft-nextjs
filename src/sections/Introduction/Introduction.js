import React from "react";
import useTranslation from "next-translate/useTranslation";
import { ThemeContext } from "styled-components";
import { IntroContainer, MainTitle } from "./Introduction.styles";
// import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { SplitLetters } from "animation/Text";
import Image from "next/image";

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
  const t = useTranslation();
  const theme = React.useContext(ThemeContext);
  const [active, setActive] = React.useState(0);

  const wordsList = ["products", "web_sites", "Application"];

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
        {t.t("common:we_make")}
        <AnimatePresence>
          <span className="animated-box">
            {wordsList.map(
              (word, i) =>
                active === i && (
                  <SplitLetters
                    key={i}
                    initial={{ y: "100%", opacity: 0 }}
                    animate="visible"
                    exit="exit"
                    variants={variant}
                    isWord={theme.isRtl}
                  >
                    {t.t(`common:${word}`)}
                  </SplitLetters>
                )
            )}
          </span>
        </AnimatePresence>
        <br />
        {t.t("common:make_easer")}
      </MainTitle>
      <div className="image-box">
        <Image
          src="/assets/header_pic.svg"
          layout="fill"
          alt=""
          className="header-image"
        />
      </div>
      {/* <div className="icon-box">
      </div> */}
    </IntroContainer>
  );
};

export default Introduction;
