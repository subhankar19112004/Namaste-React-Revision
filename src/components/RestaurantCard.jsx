import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="bg-white w-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
      {/* Restaurant Image */}
      <div className="overflow-hidden">
        <img
          className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Restaurant Name */}
        <h3 className="font-bold text-xl line-clamp-2 min-h-[60px] text-gray-900">
          {name}
        </h3>

        {/* Rating + Cost */}
        <div className="flex items-center justify-between mt-3">
          <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
            ⭐ {avgRating}
          </span>

          <span className="font-semibold text-gray-700">{costForTwo}</span>
        </div>

        {/* Cuisine */}
        <p className="text-gray-500 text-sm mt-3 line-clamp-2 min-h-[40px]">
          {cuisines?.join(", ")}
        </p>

        {/* Delivery Time */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <p className="text-gray-700 font-medium">
            🚴 {sla?.deliveryTime} mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
