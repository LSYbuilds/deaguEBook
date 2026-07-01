import React from "react";
import { SearchMenuBox } from "../style/SearchMenuSt";
import { Link } from "react-router-dom";

const SearchMenu = () => {
  return (
    <SearchMenuBox>
      <ul className="search_gnb">
        <li>
          <Link to="#">신착도서</Link>
        </li>
        <li>
          <Link to="#">인기도서</Link>
        </li>
        <li>
          <Link to="#">주제별</Link>
        </li>
      </ul>
      <ul className="search_lnb">
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span></span>
            <span>인문 / 교양</span>
            <span>(23)</span>
          </Link>
        </li>
      </ul>
      <div className="search_banner"></div>
    </SearchMenuBox>
  );
};

export default SearchMenu;
