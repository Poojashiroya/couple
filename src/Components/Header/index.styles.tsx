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
  position: relative;
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

  @media (max-width: 768px){
    background: #fff;

    & > svg {
      cursor: pointer;
    }
  }

`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
  min-height: 780px;
  position: relative;

  @media (max-width: 768px) {
    min-height: 600px;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: -3%;
  bottom: -3.7%;
  z-index: 1;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    left: unset;
    right: -6.5%;
    object-fit: inherit;
    min-height: 550px;
    bottom: -22px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    bottom: -29px;
    right: -6.5%;
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

  @media (max-width: 768px){
    color: #000;
    text-transform: capitalize;
    padding: 8px;

    &:hover {
      background: grey;
      color: #fff;
      border-radius: 8px;
    }
  }
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
  flex-direction: column;
  padding: 9% 0 0 17%;
  max-width: 39%;
  // animation-delay: 3s;
  
  animation: ${headerAnimation} 5s ease-in-out;
 display: flex;
 
  @media (max-width: 580px) {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 7% 0 0 3%;
    max-width: 43%;
    gap: 8px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 7% 0 0 4%;
    max-width: 40%;
  }
`;

export const Title = styled.h2`
color:  #D264B6;;
  font-size: 64px;
  font-weight: 900;
  line-height: 1.1;
  font-family: "Great Vibes";

  @media (max-width: 768px){
    font-size: 36px;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px){
    font-size:18px;
    min-width: max-content;
  }
  @media (max-width: 585px) {
    min-width: min-content;
  }
`;

export const SubDescription = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px){
    font-size: 14px;
  }
`;


export const MobileHeader = styled.div`
 display: flex;
 flex-direction: column;
  gap: 8px;
  position: absolute;
  z-index: 2;
  top: 72px;
  width: 100%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
  box-sizing: border-box;
`;
