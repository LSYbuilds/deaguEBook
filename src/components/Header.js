import React from "react";
import { HeaderContainer } from "../style/headerSt";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner">
        <div className="header_top">
          <div className="logo">
            <img src="/source/Logo.png" alt="Logo" />
          </div>
          <div className="nav">
            <ul className="gnb">
              <li>E-BOOK</li>
              <li>오디오북</li>
              <li>E-러닝</li>
              <li>웹DB</li>
              <li>이용안내</li>
              <li>나의도서관</li>
            </ul>
          </div>
          <div className="user">
            <div className="util">
              <div className="login">
                <span className="login_icon"></span>
                <p>로그인</p>
              </div>
              <div className="alert">
                <span className="alert_icon"></span>
                <p>알림</p>
              </div>
            </div>
            <div className="map"></div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="search">
            <div className="guide">
              <span>통합검색</span>
            </div>
            <form className="search_form">
              <input type="text" placeholder="빨리 입력해라"></input>
            </form>
          </div>
          <ul className="tap_menu">
            <li>소장자료</li>
            <li>부커스 구독자료</li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
