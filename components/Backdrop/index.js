import { BackdropContainer } from "./Backdrop.styles";

const Backdrop = ({ toggleSideDrawerHandler }) => (
  <BackdropContainer onClick={toggleSideDrawerHandler}></BackdropContainer>
);

export default BackdropContainer;
