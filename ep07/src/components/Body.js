import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () =>{

const[listOfRestaurants, setListOfRestaurant] = useState([]);
const[FilteredRestaurant, setFilteredRestaurant] = useState([]);

const[searchText,setSearchText] = useState("");

useEffect(()=> {
  fetchData();
}, []);

const fetchData = async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();

  console.log(json);
  //OPtional Chaining
  setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

   return listOfRestaurants?.length === 0 ? (
    <Shimmer />
    ) : (
            <div className="body">
                    <div className="filter">
                      <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                          setSearchText(e.target.value);
                        }} />
                        
                        <button onClick={()=>{
                          //Filter the resaurt cards and update the UI  
                          const FilteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                          setFilteredRestaurant(FilteredRestaurant);
                        }}>Search</button>
                      </div>
                        <button 
                        className="filter-btn" 
                        onClick={() =>{
                          const filteredList = listOfRestaurants?.filter(
                            (res)=> res.info.avgRating>4.2
                            );
                            setListOfRestaurant(filteredList);
                          }}
                        >
                        Top Rated Restaurant
                        </button>
                    </div>
                    <div className="res-container">
                    {
                      FilteredRestaurant.map((restaurant) =>(
                        <Link 
                        key={restaurant.info.id} 
                        to={"/restaurants/"+restaurant.info.id}
                        >
                          <RestaurantCard  resData = {restaurant} />
                          </Link>
                        ))}   
                     </div>
            </div>
    );
};

export default Body;