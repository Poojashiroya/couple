import styled from "@emotion/styled";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
  min-height: 450px;

  & > * {
    opacity: 0.5;
    backdrop-filter: blur(17.5px);
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    left: 50px;
    top: 5px;
    z-index: 0;
    height: 435px
  }
  
  & > *:first-child {
     opacity: 1;
    left: 0;
    backdrop-filter: blur(0px);
    background: #fff;
    z-index: 1;
    top:0;
    height: 445px;
  }
`;

export const Container = styled.aside`
 display: flex;
 max-width: 1060px;
 flex-wrap: wrap;
 gap: 75px;
`

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const Title = styled.h3``;

export const Description = styled.h5``;