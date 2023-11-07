import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blogs/Blog";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Myjobs from "../Pages/Myjobs/Myjobs";
import AddAjob from "../Pages/AddAjob/AddAjob";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import JobDetails from "../Pages/Home/JobDetails";
import PrivateRout from "../PrivateRoute/PrivateRoute";
import LoginRout from "../Components/Login/LoginRout";
import Register from "../Components/Login/Register";
import UpdateJob from "../Pages/Myjobs/UpdateJob";




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
                path: '/login',
                element: <LoginRout></LoginRout>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>,

            },
            {
                path: '/alljobs',
                element: <AllJobs></AllJobs>,
                loader: () => fetch('http://localhost:5000/categories')

            },
            {
                path: '/myjobs',
                element: <PrivateRout><Myjobs></Myjobs></PrivateRout>,

            },
            {
                path: '/addajob',
                element: <PrivateRout><AddAjob></AddAjob></PrivateRout>,
            },
            {
                path: '/appliedjobs',
                element: <AppliedJobs></AppliedJobs>,
            },
            {
                path: '/jobdetails/:id',
                element: <PrivateRout><JobDetails></JobDetails></PrivateRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/updateJob/:id',
                element: <PrivateRout><UpdateJob></UpdateJob></PrivateRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)


            }






        ]
    }
])

export default myCreatedRouter;