import React from "react";
import { Contents } from "../style/ebookContentsSt";
import { Link } from "react-router-dom";

const EbookContents = () => {
  return (
    <Contents>
      <div className="contents_head">
        <div className="page_history"></div>
        <div className="contents_title">
          <spna>E-BOOK</spna>
        </div>
        <div className="contents_info">
          <div className="book_count"></div>
          <ul className="book_sort">
            <li>
              <Link to="#">인기순</Link>
            </li>
            <li>
              <Link to="#">제목순</Link>
            </li>
            <li>
              <Link to="#">최신순</Link>
            </li>
          </ul>
        </div>
        <ul className="book_list"></ul>
      </div>
    </Contents>
  );
};

export default EbookContents;
