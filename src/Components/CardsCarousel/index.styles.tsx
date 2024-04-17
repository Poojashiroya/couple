import styled from "@emotion/styled";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
  height: 450px;
`;

export const Container = styled.aside`
 display: flex;
 max-width: 1060px;
 flex-wrap: wrap;
 gap: 75px;
 align-items: center;
 justify-content: center;
 padding: 67px 0;
`

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 max-width: 388px;
 padding: 10px 20px;
 gap: 18px;
`;

export const Title = styled.h3`
 font-family: "Jost";
 font-size: 53px;
 line-height: 1.2;
`;

export const Description = styled.h5`
 font-size: 24px;
 font-weight: 400;
`;