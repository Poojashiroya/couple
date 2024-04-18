import styled from "@emotion/styled";

export const Container = styled.button<{
  total: number;
  index: number;
  currentCard: number;
}>`
  width: 375px;
  border-radius: 30px;
  outline: none;
  padding: 0;
  backdrop-filter: ${(props) =>
    props.index === props.currentCard ? "blur(0px)" : "blur(17.5px)"};
  background: #fff;
  position: absolute;
  cursor: pointer;
  left: ${(props) => `${props.index * 90}`}px;
  top: ${(props) => (props.index > 0 ? `${props.index * 5}px` : "0px")};
  z-index: ${(props) => props.total - props.index - 1};
  height: ${(props) => `${450 - props.index * 10}`}px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 769px) and (max-width: 1024px) {
    height: ${(props) => `${425 - props.index * 10}`}px;
  }

  @media (max-width: 768px) {
    width: 80%;
    z-index: ${(props) => props.currentCard === props.index ? 1:1 - props.index};
    left: ${(props) => `${props.index * 30}`}px;
  }
`;

export const CardContainer = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 30px;
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
  height: 80%;
  max-height: 80%;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
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
