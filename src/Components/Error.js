import {useRouteError} from "react-router-dom";

const Error = () => { 
    const err = useRouteError();
    console.log(err)
    return(
        <>
            <h1> opps!...</h1>
            <h3>Something Went Wrong....</h3>
            <h2> {err.status + ":" +err.statusText}</h2>

        </>
    );


}

export default Error;