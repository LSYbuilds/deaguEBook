import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MainContainer, ToggleBtn } from "../style/MainContainerSt";
import { StyledSwiper } from "../style/SwiperSt";
import "swiper/css";
import "swiper/css/navigation";
import Maindata from "../dataset/SlideData.json";
import Bookdata from "../dataset/BookData.json";

const Main = () => {
  const [slide] = useState(Maindata.slides);
  const [quick] = useState(Maindata.quick);
  const [bookData] = useState(Bookdata.bookList);
  const [btn, setBtn] = useState("1");
  console.log(bookData);
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
          {bookData.map((item) => (
            <div className="book_list" key={item.id}>
              <div className="container_title">
                <span className="title">
                  {item.title} <button className="plus"></button>
                </span>

                <div className="toggle_btns">
                  <ToggleBtn
                    key={item.id}
                    className="ebook_btn"
                    $active={btn === "btnon"}
                    onClick={() => setBtn("btnon")}
                  >
                    E-BOOK
                  </ToggleBtn>
                  <ToggleBtn
                    key={item.id}
                    className="audio_btn"
                    $active={btn === "btnoff"}
                    onClick={() => setBtn("btnoff")}
                  >
                    오디오북
                  </ToggleBtn>
                </div>
              </div>
              <ul className="list_box">
                {item.list.map((items) => (
                  <li key={items.id}>
                    <div className="book_img">
                      <img src={items.src} alt="책이미지" />
                    </div>

                    <div className="book_info">
                      <span className="book_name">{items.bookname}</span>

                      <span className="book_writer">{items.writer}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bottom_banner"></div>
        <div className="note"></div>
      </div>
    </MainContainer>
  );
};

export default Main;
