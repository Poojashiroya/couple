import styled from "@emotion/styled";
import Images from "../../assets/Images";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { ThMenu } from "@emotion-icons/typicons";

const mymove = keyframes`
 0% {
   transform: translateY(-100px);
 }
 100% {
  transform: translateY(0px);
 }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  background: url(${Images.WaveBackground}) no-repeat;
  background-size: cover;
  background-position: center;
  animation: ${mymove} 2s ease-in-out alternate;
  animation-direction: alternate;
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
`;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 16px 32px;
  box-sizing: background;
  max-width: 100%;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
  min-height: 780px;
  position: relative;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: 0;
  bottom: -3.7%;
  z-index: 1;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    left: unset;
    right: -3%;
    object-fit: inherit;
    height: 300px;
    bottom: -10px;
  }
  @media (max-width: 440px) {
    left: -45%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    bottom: -29px;
  }
`;

export const Pages = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled(ThMenu)`
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const headerAnimation = keyframes`
 0% {
   opacity: 0;
 }
 100% {
  opacity: 1;
 }
`;

export const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9% 0 0 17%;
  max-width: 39%;
  animation-delay: 3s;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  -o-animation-delay: 3s;
  -ms-animation-delay: 3s
  animation: ${headerAnimation} 3s ease-in-out;
  -webkit-animation: ${headerAnimation} 3s ease-in-out;
  -moz-animation: ${headerAnimation} 3s ease-in-out;
  -o-animation: ${headerAnimation} 3s ease-in-out;
  -ms-animation: ${headerAnimation} 3s ease-in-out;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 64px;
  font-weight: 900;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

export const SubDescription = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
