import { useState, useEffect } from "react";
const useGetRestaurant = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getRestaurants();
  }, []);  
  const getRestaurants = async () => {
    try {
      const apiCall = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4805955&lng=88.41160649999999&page_type=DESKTOP_WEB_LISTING"
      );
      const fetchedData = await apiCall.json();
      setData(fetchedData?.data?.cards[2]?.data?.data?.cards);
      
    } catch (err) {
      console.log(err);
    }
  };

  return data;
};
export default useGetRestaurant;
