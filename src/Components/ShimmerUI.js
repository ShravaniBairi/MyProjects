const Shimmer = () =>{
    return(
        <div className = "ShimmerList">
        {Array(30)
        .fill("")
        .map((e, index)=>
        (
            <div key={index} className = "ShimmerCard">

            </div>
            )
            )
            };
            
        
        


        </div>
        
            
     
    );
};
export default Shimmer