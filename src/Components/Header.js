import logo from "../assets/img/food_ordering_logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Instamart from "./Instamart";


const Header = () =>
{
    
   const isOnline = useOnline();
    return(
        <div id="Header">
        <img id = "image" alt= "Taste It Logo" src={logo}></img>
        
        <div>
        <h3>OnlineStatus: {isOnline?"🟢":"🔴"}</h3>
            
        </div>

        <div className = "Nav-tags">
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to ="/Contact">Contact</Link></li>
            <li><Link to ="/Cart">cart</Link></li>
            <li><Link to ="/Instamart">Instamart</Link></li>

        </ul>
        </div>
        
        </div>
    );
    
};

export default Header
