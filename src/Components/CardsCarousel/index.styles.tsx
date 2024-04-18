import styled from "@emotion/styled";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
  height: 450px;
  min-width: 550px;

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 425px;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    width: 100%;
    max-width: 100%;
  }
`;

export const Container = styled.aside`
  display: flex;
  width: 100%;
  gap: 75px;
  align-items: center;
  justify-content: center;
  padding: 67px 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 100%;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 12px;
    overflow: hidden;
    width: 100%;
    gap: 32px;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 388px;
  padding: 10px 20px;
  gap: 18px;

  @media (min-width: 897px) and (max-width: 1024px) {
    max-width: 275px;
  }

  @media(max-width: 896px){
    max-width: 75%;
    text-align:center;
    align-self: center;
  }
`;

export const Title = styled.h3`
  font-family: "Jost";
  font-size: 53px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 1;
  }
`;

export const Description = styled.h5`
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
