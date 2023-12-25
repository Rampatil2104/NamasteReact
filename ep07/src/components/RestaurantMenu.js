import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const[resInfo, setResInfo] = useState(null);

    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=752339&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };

  
    return resInfo === null ? (
    <Shimmer/>
    ) :(
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <h2>{resInfo?.cards[0]?.card?.card?.info.cuisines}</h2>
            <h3>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessages}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;