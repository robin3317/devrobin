import styled from "styled-components";
import { mediaQueries } from "../../shared/styles/mediaQueries";

export const HamburgerContainer = styled.div`
  background-color: rgb(248, 248, 248);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  height: 3.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  ${mediaQueries("tab-land")`
    display: none;
  `}
  ${mediaQueries("all-desktop")`
    display: none;
  `}
`;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
`;

export const Line = styled.div`
  height: 3px;
  width: 22px;
  background-color: #48586b;
  margin: 2px 0;
`;

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BrandName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
`;
