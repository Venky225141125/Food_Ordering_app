import { useEffect, useState } from "react";
import { REST_URL } from "./Constants";
const useRestaurantMenu = (res_id) => {
  const [resinfo, setresinfo] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(REST_URL + res_id);
    const jsondata = await data.json();
    setresinfo(jsondata.data);
    console.log(jsondata);
  };
  return resinfo;
};
export default useRestaurantMenu;
