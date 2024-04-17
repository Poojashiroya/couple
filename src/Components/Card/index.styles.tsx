import styled from "@emotion/styled";

export const CardContainer = styled.section`
  width: 375px;
  height: 450px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(17.5px);
  padding: 19px 15px;
  box-sizing: border-box;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImg = styled.img`
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: 70%;
  max-height: 70%;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 30px;
  z-index: 1;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const CardQuote = styled.q`
  color: #1c2e54;
  font-size: 16px;
  font-weight: 400;
  line-height: initial;
  padding-bottom: 8px;
`;

export const CardAuthor = styled.h3`
  color: #1c2e54;
`;

export const Date = styled.p`
  color: #1c2e54;
`;
