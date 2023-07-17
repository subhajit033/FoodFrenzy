import { useEffect, useState } from "react";

const useRestaurantInfo = (restaurantId) => {
  const [resInfo, setResInfo] = useState({});
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  const getRestaurantInfo = async () => {
    try {
      const apiCall = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4805955&lng=88.41160649999999&restaurantId=${restaurantId}&submitAction=ENTER`
      );
      const fetchedData = await apiCall.json();
      setResInfo(fetchedData?.data?.cards[0]?.card?.card?.info);
      setMenuList(
        fetchedData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1]?.card?.card?.itemCards
      );
    } catch (err) {
      console.log(err);
    }
  };
  return [resInfo, menuList];
};
export default useRestaurantInfo;
