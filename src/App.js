import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import UserDetails from "./utils/UserDetails";
import Shimmer from "./shimmer";
import { DESCRIPTION } from "./utils/Constants";
const App = () => {
  const [userInfo, setuserInfo] = useState(null);

  useEffect(() => {
    const userdata = {
      username: "Venkatesh edubilli",
      phone: "8341947811",
      address: "3/10 Anavaram Badabgi Vzm",
      project: "React application",
      description: "This application is about the food ordering app.",
    };
    setuserInfo(userdata);
  }, []);
  if (!userInfo) return <Shimmer />;
  return (
    <div className="app">
      <UserDetails.Provider
        value={{
          userName: userInfo.username,
          phone: userInfo.phone,
          address: userInfo.address,
          project: userInfo.project,
          description: DESCRIPTION,
        }}
      >
        <Header />
        <Outlet />
      </UserDetails.Provider>
    </div>
  );
};

export default App;
