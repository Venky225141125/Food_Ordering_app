// import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
// import { CDN_URL } from "./utils/Constants";
// import { REST_URL, CDN_URL } from "./utils/Constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestroData from "./utils/RestroData";
import { useState } from "react";
const Restaurants = () => {
  const { res_id } = useParams(); //195429
  const restinfo = useRestaurantMenu(res_id);
  const [showIndex, setshowIndex] = useState(null);
  if (restinfo == null) return <Shimmer />;
  const { name, avgRatingString, costForTwoMessage, cuisines } =
    restinfo?.cards[2]?.card?.card?.info;
  // const items =
  //   restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     .itemCards;
  // console.log(items);
  const category =
    restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  console.log(category);
  console.log("before");

  return (
    <div className="text-center">
      <div>
        <h1 className="text-2xl font-extrabold my-6">{name}</h1>

        <p className="text-lg font-bold">
          {cuisines.join(",")}-{costForTwoMessage}
        </p>
        {/* <p>
          <img
            className="food_item"
            src={CDN_URL + cloudinaryImageId}
            alt="food_item"
          />
        </p> */}
        <p className="font-semibold">average rating:{avgRatingString}⭐</p>
      </div>
      <div>
        <p>
          {category.map((item, index) => (
            <RestroData
              key={item?.card?.card?.title}
              info={item?.card?.card}
              showItem={index === showIndex ? true : false}
              setshowIndex={() => {
                setshowIndex(index);
              }}
            />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Restaurants;
