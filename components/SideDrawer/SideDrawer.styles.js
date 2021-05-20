import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  height: 100vh;
  box-shadow: 1px 0 7px rgba(#000, 0.3);
  width: 65%;
  max-width: 315px;
  z-index: 999;
  padding: 1.5rem 1rem;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0%)' : 'translateX(-105%)'};
  transition: transform 0.35s ease-out;
  z-index: 1001;
`;
export const CloseSideDrawer = styled.span`
  font-size: 0.8rem;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  cursor: pointer;
`;
export const BrandName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
`;
export const RouteUList = styled.ul`
  list-style: none;
  padding-left: 0.7rem;
`;
export const RouteList = styled.li`
  margin-bottom: 0.5rem;
`;
