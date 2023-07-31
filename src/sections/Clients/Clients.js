import React from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import {
  ClientContainer,
  ClientBox,
  ClientTitle,
  Slider
} from "./Clients.styles";
import Image from "next/image";

const Clients = ({ clients }) => {
  const i18n = useTranslation();
  return (
    <ClientBox id="clients">
      <ClientContainer>
        <ClientTitle>{i18n.t("common:clients")}</ClientTitle>
        <Slider>
          <div className="slider">
            <div className="slider-track">
              {clients?.map((item, i) => (
                  <div key={i} className="slide">
                    <img
                      src={item.icon}
                      width="100px"
                      height="100px"
                      alt=""
                      layout="fill"
                    />
                    <h1>{item.name}</h1>
                  </div>
              ))}
            </div>
          </div>
        </Slider>
      </ClientContainer>
    </ClientBox>
  );
};


export default Clients;
