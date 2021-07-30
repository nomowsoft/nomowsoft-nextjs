import React from "react";
// import PropTypes from "prop-types";
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

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <FooterBox>
          <Section>
            <h4>
              nomow
              <span>soft</span>
            </h4>
            <li>who are we</li>
            <li>about us</li>
            <li>recommended questions</li>
            <li>recommended questions</li>
          </Section>
          <Section>
            <h4>services</h4>
            <li>service 1</li>
            <li>service 2</li>
            <li>service 3</li>
            <li>service 4</li>
            <li>service 5</li>
            <li>service 6</li>
          </Section>
          <Section>
            <h4>contact us</h4>
            <li>
              <div style={{ display: "flex" }}>
                <Icon size={25} icon={facebookSquare} />
                <Icon size={25} icon={tumblrSquare} />
                <Icon size={25} icon={twitterSquare} />
                <Icon size={25} icon={youtubePlay} />
              </div>
            </li>
            <li>
              <div style={{ display: "flex", alignItems: 'center' }}>
                <Icon size={25} icon={mail} />
                <span className="email">monowsoft2021@gmail.com</span>
              </div>
            </li>
          </Section>
        </FooterBox>
      </FooterContainer>
      <PrivacySection>
        <span>All rights reserved to nomow company</span>
      </PrivacySection>
    </React.Fragment>
  );
};

Footer.propTypes = {};

export default Footer;
