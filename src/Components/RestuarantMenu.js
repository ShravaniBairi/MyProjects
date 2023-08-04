import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { cloudinaryImageUrl } from "../Constants"
import Shimmer from "./ShimmerUI"
import useRestuarantMenu from "../utils/useRestuarantMenu";



const RestuarantMenu = () => {
    const params = useParams(); //reads the url and gives the id 
   
    const { resid } = params;

    const restuarantMenu = useRestuarantMenu(resid);
   
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