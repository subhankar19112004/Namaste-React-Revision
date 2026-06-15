import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;


  return (
    <div
      className="w-64 h-fit  p-2 border border-black rounded-lg bg-gray-200
     hover:bg-gray-300 hover:border-green-800  transition-all duration-300 ease-in-out"
    >
      <img
        className="w-full h-32 border rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-xs bg-blue-500 text-white p-1 rounded w-fit">
        {avgRating} stars
      </p>
      <p>{costForTwo}</p>
      <p>{cuisines?.join(", ")}</p>
      <p>{resData?.sla?.deliveryTime} mins</p>
    </div>
  );
};
export default RestaurantCard;