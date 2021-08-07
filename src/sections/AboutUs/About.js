import React from "react";
import {
  AboutBox,
  AboutTitle,
  ListItems,
  AboutContainer,
} from "./About.styles";
import Image from "next/image";

const About = () => {
  return (
    <AboutBox id="about_us">
      <AboutContainer>
        <AboutTitle>About us</AboutTitle>
        {/* <TitleBorder src={iii} /> */}
        <ListItems>
          {[...Array(6).keys()].map((i) => (
            <div className="item" key={i}>
              <div className="img" />
              <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry is standard dummy
                text
              </p>
              <div className="user-box">
                <Image
                  src="/assets/Banner.png"
                  height="60px"
                  width="60px"
                  alt="imag"
                  className="user-image"
                />
                <div className="user-info">
                  <h3>Ahmed Zaki</h3>
                  <p>Back-end Developer</p>
                </div>
              </div>
            </div>
          ))}
        </ListItems>
      </AboutContainer>
    </AboutBox>
  );
};

export default About;
