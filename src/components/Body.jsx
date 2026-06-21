import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const topRestaurants = () => {
    const topRest = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5,
    );
    console.log(topRest);
    setRestaurants(topRest);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9276773&lng=77.6212965&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    let restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurants);
    setRestaurants(restaurants);
    setAllRestaurants(restaurants);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

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
            onClick={() => setRestaurants(allRestaurants)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset to Default
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 items-start w-fit">
        {/* <RestaurantCard resData={resList[0].info} /> */}
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
