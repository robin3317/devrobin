import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { mediaQueries } from '../../shared/styles/mediaQueries';

export const HeaderContainer = styled(Navbar)`
  position: fixed;
  top: 0px;
  z-index: 900;
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  background-color: rgb(248, 248, 248);
  padding: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  ${mediaQueries('phone-md-lg')`
    display: none;
  `}
  ${mediaQueries('tab-port')`
    display: none;
  `}
`;

export const HeaderMain = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div``;

export const CustomNavItem = styled.a``;
