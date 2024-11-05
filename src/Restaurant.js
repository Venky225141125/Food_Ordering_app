import { CDN_URL } from "./utils/Constants";
const Restaurant = (props) => {
  const { restdata } = props;
  return (
    <div className="card">
      <div className="res_card p-2 m-4 w-[250px] h-[350px] bg-gray-100 hover:bg-gray-300">
        <img
          className="rounded-lg h-40 w-[250px] "
          src={CDN_URL + restdata.info.cloudinaryImageId}
          alt="food_item"
        />
        <div className="font-extrabold py-2 text-lg">{restdata.info.name}</div>{" "}
        <div>{"Cusisines:" + restdata.info.cuisines.join(" ")}</div>
        <div>{"delivery time :" + restdata.info.sla.deliveryTime}</div>
        <div>{"rating : " + restdata.info.avgRating}</div>
      </div>
    </div>
  );
};

export const WithopenRestaurant = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2 m-4 rounded-lg">
          open
        </label>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default Restaurant;
