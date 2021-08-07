import React from "react";
import {
  IdentityContainer,
  IdentityTitle,
  Description,
  InfoSection,
  IdentityIconBox,
} from "./Identity.styles";

const Identity = () => {
  return (
    <IdentityContainer id="who_we_are">
      <IdentityIconBox>i</IdentityIconBox>
      <InfoSection>
        <IdentityTitle>
          Who{" "}
          <span style={{ color: "#217371" }}>
            nomow <span style={{ color: "#e66b27" }}>soft</span>
          </span>
        </IdentityTitle>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever{" "}
        </Description>
      </InfoSection>
    </IdentityContainer>
  );
};

export default Identity;
