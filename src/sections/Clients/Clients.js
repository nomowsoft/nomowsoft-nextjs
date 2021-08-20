import React from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import {
  ClientContainer,
  ClientBox,
  ClientTitle,
  BoxSlider,
} from "./Clients.styles";
import Image from "next/image";

const Clients = ({ clients }) => {
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
              {clients?.map((item, i) => (
                <div key={i} className="box-icon">
                  <Image
                    src={item.icon}
                    // width="40px"
                    // height="40px"
                    alt=""
                    layout="fill"
                  />
                </div>
              ))}
            </div>
            <div className="box-clone-list">
              {clients?.map((item, i) => (
                <div key={i} className="box-icon">
                  <Image
                    src={item.icon}
                    // width="40px"
                    // height="40px"
                    alt=""
                    layout="fill"
                  />
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
