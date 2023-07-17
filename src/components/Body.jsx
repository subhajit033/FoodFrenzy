import React, { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import useGetRestaurant from "../utils/useGetRestaurant";
import useStatus from "../utils/useStatus";
import Status from "./Status";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const updateInput = (e) => {
    setSearchText(e.target.value);
    const data = filterData(allrestaurants, searchText);
    setFilterRestaurants(data);
  };
  const data = useGetRestaurant();
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    setAllRestaurants(data);
    setFilterRestaurants(data);
  }, [data]);
  const isOnline = useStatus();
  if (!isOnline) {
    return <Status />;
  }
  return allrestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants"
          value={searchText}
          onChange={updateInput}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => {
            const data = filterData(allrestaurants, searchText);
            setFilterRestaurants(data);
          }}
        ></i>
      </div>

      <div className="restaurant-list">
        {filterRestaurants?.length == 0 ? (
          <h2>No Restaurants found according to your search "{searchText}"</h2>
        ) : (
          filterRestaurants?.map((restaurant) => {
            return (
              <RestaurentCard
                key={restaurant?.data?.id}
                url={restaurant?.data?.id}
                restaurant={restaurant}
              />
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
