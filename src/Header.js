import { LOGO_URL } from "./utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
const Header = () => {
  const onlinestatus = useOnline();
  const [btn, setbtn] = useState("Login");
  return (
    <div className="flex justify-between bg-blue-100 shadow-lg">
      <div className="w-36">
        <img src={LOGO_URL} alt="logo" className="food_logo" />
      </div>
      <div>
        <ul className="flex p-4 m-4">
          <li className="px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:border hover:border-blue-500 hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:border hover:border-blue-500 hover:text-blue-500">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:border hover:border-blue-500 hover:text-blue-500">
            <Link to="/contact">contact</Link>
          </li>
          <li className="px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:border hover:border-blue-500 hover:text-blue-500">
            Cart
          </li>
          <li className="px-4 ">
            <button
              className="px-6 rounded-lg font-semibold text-white bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={() => {
                btn === "Login" ? setbtn("Logout") : setbtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
          <li className="px-4">{onlinestatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
