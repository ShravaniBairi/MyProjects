import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import RestuarantMenu from "./Components/RestuarantMenu";




const WholePageLayout = () =>{
    return(
        <>
            <Header/>
            {/* <Body/> */}
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
                path : "/Restuarant/:id",
                element : <RestuarantMenu/>
            }
        
        ]
    }
    
      
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>)
