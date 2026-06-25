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
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 35px;
      width: 100%;
      height: 108px;
      .banner_box {
        position: relative;
        display: flex;
        z-index: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        height: 100%;
        padding: 0px 32px 0px 32px;
        box-sizing: border-box;
        .banner_title {
          font-size: 40px;
          font-weight: bold;
          z-index: 1;
        }
        .banner_img {
          gap: 10px;
          z-index: 1;
          img {
            padding: 0px 00px 0px 20px;
          }
        }
      }
      .banner_box:first-child {
        border-top: 5px solid #0d2b61;
      }
      .banner_box:first-child::before {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-image: url(${path}/source/db_banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(1px);
        content: "";
      }
      .banner_box:last-child {
        background-image: url(${path}/source/e_banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-top: 5px solid #a7b4c0;
        color: #fff;
      }
      .banner_box:last-child::before {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-image: url(${path}/source/e_banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(1px);
        content: "";
      }
    }
    .note {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      .note_title {
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 100%;
        height: auto;
        .title {
          font-size: 40px;
          font-weight: bold;
        }
        .plus {
        border: none;
        background-image: url(${path}/source/plus.png);
        background-repeat: no-repeat;
        background-position: center;
        background-color: none;
        width: 50px;
        }
      }
      .note_contents {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 30px;
        background-color: #e6f2ff;
        border-radius: 10px;
        li {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 8px 0px 8px 0px;
          color: #13161C;
          font-size: 16px;
          border-bottom: 1px solid #13161cff;
        }
      }
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
