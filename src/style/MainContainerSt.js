import styled from "@emotion/styled";

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
      gap: 16px;
      width: 100%;
      height: auto;
      .book_list {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        .container_title {
          width: 100%;
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
