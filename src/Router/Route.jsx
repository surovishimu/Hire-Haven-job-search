import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blogs/Blog";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Myjobs from "../Pages/Myjobs/Myjobs";
import AddAjob from "../Pages/AddAjob/AddAjob";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";



const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/blogs',
                element: <Blog></Blog>,

            },
            {
                path: '/alljobs',
                element: <AllJobs></AllJobs>,

            },
            {
                path: '/myjobs',
                element:<Myjobs></Myjobs>,

            },
            {
                path: '/addajob',
                element:<AddAjob></AddAjob>,
            },
            {
                path: '/appliedjobs',
                element:<AppliedJobs></AppliedJobs>,
            },





        ]
    }
])

export default myCreatedRouter;