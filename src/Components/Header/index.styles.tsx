import styled from "@emotion/styled";
import Images from "../../assets/Images";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-height: 750px;
  background: url(${Images.WaveBackground}) no-repeat;
  background-size: cover;
`;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 16px 32px;
  box-sizing: background;
  max-width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 600px;
  background: url(${Images.Background}) no-repeat;
  background-position: right;
`;

export const Pages = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;

  & > * {
    cursor: pointer;
  }
`;
