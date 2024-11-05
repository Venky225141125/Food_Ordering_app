import { createContext } from "react";

const UserDetails = createContext({
  userName: "Venkatesh",
  project: "React application",
  description: "This application is about the food ordering app.",
});

export default UserDetails;
