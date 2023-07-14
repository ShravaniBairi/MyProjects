import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import RestuarantList from "./Components/RestuarantList";
import { RestuarantCards } from "./Constants";
import {useState, useEffect } from "react";
import Shimmer from "./Components/ShimmerUI";


/**
 * 
 * CREATING MULTIPLE VARIABLES(OBJECT) AND RENDERING IT in JavaScript
 * 
 * const heading1 = React.createElement("h2", {id : "heading1"}, "hello" );
 * const heading2 = React.createElement("h2", {id : "heading2"}, "Shravani");
 * const heading3 = React.createElement("h2", {id : "heading3"}, [heading1, heading2]);
 * const root = ReactDOM.createRoot(document.getElementById("root"));
 * root.render(heading3)
 * 
 */


function filterRestuarant(searchText, restuarants) {  
  const nameLower= searchText.toLowerCase()
  const data= restuarants.filter((restuarant)=>  restuarant.data.name.toLowerCase().includes(nameLower));
  
  return(data);
};
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restuarants, setSearchButton] = useState([]);

  useEffect(() => {
    console.log("Call this ehen the dependent array changes")
    getRestuarants()
  }, [])

  async function getRestuarants() {
    const data = await fetch("https:www.swiggy.com/dapi/restaurants/list/v5?lat=12.985048153623557&lng=77.7553192153573&page_type=DESKTOP_WEB_LISTING");
    const Json = await data.json();
    //console.log(Json?.data?.cards[2]?.data?.data?.cards);
    setSearchButton(Json?.data?.cards[2]?.data?.data?.cards) 

}

  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.985048153623557&lng=77.7553192153573&page_type=DESKTOP_WEB_LISTING

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

const WholePage = () =>{
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WholePage />)