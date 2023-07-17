import React from "react";
import Body from "./Body";
import { useState } from "react";
const Search = () =>{
    const[searchText, setSearchText] = useState("");
    const updateInput = (e) =>{
        setSearchText(e.target.value);
    }
    <Body searchtext = {searchText}/>
    return(
        <div className="search-container">
           <input type="text" placeholder="Search restaurants" value={searchText} onChange={updateInput}/>
           <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}
export default Search;