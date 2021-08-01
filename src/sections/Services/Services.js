import React from "react";
import { ThemeContext } from "styled-components";
import {
  ServicesContainer,
  ServicesBox,
  ServicesTitle,
  Description,
  ListBox,
  sliderSettings,
  CardBtn,
} from "./Services.styles";

const Services = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <ServicesContainer>
      <ServicesBox>
        <ServicesTitle>Services</ServicesTitle>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there is not anything embarrassing hidden in the middle of
          text.
        </Description>
        {/* List */}
        <ListBox {...sliderSettings} rtl={theme.isRtl}>
          <div>
            <div className="list-item">
              <span className="dot" />
              <h6 className="item-title">title</h6>
              <p className="item-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
              <CardBtn title="request service" btnStyle="success" />
            </div>
          </div>
          <div>
            <div className="list-item">
              <span className="dot" />
              <h6 className="item-title">title</h6>
              <p className="item-text">
                There are many variations of passages of Lorem Ipsum available,
                but but the majority have suffered alteration
              </p>
              <CardBtn title="request service" btnStyle="success" />
            </div>
          </div>
          <div>
            <div className="list-item">
              <span className="dot" />
              <h6 className="item-title">title</h6>
              <p className="item-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
              <CardBtn title="request service" btnStyle="success" />
            </div>
          </div>
          <div>
            <div className="list-item">
              <span className="dot" />
              <h6 className="item-title">title</h6>
              <p className="item-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
              <CardBtn title="request service" btnStyle="success" />
            </div>
          </div>
          <div>
            <div className="list-item">
              <span className="dot" />
              <h6 className="item-title">title</h6>
              <p className="item-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
              <CardBtn title="request service" btnStyle="success" />
            </div>
          </div>
        </ListBox>
      </ServicesBox>
    </ServicesContainer>
  );
};

export default Services;
