import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import Login from "../../Login/Login";



const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    const activeLinkStyles = {
        color: 'white !important',    // Text color for the active link
        background: 'blue !important'
    };

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const links = <>
        <li className="text-lg mr-2 font-semibold">
            <NavLink
                to="/"
                className="text-black"
                activeStyle={activeLinkStyles}
            >
                Home
            </NavLink>
        </li>
        <li className="text-lg mr-2 font-semibold">
            <NavLink
                to="/blogs"
                className="text-black" // Set the default text color
                activeStyle={activeLinkStyles}
            >
                Blog
            </NavLink>
        </li>


    </>
    return (
        <div className="relative ">
            <div
                className={`navbar fixed top-0 left-0 w-full z-20 px-4 ${isSticky ? 'bg-stone-200 text-black transition-all duration-1000' : ''}`}

                style={{ height: isSticky ? '100px' : '' }}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="flex items-center normal-case  text-3xl font-bold"><Logo></Logo><span className="text-green-800 text-4xl">H</span>ire<span className="text-amber-500 text-4xl">H</span>aven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn text-white text-lg hover:bg-blue-500  bg-blue-500 outline-none border-none normal-case text-md">Login</button>
                    <Login></Login>
                </div>
            </div>


        </div>

    );
};

export default Navbar;