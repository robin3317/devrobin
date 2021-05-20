import { useState } from "react";
import Header from "../Header";
import { BaseLayoutContainer, TemporaryInfo } from "./BaseLayout.styles";
import Backdrop from "../Backdrop";
import SideDrawer from "../SideDrawer";

const BaseLayout = (props) => {
  const [isOpenSideDrawer, setIsOpenSideDrawer] = useState(false);

  const toggleSideDrawerHandler = () => {
    setIsOpenSideDrawer(!isOpenSideDrawer);
  };

  return (
    <>
      <SideDrawer
        isOpen={isOpenSideDrawer}
        toggleSideDrawerHandler={toggleSideDrawerHandler}
      />

      {isOpenSideDrawer ? (
        <Backdrop toggleSideDrawerHandler={toggleSideDrawerHandler} />
      ) : null}

      {/* <TemporaryInfo>
        <p>
          📢 I'm currently working on this project. Some features may not work
          as you expect! Sorry 🙏
        </p>
      </TemporaryInfo> */}

      <Header toggleSideDrawerHandler={toggleSideDrawerHandler} />
      <BaseLayoutContainer>{props.children}</BaseLayoutContainer>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            font-size: 18px;
            font-weight: 500;
            color: #48586b;
          }

          * {
            box-sizing: border-box;
          }

          a {
            text-decoration: none;
          }

          a:hover {
            text-decoration: none;
          }

          /* CUSTOM LINE COLOR */
          .vertical-timeline::before {
            background: #ccc;
          }
        `}
      </style>
    </>
  );
};

export default BaseLayout;
