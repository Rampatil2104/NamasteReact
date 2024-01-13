import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-5 p-5 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-500">
      <img
        className="rounded-lg px-2 "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
