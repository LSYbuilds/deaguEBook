import React from "react";
import { FooterContainer } from "../style/footerSt";

const Bg = () => {
  return (
    <FooterContainer>
      <div className="inner">
        <div className="fooer_logo">
          <img src="/source/Logo.png" alt="배너아이콘" />
        </div>
        <div className="footer_info">
          <ul className="site_info">
            <li>개인정보리방침</li>
            <li>도서관서비스현장</li>
            <li>저작권정책</li>
            <li>이메일무단수집거부</li>
          </ul>
          <p className="site_guide">
            PC(모바일, 태블릿)오류문의 070-8768-8902, 일반문의 053)803-8711,
            8719
          </p>
          <p className="site_time">
            근무시간 월~금 09:00 ~ 18:00 (주말, 공휴일 휴무 / 매주 월요일 휴관)
          </p>
          <p className="copyright">
            Copyright © 대구전자도서관. All rights reserved.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Bg;
