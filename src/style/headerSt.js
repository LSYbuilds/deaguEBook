import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999999;
  width: 100%;
  background: #fff;
  .inner {
    margin: 0 auto;
    padding-top: 36px;
    display: flex;
    flex-direction: column;
    width: 1400px;
    height: 223px;
    .header_top {
      padding-bottom: 36px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 100px;
      width: 100%;
      height: auto;
      .logo {
        width: 175px;
        height: 100%;
        cursor: pointer;
      }
      .nav {
        width: 100%;
        height: 100%;
        .gnb {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          li {
            width: 100%;
            text-align: center;
            height: 100%;
            font-size: 22px;
            cursor: pointer;
            a{
                          display: flex;
            flex-direction: column;
            justify-content: center;
              width: 100%;
              height: 100%;
            }
          }
          li:hover{
            color: orange;
          }
        }
      }
      .user {
        display: flex;
        flex-direction: row;
        gap: 24px;
        width: 198px;
        height: 100%;
        .util {
          display: flex;
          flex-direction: row;
          gap: 24px;
          div {
            display: flex;
            flex-direction: row;
            gap: 4px;
            justify-content: center;
            width: auto;
            height: 100%;
            p {
              display: flex;
              flex-direction: column;
              justify-content: center;
              font-size: 16px;
            }
            span {
              display: block;
              width: 24px;
              height: 100%;
            }
            .login_icon {
              background-image: url(${path}/source/login.png);
              background-repeat: no-repeat;
              background-position: center;
            }
            .alert_icon {
              background-image: url(${path}/source/alert.png);
              background-repeat: no-repeat;
              background-position: center;
            }
          }
        }
        .map {
          width: 24px;
          height: 100%;
          background-image: url(${path}/source/hamberger.png);
          background-repeat: no-repeat;
          background-position: center;
          border: none;
        }
      }
    }
    .header_bottom {
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
      width: 80%;
      height: auto;
      padding: 22px;
      .search {
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 70%;
        padding: 16px 30px 16px 30px;
        border-radius: 200px;
        border: 1px solid #9f9f9f;
        .guide {
          border-right: 1px solid #000000;
          padding-right: 10px;
        }
        .search_form {
          width: 90%;
          input {
            width: 100%;
            border: none;
          }
        }
      }
      .tap_menu {
        width: 30%;
        display: flex;
        flex-direction: row;
        gap: 10px;
        li:first-child {
          background-color: #0066e0;
          color: #fff;
        }
        li:last-child {
          border: 1px solid #9f9f9f;
        }
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          border-radius: 100px;
          padding: 0px 30px 0px 30px;
          font-size: 16px;
        }
      }
    }
  }
`;
