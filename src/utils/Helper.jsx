import React from "react";

export const filterData = (restaurants, searchText) => {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filterData;
};
