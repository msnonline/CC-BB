import Menu from "../assets/menu.png";

const Header = ({currentStep,handleStepChange}) => {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="text-logo">CC & BB</h1>
        {/* <sub className="logo-sub">Your balance buddy</sub> */}
      </div>
      <div className="menu">
        <button className="menu-btn" onClick={()=>{handleStepChange("Contact");}}>
          {/* <img src={Menu} alt="" /> */}
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Header;
