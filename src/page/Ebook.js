import React from "react";
import { Ebookcontainer } from "../style/ebookSt";
import SearchMenu from "../components/SearchMenu";

const Ebook = () => {
  return (
    <Ebookcontainer>
      <div className="inner">
        <SearchMenu />
      </div>
    </Ebookcontainer>
  );
};

export default Ebook;
