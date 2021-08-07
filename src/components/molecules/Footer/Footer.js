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
import { tumblrSquare } from "react-icons-kit/fa/tumblrSquare";
import { youtubePlay } from "react-icons-kit/fa/youtubePlay";
import { mail } from "react-icons-kit/feather/mail";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const i18n = useTranslation();
  return (
    <React.Fragment>
      <FooterContainer>
        <FooterBox>
          <Section>
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
                <Icon size={25} icon={facebookSquare} />
                <Icon size={25} icon={tumblrSquare} />
                <Icon size={25} icon={twitterSquare} />
                <Icon size={25} icon={youtubePlay} />
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
      </PrivacySection>
    </React.Fragment>
  );
};

Footer.propTypes = {};

export default Footer;
