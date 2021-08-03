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
    <AboutBox>
      <AboutContainer>
        <AboutTitle>About us</AboutTitle>
        {/* <TitleBorder src={iii} /> */}
        <ListItems>
          <div className="item">
            <div className="card-img" />
            {/* <Image
              src="/assets/icon.svg"
              width="200px"
              height="100px"
              
              alt="Picture"
            /> */}
          </div>
          <div className="item">item 1</div>
          <div className="item">item 1</div>
        </ListItems>
      </AboutContainer>
    </AboutBox>
  );
};

export default About;
