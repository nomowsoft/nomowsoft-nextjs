/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import Image from "next/image";
import { NavLinkActive, Container } from "./Goals.styles";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Goals = ({ our_vision, our_message }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const t = useTranslation();
  return (
    <Container>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-12">
            <NavLinkActive data-aos="fade-up">
              <div>
                <ul
                  className="nav justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item px-1" role="presentation">
                    <button
                      className="nav-link active"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {our_vision[0].name}
                    </button>
                  </li>
                  <li className="nav-item px-1" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      {our_message[0].name}
                    </button>
                  </li>
                </ul>
              </div>
            </NavLinkActive>
          </div>
          <div data-aos="zoom-in" className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={our_vision[0].icon}
                      width={350}
                      height={300}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 mt-4">
                    <div className="discription">
                      <h5 className="address">{our_vision[0].name}</h5>
                      <p className="paragraph">{our_vision[0].content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src={our_message[0].icon}
                      width={350}
                      height={200}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 mt-4">
                    <div className="discription">
                      <h5 className="address">{our_message[0].name}</h5>
                      <p className="paragraph">{our_message[0].content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Goals;
