import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footre from "../Components/Footer/Footer";



const MainLayout = () => {
   
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footre></Footre>
        </div>
    );
};

export default MainLayout;