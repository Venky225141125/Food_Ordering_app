import Restaurant, { WithopenRestaurant } from "./Restaurant";
// import { restlist } from "./utils/Defaultdata";
import { useState, useEffect } from "react";
// import axios from "axios";
// import { WithopenRestaurant } from "./Restaurant";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
const Body = () => {
  const [data, setdata] = useState([]);
  const [searchtxt, setsearchtxt] = useState("");
  const [newdata, setnewdata] = useState([]);
  const onlinestatus = useOnline();
  const IsopenRestro = WithopenRestaurant(Restaurant);
  useEffect(() => {
    fetchApiData();
  }, []);
  const fetchApiData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const jsondata = await data.json();
      console.log(jsondata);
      setdata(
        jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setnewdata(
        jsondata.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // setdata(restlist);
      // console.log(
      //   jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      // );
    } catch (error) {
      console.error("error", error);
    }
  };
  if (onlinestatus === false) {
    return <h1>Oops...! No NetWork</h1>;
  }
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searchbar flex ">
        <div className="search-in m-4 px-4">
          <input
            type="text"
            className="py-1.5 border border-solid border-black"
            value={searchtxt}
            onChange={(e) => {
              setsearchtxt(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 rounded-lg bg-red-100"
            onClick={() => {
              const searchitems = data.filter((res) =>
                res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
              );
              setnewdata(searchitems);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter search-in m-4 p-4">
          <button
            className="px-4 py-2 rounded-lg bg-green-100"
            onClick={() => {
              const filterdata = data.filter((res) => res.info.avgRating > 4.2);
              setnewdata(filterdata);
            }}
          >
            top_rated_resto
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {newdata.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="custom-link"
          >
            {restaurant.info.isOpen ? (
              <IsopenRestro restdata={restaurant} />
            ) : (
              // <h1>open</h1>
              <Restaurant restdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
