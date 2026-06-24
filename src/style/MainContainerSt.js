import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  .inner {
    margin: 0 auto;
    margin-top: 223px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 1400px;
    height: auto;
    .main_slide {
      width: 100%;
      height: 400px;
      background-color: gold;
    }
    .quick_select {
      width: 100%;
      height: 100%;
      .quick_select_list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 40px 53px 40px 53px;
        width: 100%;
        height: auto;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
          width: 117px;
          height: 117px;
          cursor: pointer;
          .quick_icon_box {
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            border-radius: 100%;
            background-color: #fff;
            overflow: hidden;
            img {
              width: 60px;
            }
          }
          .quick_icon_text {
            text-align: center;
            color: #000;
            font-size: 18px;
          }
        }
        li:hover {
          .quick_icon_text {
            font-size: 19px;
            font-weight: bold;
          }
        }
      }
    }
    .book_container {
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 100%;
      height: auto;
      .book_list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        height: auto;
        .container_title {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: auto;
          .title {
            display: flex;
            flex-direction: row;
            gap: 10px;
            font-size: 40px;
            font-weight: bold;
            .plus {
              border: none;
              background-image: url(${path}/source/plus.png);
              background-repeat: no-repeat;
              background-position: center;
              background-color: none;
              width: 50px;
              height: 100%;
            }
          }
          .toggle_btns {
            display: flex;
            flex-direction: row;
            gap: 8px;
            width: auto;
          }
        }
        .list_box {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
          height: 100%;
          li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 16px;
            width: 338px;
            height: auto;
            .book_img {
              width: 100%;
              height: 447px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .book_info {
              display: flex;
              flex-direction: column;
              justify-content: center;
              span:first-child {
                font-size: 22px;
                font-weight: bold;
              }
              span:last-child {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
    .bottom_banner {
      width: 100%;
      height: 108px;
      background-color: gold;
    }
    .note {
      width: 100%;
      height: 385px;
      background-color: gold;
    }
  }
`;

export const ToggleBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => (props.$active ? "#4BA3FF" : "#E6F2FF")};
  color: ${(props) => (props.$active ? "#FFF" : "#000")};
  border: none;
  text-align: center;
  padding: 0px 45px 0px 45px;
  height: 100%;
  border-radius: 200px;
  cursor: pointer;
`;
