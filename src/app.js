import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import RestuarantList from "./Components/RestuarantList";
import { RestuarantCards } from "./Constants";
import {useState} from "react";


/***
 * Added
 * SEARCH BAR
 * SEARCH BUTTON
 * USED useState variables 
 */

/**
 * 
 * CREATING MULTIPLE VARIABLES(OBJECT) AND RENDERING IT 
 * 
 * const heading1 = React.createElement("h2", {id : "heading1"}, "hello" );
 * const heading2 = React.createElement("h2", {id : "heading2"}, "Shravani");
 * const heading3 = React.createElement("h2", {id : "heading3"}, [heading1, heading2]);
 * const root = ReactDOM.createRoot(document.getElementById("root"));
 * root.render(heading3)
 * 
 */

/**
 * 
 * FUNCTIONAL COMPONENTS (normal functions)
 * 
 * const Fun= () =>
 *  {
 *  return(
 *      <react.fragment> 
 *          Whole code which function returns should be inside single parent 
 *      <react.fragment/>
 *         );
 *  };
 * 
 */

// const Header = () =>
// {
//     return(
//         <div id="Header">
//         <img style ={{width : 200}}  alt= "Taste It Logo" src="https://cdn.dribbble.com/users/973570/screenshots/3221413/media/5aa404f7d6fdf72e7af2b28f14bb27c8.png"></img>

//         <div className = "Nav-tags">
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>cart</li>
//         </ul>
//         </div>
//         </div>
//     );
// };

function filterRestuarant(searchText, restuarants) {  
  const nameLower= searchText.toLowerCase()
  const data= restuarants.filter((restuarant)=>  restuarant.data.name.toLowerCase().includes(nameLower));
  
  return(data);
};
const Body = () => {
  const [searchText, setSearchText] = useState("kfc");
  const [restuarants, setSearchButton] = useState(RestuarantCards);

    return (
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