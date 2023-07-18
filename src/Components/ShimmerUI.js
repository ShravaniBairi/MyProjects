const Shimmer = () =>{
    return(
        <div className = "RestuarantList">
        {Array(20)
        .fill("")
        .map((e, index)=>(<div key={index} className = "ShimmerCard"></div>))};


        </div>
            
     
    );
};
export default Shimmer