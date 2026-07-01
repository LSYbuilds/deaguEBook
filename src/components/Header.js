import React from "react";
import { HeaderContainer } from "../style/headerSt";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner">
        <div className="header_top">
          <div className="logo">
            <Link to="/">
              <img src="/source/Logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="nav">
            <ul className="gnb">
              <li>
                <Link to="/ebook">E-BOOK</Link>
              </li>
              <li>
                <Link></Link>오디오북
              </li>
              <li>
                <Link></Link>E-러닝
              </li>
              <li>
                <Link></Link>웹DB
              </li>
              <li>
                <Link></Link>이용안내
              </li>
              <li>
                <Link></Link>나의도서관
              </li>
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
            <button className="map"></button>
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
