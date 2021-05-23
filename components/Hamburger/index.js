const Hamburger = ({ toggleSideDrawerHandler }) => (
  <div className="hamburger-container">
    <div className="line-container" onClick={toggleSideDrawerHandler}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>

    <div className="nav-container">
      <p className="brand-name">Abdur Rahman Robin</p>
    </div>
  </div>
);

export default Hamburger;
