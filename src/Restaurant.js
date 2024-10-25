import { CDN_URL } from "./utils/Constants";
const Restaurant = (props) => {
  const { restdata } = props;
  return (
    <div className="card">
      <div className="res_card">
        <img
          className="food_item"
          src={CDN_URL + restdata.info.cloudinaryImageId}
          alt="food_item"
        />
        <div>{restdata.info.name}</div>{" "}
        <div>{"Cusisines:" + restdata.info.cuisines.join(" ")}</div>
        <div>{"delivery time :" + restdata.info.sla.deliveryTime}</div>
        <div>{restdata.info.avgRating}</div>
      </div>
    </div>
  );
};

export default Restaurant;
