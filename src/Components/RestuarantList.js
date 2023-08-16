import { cloudinaryImageUrl } from "../Constants";

const RestuarantList =({cloudinaryImageId, name, cuisines, area, totalRatingsString, city}) =>
{
    return(
        <>
        


        <div className = "Cards">
        <img  src={ cloudinaryImageUrl + cloudinaryImageId}></img>
        <ul className = "CII">
            <li >{name }</li>
            <li>{cuisines.join(", ")}</li>
            <li>{area}</li>
            <li>{totalRatingsString} 5 * rating</li>
            <li>{city}</li>
            
        </ul>
        </div>
        </>


    );
};

export const withPromotedLable = (RestuarantList) =>
 { 
    return (props) => {
        return(
        <>
            <h4>promoted</h4>
            <RestuarantList {...props}/>
        </>
        )
    }
}



export default RestuarantList