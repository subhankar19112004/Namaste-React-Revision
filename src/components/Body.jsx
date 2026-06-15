import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);

  const topRestaurants = () => {
    const topRest = resList.filter(
      (restaurant) => restaurant.info.avgRating > 4.5,
    );
    setRestaurants(topRest);
  };
  return (
    <div className="flex flex-col m-2">
      <div>
        <div className="m-5 flex gap-5">
          <button
            onClick={topRestaurants}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Top Rated Restaurants
          </button>
          <button
            onClick={() => setRestaurants(resList)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset to Default
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-items-center gap-5 w-full">
        {/* <RestaurantCard resData={resList[0].info} /> */}
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
