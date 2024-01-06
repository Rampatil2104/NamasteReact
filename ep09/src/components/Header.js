import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
  
    const [btnNameReact, setBtnNameReact ] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
            <div className="flex justify-between bg-slate-600 shadow-lg py-0 w-100">
                    <div>
                    <img 
                    className="w-32"
                    src= {LOGO_URL} />
                    </div>
                    <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                     <li className="px-7">
                        Online Status:{onlineStatus?"✅" :"🔴"}
                     </li>
                     <li className="px-7 ">
                        <Link to ="/">Home</Link>
                     </li>       
                     <li className="px-7 ">
                        <Link to="/about">About Us</Link>   
                     </li>       
                     <li className="px-7">
                        <Link to ="/contact">Contact us</Link>
                        </li>       
                     <li className="px-7">
                        <Link to ="/grocery">Grocery</Link>
                        </li>       
                     <li className="px-7">Cart</li>       
                     <button className="login px-7" onClick={()=>{
                        btnNameReact ==="Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login") 
                     }}>{btnNameReact}</button>
                    </ul>
                    </div>
            </div>
    )
};
