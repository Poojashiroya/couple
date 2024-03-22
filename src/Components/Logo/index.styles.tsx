import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  text-decoration: none;
  color: inherit;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;
