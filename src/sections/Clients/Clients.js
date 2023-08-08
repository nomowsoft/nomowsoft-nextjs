import React from "react";
import { ClientContainer, ClientBox, ClientTitle } from "./Clients.styles";
import useTranslation from "next-translate/useTranslation";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          spaceBetween={10}
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
              slidesPerView: 7,
              spaceBetween: 50,
            },
          }}
          // navigation
          pagination={{ clickable: true }}
        >
          <div className="box-clone-list">
            {clients?.map((item, i) => (
              <SwiperSlide key={i} className="swiper">
                <img
                  src={item.icon}
                  width={150}
                  height={150}
                  alt=""
                  layout="fill"
                />
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
