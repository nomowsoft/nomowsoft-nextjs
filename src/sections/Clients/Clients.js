import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import {
  ClientContainer,
  ClientBox,
  ClientTitle,
  BoxSlider,
} from "./Clients.styles";

const Clients = () => {
  const i18n = useTranslation();
  return (
    <ClientBox id="clients">
      <ClientContainer>
        <ClientTitle>{i18n.t("common:clients")}</ClientTitle>
        <BoxSlider>
          <motion.div
            className="box"
            animate={{ x: "-50%" }}
            transition={{ duration: 20, ease: "linear", repeat: 200 }}
          >
            <div className="box-clone-list">
              {[...Array(6).keys()].map((i) => (
                <div key={i} className="box-icon">
                  icon {i}
                </div>
              ))}
            </div>
            <div className="box-clone-list">
              {[...Array(6).keys()].map((i) => (
                <div key={i} className="box-icon">
                  icon {6 - i}
                </div>
              ))}
            </div>
          </motion.div>
        </BoxSlider>
      </ClientContainer>
    </ClientBox>
  );
};

export default Clients;
