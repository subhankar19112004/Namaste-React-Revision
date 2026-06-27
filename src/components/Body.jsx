import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);

  const topRestaurants = () => {
    const topRest = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5,
    );

    setFilterData(topRest);
    setSearchText("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9276773&lng=77.6212965&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setRestaurants(restaurants);
    setFilterData(restaurants);
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col m-2">
      {/* Filter & Search Section */}
      <div className="m-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={topRestaurants}
            className="h-11 rounded-xl bg-green-600 px-5 font-medium text-white transition-colors duration-200 hover:bg-green-700"
          >
            ⭐ Top Rated
          </button>

          <button
              onClick={() => {
                setFilterData(restaurants);
                setSearchText("");
              }}
            className="h-11 rounded-xl bg-slate-800 px-5 font-medium text-white transition-colors duration-200 hover:bg-slate-900"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center overflow-hidden rounded-xl border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-72 bg-transparent px-4 py-3 outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 text-lg text-gray-500 hover:text-blue-600"
            onClick={() => {
              let filteredRestaurants = restaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              setFilterData(filteredRestaurants);
            }}
          >
            🔍
          </button>
        </div>
      </div>

      {/* Restaurant Cards - UNCHANGED */}
      <div className="flex flex-wrap justify-between gap-4 items-start w-fit">
        {filterData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
