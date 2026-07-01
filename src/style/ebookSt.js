import styled from "@emotion/styled";

export const Ebookcontainer = styled.div`
  .inner {
    margin: 0 auto;
    margin-top: 223px;
    padding-top: 36px;
    display: flex;
    flex-direction: column;
    width: 1400px;
    height: 1000px;
    ul {
      display: flex;
      flex-direction: column;
      li {
        height: 56px;
        align-content: center;
        background-color: #f1f5f9;
        border-bottom: 1px solid gray;
        a {
          display: block;
          width: 100%;
          padding: 0px 24px;
          font-size: 22px;
          font-weight: 500;
        }
      }
    }
    .search_gnb {
      li:last-child {
        background-color: #0d2b61;
        a {
          color: #f1f5f9;
        }
      }
    }
    .search_lnb {
      li {
        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          gap: 5px;
          span {
            align-content: center;
            font-size: 18px;
          }
          span:first-child {
            color: gold;
            width: 3px;
            height: 3px;
          }
          span:last-child {
            font-size: 15px;
            color: gray;
          }
        }
      }
    }
  }
`;
