import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";
export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //Subscribng to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-slate-600 shadow-lg py-0 w-30 rounded-sm">
      <div className="m-1 ">
        <img className="w-24 rounded-full" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-3 m-3">
          <li className="px-7">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-7 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-7 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-7">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-7">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-7 font-bold text-xl">
            <Link to="/cart">🛒 ({cartItems.length} items)</Link>
          </li>
          <button
            className="login px-7"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
