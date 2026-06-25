import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  position: relative;
  width: auto;
  height: 100%;
  overflow: hidden;
  .swiper-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    color: #fff;
    background-color: gainsboro;
    font-size: 100px;
    width: auto;
    height: 100%;
    div {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #000;
  }
`;

export const BookSwiper = styled(Swiper)`
  width: 100%;
  .swiper-wrapper {
    display: flex;
    .swiper-slide{
      display: flex;
      flex-direction: column;
      .book_img{
        width: 100%;
        height: 470px;
        img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      }
      .book_info{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        color:#000;
        .book_name{
          font-size: 28px;
        }
        .book_writer{
          font-size: 16px;
        }
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #000;
  }
`;
