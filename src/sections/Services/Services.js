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

  return (
    <ServicesContainer>
      <ServicesBox>
        <ServicesTitle>Services</ServicesTitle>
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
