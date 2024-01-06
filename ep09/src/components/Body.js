import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
  setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const onlineStatus = useOnlineStatus();

if(onlineStatus===false) return <h1>Looks like you are offline please check your internet connection</h1>

   return listOfRestaurants?.length === 0 ? (
    <Shimmer />
    ) : (
            <div className="body">
                    <div className="filter flex">
                      <div className="search m-4 p-4">
                        <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                          setSearchText(e.target.value);
                        }} />
                        
                        <button className="px-4 py-2 bg-slate-500 m-4 rounded-lg" 
                         onClick={()=>{
                          //Filter the resaurt cards and update the UI  
                          const FilteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                          setFilteredRestaurant(FilteredRestaurant);
                        }}>Search</button>
                      </div>
                        <div className="search m-4 p-4 flex items-center">
                          <button 
                        className="px-4 py-2 bg-slate-500 m-4 rounded-lg" 
                        onClick={() =>{
                          const filteredList = listOfRestaurants?.filter(
                            (res)=> res.info.avgRating>4.2
                            );
                            setListOfRestaurant(filteredList);
                          }}
                        >
                        Top Rated Restaurant
                        </button></div>
                    </div>
                    <div className="flex flex-wrap">
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