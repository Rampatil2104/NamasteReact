import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () =>{

const[listOfRestaurants, setListOfRestaurant] = useState(resList);

// let listOfRestaurantsJS = [
// {               
//         info:{
//                 "id": "25620",
//                 "name": "KFC",
//                 "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
//                 "locality": "Intermediate Ring Road",
//                 "costForTwo": "₹400 for two",
//                 "cuisines": [
//                   "Burgers",
//                   "Biryani",
//                   "American",
//                   "Snacks",
//                   "Fast Food"
//                 ],
//                 "avgRating": 3.8,
//        },
// },
// {               
//         info:{
//                 "id": "25610",
//                 "name": "MC Donalds",
//                 "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
//                 "locality": "Intermediate Ring Road",
//                 "costForTwo": "₹400 for two",
//                 "cuisines": [
//                   "Burgers",
//                   "Biryani",
//                   "American",
//                   "Snacks",
//                   "Fast Food"
//                 ],
//                 "avgRating": 4.8,
//        },
// },
// {      
//         info:{
//         "id": "25621",
//         "name": "Dominos",
//         "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Biryani",
//           "American",
//           "Snacks",
//           "Fast Food"
//         ],
//         "avgRating": 4.1,
// },
// },
// ];
    return(
            <div className="body">
                    <div className="filter">
                        <button 
                        className="filter-btn" 
                        onClick={() =>{
                          const filteredList = listOfRestaurants.filter(
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
                      listOfRestaurants.map((restaurant) =>(
                        <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                        ))}   
                     </div>
            </div>
    );
};

export default Body;