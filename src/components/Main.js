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
  const [recobookdata] = useState(Maindata.recoBook);
  const [popbookdata] = useState(Maindata.populerBook);
  const [newbookdata] = useState(Maindata.newBook);
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
                  <img src={item.src} alt="아이콘이미지" />
                </div>
                <span className="quick_icon_text">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="book_container">
          <div className="book_list">
            <div className="container_title">
              <span className="title">
                추천도서
                <button className="plus"></button>
              </span>
              <div className="toggle_btns">
                <button className="ebook_btn">E-BOOK</button>
                <button className="audio_btn">오디오북</button>
              </div>
            </div>
            <ul className="list_box">
              {recobookdata.map((item) =>(
                <li key={item.id}>
                  <div className="book_img">
                    <img src={item.src} alt="책이미지"></img>
                  </div>
                  <div className="book_info">
                    <span className="book_name">
                      {item.bookname}
                    </span>
                    <span className="book_writer">
                      {item.writer}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="book_list"></div>
          <div className="book_list"></div>
        </div>
        <div className="bottom_banner"></div>
        <div className="note"></div>
      </div>
    </MainContainer>
  );
};

export default Main;
