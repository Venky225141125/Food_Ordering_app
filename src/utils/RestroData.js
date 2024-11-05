// import { useState } from "react";
import DataOfRestro from "../DataOfRestro";

const RestroData = ({ info, showItem, setshowIndex }) => {
  //   const info = props;
  //   console.log("checkit");
  //   console.log(info);
  //   console.log("checkit");
  //   const [showdata, setshowdata] = useState(false);
  const handleclick = () => {
    setshowIndex();
  };
  return (
    <div className="w-6/12 shadow-xl p-4 mx-auto my-4 bg-gray-100">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleclick}
      >
        <span className="font-semibold text-lg ">
          {info?.title}({info?.itemCards?.length})
        </span>
        {/* <span>{restinfo}</span> */}
        <span>🔽</span>
      </div>
      <div>{showItem && <DataOfRestro data={info?.itemCards} />}</div>
    </div>
  );
};
export default RestroData;
