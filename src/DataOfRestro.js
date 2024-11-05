import { CDN_URL } from "./utils/Constants";
const DataOfRestro = (props) => {
  const data = props.data;
  //   console.log(info);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 bg-slate-100 border b-2 w-auto text-left flex"
        >
          <div className="w-9/12 p-4">
            <div className="py-4">
              <span className="text-lg font-bold">{item.card.info.name}</span>
              <span className="text-lg font-bold">
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-xs">{item.card.info.description}</div>
          </div>
          <div className="w-3/12">
            <div className="flex absolute items-center justify-center p-2 bg-black text-white rounded-lg mt-2 sm:mt-0 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg ">
              <button>Add+</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="fooditem" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default DataOfRestro;
