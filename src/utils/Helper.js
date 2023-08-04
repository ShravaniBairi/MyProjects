export function filterRestuarant(searchText, restuarants) {  
    const nameLower= searchText.toLowerCase()
    const data= restuarants.filter((restuarant)=>  restuarant.info.name.toLowerCase().includes(nameLower));
    
    return(data);
  };