/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ClientContainer, ClientBox, ClientTitle } from "./Clients.styles";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = ({ clients }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const t = useTranslation();
  return (
    <div>
      <ClientBox id="clients">
        <ClientContainer>
          <ClientTitle data-aos="fade-up">{t.t("common:clients")}</ClientTitle>
        </ClientContainer>
        <Swiper
          data-aos="fade-up"
          modules={[Autoplay]}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          // navigation
          pagination={{ clickable: true }}
        >
          <div className="box-clone-list">
            {clients?.map((item) => (
              <SwiperSlide key={item.id} className="swiper">
                <Image src={item.icon} width={150} height={150} alt="" />
                <h1>{item.name}</h1>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </ClientBox>
    </div>
  );
};
export default Clients;
