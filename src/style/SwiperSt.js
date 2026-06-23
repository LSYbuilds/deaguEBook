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
    color:#000;
  }
`;
