import {useState, useEffect} from "react";

const useRestuarantMenu = (resId) =>
{

    const [restuarantMenu, setRestuarantMenu] = useState([]);
    useEffect(() => {
        getRestuarantMenu();
    },[]);

    async function getRestuarantMenu()
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="+ resId);
        const json = await data.json();
        setRestuarantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }
    return restuarantMenu;


}

export default useRestuarantMenu;