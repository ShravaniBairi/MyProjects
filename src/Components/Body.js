import { RestuarantCards } from "../Constants";
import {useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import RestuarantList from "./RestuarantList";
import AboutUs from "./AboutUs";

function filterRestuarant(searchText, restuarants) {  
    const nameLower= searchText.toLowerCase()
    const data= restuarants.filter((restuarant)=>  restuarant.data.name.toLowerCase().includes(nameLower));
    
    return(data);
  };

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restuarants, setSearchButton] = useState([]);
  
    useEffect(() => {
      getRestuarants()
    }, [])
  
    async function getRestuarants() 
    {
      const data = await fetch("https:www.swiggy.com/dapi/restaurants/list/v5?lat=12.985048153623557&lng=77.7553192153573&page_type=DESKTOP_WEB_LISTING");
      const Json = await data.json();
      setSearchButton(Json?.data?.cards[2]?.data?.data?.cards) 
  
    }

      return (restuarants.length === 0) ? <Shimmer /> : (
        <>
        <div className = "SearchContainer">
          <input type="text" className = "searchInput" placeholder="Search for Restuarant" value={searchText} 
          onChange={(e)=> {setSearchText(e.target.value)}}/>
          
          
          <button onClick={() => {
            
            
            const filterData = filterRestuarant(searchText, RestuarantCards);
            setSearchButton(filterData);
            
            
          
          }}
          className="search Button">
              Search            
                     </button>
             
  
          </div>
          <div id= "cardlist">
          {
            restuarants.map((restuarant) => {
          return <RestuarantList {...restuarant.data } key={restuarant.data.id}/>
            })
          }
  
              {/* <RestuarantList {...RestuarantCards[0]?.data}/>
              <RestuarantList {...RestuarantCards[1]?.data}/>
              <RestuarantList {...RestuarantCards[2]?.data}/>*/}
          </div>
          </>
      );
  };

  export default Body