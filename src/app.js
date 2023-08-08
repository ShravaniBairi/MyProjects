import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import RestuarantMenu from "./Components/RestuarantMenu";

// import Instamart from "./Components/Instamart";




const Instamart = lazy(()=>import("./Components/Instamart"))

const WholePageLayout = () =>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const AppRouter = createBrowserRouter( 

    [
        
    {
        path : "/",
        element : <WholePageLayout />,
        errorElement : <Error />,
        children : [
            {
                path : "/",
                element: <Body/>
            },
            {
                path : "/About",
                element: <About/>
            },
            {
                path : "/Contact",
                element :<Contact/>
            },
            {
                path : "/Cart",
                element: <Cart/>
            },
            {
                path : "/Instamart",
                element: <Suspense fallback ={ <h2>Loading...</h2>}>

                <Instamart/></Suspense>
            },
            {
                path : "/Restuarant/:resid",
                element : <RestuarantMenu/>
            }
        
        ]
    }
    
      
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>)
