import React from "react";
import Link from "next/link";
import {
  FooterContainer,
  FooterBox,
  Section,
  PrivacySection,
} from "./Footer.styles";
// icons
import { Icon } from "react-icons-kit";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { whatsapp } from "react-icons-kit/fa/whatsapp";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { mail } from "react-icons-kit/feather/mail";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Footer = ({ data }) => {
  const i18n = useTranslation();
  return (
    <React.Fragment>
      <FooterContainer>
        <FooterBox>
          <Section>
            <Image src="/assets/logo.svg" width="40px" height="40px" alt="" />
            <h4>
              nomow <span>soft</span>
            </h4>
            <li>
              <Link href="/#who_we_are">{i18n.t("common:who_we_are")}</Link>
            </li>
            <li>
              <Link href="/#clients">{i18n.t("common:clients")}</Link>
            </li>
            <li>
              <Link href="/#about_us">{i18n.t("common:about_us")}</Link>
            </li>
            <li>
              <Link href="/recommended_questions">
                {i18n.t("common:frequently_questions")}
              </Link>
            </li>
          </Section>
          <Section>
            <h4>{i18n.t("common:services")}</h4>
            <li>{i18n.t("common:Website_design")}</li>
            <li>{i18n.t("common:publicity_advertisement")}</li>
            <li>{i18n.t("common:marketing")}</li>
            <li>{i18n.t("common:social_media")}</li>
            <li>{i18n.t("common:project_management")}</li>
            <li>{i18n.t("common:data_analysis")}</li>
          </Section>
          <Section>
            <h4>{i18n.t("common:contact_us")}</h4>
            <li>
              <div style={{ display: "flex" }}>
                <a href={data.facebook} target="_blank" rel="noreferrer">
                  <Icon size={25} icon={facebookSquare} />
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer">
                  <Icon size={25} icon={linkedinSquare} />
                </a>
                <a href={data.twitter} target="_blank" rel="noreferrer">
                  <Icon size={25} icon={twitterSquare} />
                </a>
                <a href={data.whatsapp} target="_blank" rel="noreferrer">
                  <Icon size={25} icon={whatsapp} />
                </a>
              </div>
            </li>
            <li>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Icon size={25} icon={mail} />
                <span className="email">info@nomowsoft.com</span>
              </div>
            </li>
          </Section>
        </FooterBox>
      </FooterContainer>
      <PrivacySection>
        <span>{i18n.t("common:all_rights_reserved")}</span>
        <div style={{ margin: "0 5px" }}>
          <Image
            src="/assets/logo_dark.svg"
            width="25px"
            height="25px"
            alt=""
          />
        </div>
        <span style={{ fontSize: 11 }}>@ 2021</span>
      </PrivacySection>
    </React.Fragment>
  );
};

Footer.propTypes = {};

export default Footer;
