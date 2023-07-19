import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter } from "react-router-dom";



const WholePageLayout = () =>{
    return(
        <>
            <Header/>
            <Body/>
            

            
            <Footer/>
        </>
    )
}

const AppRouter = () =>
{
    [
        
    {
        path : "/",
        element : <WholePageLayout />
    },
    {
        path : "/About",
        element: <About/>
    },
    {
        path : "/Contact",
        element :<Contact/>
    }
    ]
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WholePageLayout />)