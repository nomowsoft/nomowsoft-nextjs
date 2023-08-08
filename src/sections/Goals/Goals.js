import React from "react";
import Image from "next/image";
import { NavLinkActive, Container } from "./Goals.styles";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Goals = () => {
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
                <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                      {t.t("common:visiona")}
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
                      {t.t("common:messagea")}
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
                      src="/assets/erp.png"
                      width={3000}
                      height={2000}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 mt-4">
                    <div className="discription">
                      <h5 className="address">{t.t("common:visiona")}</h5>
                      <p className="paragraph">{t.t("common:vision")}</p>
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
                      src="/assets/busnes.png"
                      width={2500}
                      height={2000}
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 mt-4">
                    <div className="discription">
                      <h5 className="address">{t.t("common:messagea")}</h5>
                      <p className="paragraph">{t.t("common:message")}</p>
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
