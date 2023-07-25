import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { cloudinaryImageUrl } from "../Constants"
import Shimmer from "./ShimmerUI"

const restuarantMenuCard = ({imageId, category, description, ratings}) => {
    return(
        <div>
            {/* <h2>{name}</h2> */}
            <img src = {cloudinaryImageUrl + imageId} />
            <h3>{category}</h3>
            <h3>{description}</h3>
            <h3>{ratings.aggregatedRating.ratingCountV2+" "+ratings.aggregatedRating.rating+"* ratings"}</h3>
        </div>
    )

}

const RestuarantMenu = () => {
    const params = useParams(); //reads the url and gives the id 
   
    const { resid } = params;

    useEffect(() => {
        getRestuarantMenu();

    },[])

    const [restuarantMenu, setRestuarantMenu] = useState({});
    async function getRestuarantMenu(){

    
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="+ resid);
        const json = await data?.json();        
        console.log(json)
        setRestuarantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    }
   
    return (
        <div>
        
        <div id= "restuarantMenu">
          
            <ul>
                {Object.values(restuarantMenu).map((items) => (

                <li key={items?.card?.info?.id}>
                <div>

                <h2>{items?.card?.info?.name}</h2>
                <img src = {cloudinaryImageUrl + items?.card?.info?.imageId} style = {{height : 200}} />
                <h4>{items?.card?.info?.category}</h4>
                <h4>{items?.card?.info?.description}</h4>
                <h4>{items?.card?.info?.ratings?.aggregatedRating?.ratingCountV2+" "+items?.card?.info?.ratings?.aggregatedRating?.rating+"* ratings"}</h4>

                </div>  
                </li>
                ))}
            </ul>
          
        </div>
        
        </div>

    )
}
export default RestuarantMenu;