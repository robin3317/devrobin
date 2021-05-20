import {
  HamburgerContainer,
  LineContainer,
  Line,
  NavContainer,
  BrandName,
} from "./Hamburger.styles";

const Hamburger = ({ toggleSideDrawerHandler }) => (
  <HamburgerContainer>
    <LineContainer onClick={toggleSideDrawerHandler}>
      <Line />
      <Line />
      <Line />
    </LineContainer>

    <NavContainer>
      <BrandName>Abdur Rahman Robin</BrandName>
    </NavContainer>
  </HamburgerContainer>
);

export default Hamburger;
