import styled from "@emotion/styled";
import Images from "../../assets/Images";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-height: 700px;
`;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 16px;
  box-sizing: background;
  max-width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 21.43%),
    url(${Images.HeaderBg}) lightgray 0px 0px / 100% 107.143% no-repeat;
`;
