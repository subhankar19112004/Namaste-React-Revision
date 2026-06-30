import { useEffect, useState } from "react";
import menuData from "../utils/menuData/namaste.json";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    // API call
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const json = menuData;
    // console.log(json);

    const data = json?.data;
    // console.log(info_details);

    // const recomended =
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card;
    // console.log(recomended);
    setResInfo(data);
  };
  console.log(resInfo);
  let { name, cuisines, city, areaName, locality } =
    resInfo?.cards[2]?.card?.card?.info;
  return (
    <div className="">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>
        {areaName}, {locality}, {city}
      </p>
      <h3>Menu</h3>
      <div>
        <div>
          <p>Details : like cuisines, price range, etc.</p>
          <div>Image and buttons</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
