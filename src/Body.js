import Restaurant from "./Restaurant";
import { restlist } from "./utils/Defaultdata";
import { useState, useEffect } from "react";
// import axios from "axios";
import Shimmer from "./shimmer";
const Body = () => {
  const [data, setdata] = useState([]);
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
      // setdata(
      //   jsondata.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      setdata(restlist);
      console.log(
        jsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.error("error", error);
    }
  };

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searchbar">
        search something here
        <div className="filter">
          <button
            className="top_rated_resto"
            onClick={() => {
              const filterdata = data.filter((res) => res.info.avgRating > 4.2);
              setdata(filterdata);
            }}
          >
            top_rated_resto
          </button>
        </div>
      </div>
      <div className="restaurant">
        {data.map((restaurant) => (
          <Restaurant key={restaurant.info.id} restdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
