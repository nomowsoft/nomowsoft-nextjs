import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import { ThemeContext } from "styled-components";
import {
  ServicesContainer,
  ServicesBox,
  ServicesTitle,
  ListBox,
  sliderSettings,
  CardBtn,
} from "./Services.styles";

const Services = () => {
  const theme = React.useContext(ThemeContext);
  const i18n = useTranslation();
  const { push } = useRouter();

  return (
    <ServicesContainer>
      <ServicesBox>
        <ServicesTitle>{i18n.t("common:services")}</ServicesTitle>
        {/* List */}
        <ListBox {...sliderSettings} rtl={theme.isRtl}>
          {[...Array(10).keys()].map((i) => (
            <div
              className="list-item"
              key={i}
              onClick={() => push("/start_demo")}
            >
              <span className="dot" />
              <h6 className="item-title">title</h6>
              <p className="item-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
              <CardBtn title="request service" btnStyle="success" />
            </div>
          ))}
        </ListBox>
      </ServicesBox>
    </ServicesContainer>
  );
};

export default Services;
