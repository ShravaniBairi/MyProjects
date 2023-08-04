import logo from "../assets/img/food_ordering_logo.jpg";
import { Link } from "react-router-dom"


const Header = () =>
{
    return(
        <div id="Header">
        <img id = "image" alt= "Taste It Logo" src={logo}></img>

        <div className = "Nav-tags">
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to ="/Contact">Contact</Link></li>
            <li><Link to ="/Cart">cart</Link></li>
        </ul>
        </div>
        
        </div>
    );
    
};

export default Header
