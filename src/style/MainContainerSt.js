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
        li:hover{
          .quick_icon_text{
            font-size: 19px;
            font-weight: bold;
          }
        }
      }
    }
    .recommned{
      width: 100%;
      height: 300px;
      background-color: red;
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
