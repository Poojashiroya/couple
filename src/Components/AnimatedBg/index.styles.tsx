import styled from "@emotion/styled";
import Images from "../../assets/Images";
import { keyframes } from "@emotion/react";

const diagonalmove = keyframes`
	0% {
		transform: translate(-100px, -100px);
        border-radius: 0 50px 50px 0;
	}
	100% {
		transform: translate(0px, 0px);
        border-radius: 0;
	}
`

export const AnimatedBgContainer = styled.section`
 width: 100%;
 max-width: 100%;
 height: 600px;
 background-image: url(${Images.Img12});
 background-size: cover;
 background-repeat: no-repeat;
 position: relative;
 animation: ${diagonalmove} 5s ease-in-out;
 background-position: center;
`

const profile1 = keyframes`
	0% {
		transform: translateX(0px);
	}
	100% {
		transform: translateX(520px);
	}
`

const profile2 = keyframes`
	0% {
		transform: translateX(0px);
	}
	100% {
		transform: translateX(-520px);
	}
`

export const ImgContainer = styled.div`
 display: flex;
 justify-content: center;
 max-width: 100%;
 box-sizing: border-box;
 width: calc(100% - 48px);
 margin: 0 24px;
 padding-top: 32px;

 & > img:first-of-type {
    position: relative;
    left: 20px;
    animation: ${profile1} ease-in-out 5s;
    animation-delay: 5s;
 }
 & > img:last-of-type {
    animation: ${profile2} ease-in-out 5s;
    animation-delay: 5s;
    position: relative;
    left: -20px;
 }
`;

export const RoundImage = styled.img` 
  width: 180px;
  height: 180px;
  aspect-ratio: 1;
  border: 1px solid white;
  background: hsla(211, 66%, 87%, 1);
  border-radius: 50%; 
  background: linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C9DEF4", endColorstr="#F5CCD4", GradientType=1 );
//   border-image: radial-gradient(grey 69%, transparent  70%) 84.5%/50%;
// clip-path: polygon(-41% 0, 50% 91%, 141% 0);
`;

const textContainer = keyframes`
	0% {
		transform: translate(0, 0);
        border-radius: 50px 0 50px 0;
	}
	100% {
		transform: translate(0px, 0px);
        border-radius: 0 50px 0 50px;
	}
`

export const Content = styled.div`
  width: 60%;
  border-radius: 0 50px 0 50px;
  margin: 48px auto 24px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  animation: ${textContainer} 5s ease-in-out;
  animation-delay: 5s;

  @media (max-width: 768px){
    margin: 12px auto;
  }
`;


const text = keyframes`
	0% {
		transform: translateX(-50%);
	}
	100% {
		transform: translateX(0%);
	}
`

export const Title = styled.h3`
// font-family: "Dancing Script";
font-size: 48px;
font-weight: 900;
animation: ${text} 5s linear;
animation-delay: 5s;
`



export const Description = styled.p`
 font-size: 32px;
 font-weight: 700;
 font-family: "Dancing Script";
 animation: ${text} 5s linear;
animation-delay: 5s;
`