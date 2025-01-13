import Menu from "../assets/menu.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="text-logo">CC & BB</h1>
        {/* <sub className="logo-sub">Your balance buddy</sub> */}
      </div>
      <div className="menu">
        <button className="menu-btn">
          <img src={Menu} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
