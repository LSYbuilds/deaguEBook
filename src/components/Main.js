import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MainContainer } from "../style/MainContainerSt";
import { StyledSwiper } from "../style/SwiperSt";
import "swiper/css";
import "swiper/css/navigation";
import Maindata from "../dataset/SlideData.json";

const Main = () => {
  const [slide] = useState(Maindata.slides);
  const [quick] = useState(Maindata.quick);
  console.log(quick);
  return (
    <MainContainer>
      <div className="inner">
        <div className="main_slide">
          <StyledSwiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
            }}
            navigation
            speed={1000}
            loop
          >
            {slide.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img src={slide.src} alt="슬라이드 이미지" />
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </div>
        <div className="quick_select">
          <ul className="quick_select_list">
            {quick.map((item) => (
              <li key={item.id}>
                <div className="quick_icon_box">
                  <img src={item.src} alt="" />
                </div>
                <span className="quick_icon_text">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="recommned">
          
        </div>
        <div className="bottom_banner"></div>
        <div className="note"></div>
      </div>
    </MainContainer>
  );
};

export default Main;
