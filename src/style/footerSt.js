import styled from "@emotion/styled";

export const FooterContainer = styled.div`
margin-top: 100px;
  width: 100%;
  height: 200px;
  background-color: #F1F5F9;
  padding: 50px 0px 50px 0px;
  .inner{
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 50px;
    width: 1400px;
    height: 100%;
    .fooet_logo{
      width:  auto;
      height: 100%;
    }
    .footer_info{
      display: flex;
      flex-direction: column;
      width: auto;
      height: 100%;
      .site_info{
        display: flex;
        flex-direction: row;
        li{
          cursor: pointer;
          position: relative;
          padding: 10px;
        }
        li:first-child{
          padding-left: 0px;
        }
        li::after{
          position: absolute;
          right:0px;
          width: 1px;
          height: 16px;
          background-color: #000;
          content: "";
        }
      }
    }

  }
`;
