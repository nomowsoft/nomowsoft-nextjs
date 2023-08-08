import React from "react";
import {
  AboutBox,
  AboutTitle,
  ListItems,
  AboutContainer,
} from "./About.styles";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = ({ feedbacks }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const t = useTranslation();
  return (
    <AboutBox id="about_us">
      <AboutContainer>
        <AboutTitle data-aos="zoom-in">{t.t("common:about_us")}</AboutTitle>
        {/* <TitleBorder src={iii} /> */}
        <ListItems data-aos="zoom-in">
          {feedbacks?.map((feed, i) => (
            <div className="item" key={i}>
              <div className="img">
                <Image src="/assets/logo.svg" layout="fill" alt="imag" />
              </div>
              <p className="text">{feed.content}</p>
              <div className="user-box">
                <Image
                  src={feed.icon}
                  height={200}
                  width={200}
                  alt="imag"
                  // className="user-image"
                />
                <div className="user-info">
                  <h3>{feed.name}</h3>
                  <p>{feed.job_title}</p>
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
