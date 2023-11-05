import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footre from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";




const MainLayout = () => {
   
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footre></Footre>
             <Toaster position="bottom-left"></Toaster>
        </div>
    );
};

export default MainLayout;