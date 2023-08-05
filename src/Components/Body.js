import { RestuarantCards } from "../Constants";
import {useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import RestuarantList from "./RestuarantList";
import {Link} from "react-router-dom";
import {filterRestuarant} from "../utils/Helper.js"



const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restuarants, setRestuarants] = useState([]);
    const [filteredRestuarants, setfilteredRestuarants] = useState([]);
  
    useEffect(() => {
      getRestuarants()
    }, [])
  
    async function getRestuarants() 
    {
      const data = await fetch("https:www.swiggy.com/dapi/restaurants/list/v5?lat=12.985048153623557&lng=77.7553192153573&page_type=DESKTOP_WEB_LISTING");
      const Json = await data.json();
      console.log(Json);
      setRestuarants(Json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRestuarants(Json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
      
  
    }

    if(!restuarants) return null;
    if(restuarants?.length === 0) 
        return <Shimmer />


    if(filteredRestuarants?.length === 0) 
        return <h1>No Restuarant Matches with the text entered by you....</h1>
            
    return (restuarants.length === 0) ? <Shimmer /> : (
        <>
        <div className = "SearchContainer">
         
          <input type="text" className = "searchInput" placeholder="Search for Restuarant" value={searchText} 
          onChange={(e)=> {setSearchText(e.target.value)}}/>
          
          
          <button 
          onClick={() => {         
            const filterData = filterRestuarant(searchText, restuarants);
           
            setfilteredRestuarants(filterData);
            }}
          className="search Button">
              Search            
          </button>
                    
          </div>

          <div id= "cardlist">
          {
            filteredRestuarants.map((restuarant) => {
          return <Link to = {"/Restuarant/"+restuarant?.info?.id} key={restuarant?.info?.id}><RestuarantList {...restuarant?.info } /></Link>
            })
          }

          </div>
          </>
      );
      
  };

  export default Body