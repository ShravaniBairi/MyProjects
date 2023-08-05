import {useEffect, useState} from "react";

const useRestuarants=() => {
    const [restuarants, setRestuarants] = useState([]);
   
    useEffect(() => {
        getRestuarants()
      }, [])
    
      async function getRestuarants() 
      {
        const data = await fetch("https:www.swiggy.com/dapi/restaurants/list/v5?lat=12.985048153623557&lng=77.7553192153573&page_type=DESKTOP_WEB_LISTING");
        const Json = await data.json();
        setRestuarants(Json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
      }
      
      return restuarants;
};

export default useRestuarants;