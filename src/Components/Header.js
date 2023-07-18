import logo from "../assets/img/food_ordering_logo.jpg";

const Header = () =>
{
    return(
        <div id="Header">
        <img style ={{width : 200}}  alt= "Taste It Logo" src={logo}></img>

        <div className = "Nav-tags">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>cart</li>
        </ul>
        </div>
        </div>
    );
};

export default Header