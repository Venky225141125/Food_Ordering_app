import { LOGO_URL } from "./utils/Constants";
import { useState } from "react";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" className="food_logo" />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>about us</li>
          <li>contact</li>
          <li>Cart</li>
          <li>
            <button
              className="login-bnt"
              onClick={() => {
                btn === "Login" ? setbtn("Logout") : setbtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
