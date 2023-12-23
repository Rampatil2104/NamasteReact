import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
export const Header = () => {
  
    const [btnNameReact, setBtnNameReact ] = useState("Login");
    return(
            <div className="header">
                    <div>
                    <img 
                    className="logo"
                    src= {LOGO_URL} />
                    </div>
                    <div className="nav-items">
                    <ul>
                     <li>Home</li>       
                     <li>About Us</li>       
                     <li>Contact us</li>       
                     <li>Cart</li>       
                     <button className="login" onClick={()=>{
                        setBtnNameReact("Logout")
                     }}>{btnNameReact}</button>
                    </ul>
                    </div>
            </div>
    )
};
