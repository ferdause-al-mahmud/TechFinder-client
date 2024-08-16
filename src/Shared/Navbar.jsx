import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";


const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const { user, logOut } = useAuth();
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
    </>;
    const handleLogOut = async () => {
        try {
            await logOut()
            console.log("succesfully logout")
        } catch (error) {
            console.log("didnt logout", error)
        }

    }
    console.log(openSearch)
    return (
        <div className="relative">
            <div className="navbar bg-black bg-opacity-70 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost pl-0 sm:pl-4 text-xl text-blue-400">TechFinder</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                    <div>
                        <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="navbar-end">
                    <div onClick={() => setOpenSearch(!openSearch)} className="lg:hidden text-3xl mr-1 sm:mr-3"><BiSearch></BiSearch></div>
                    <button className=" p-2 sm:p-4 bg-base-100 text-black rounded-lg">
                        {
                            user ?
                                <>
                                    <div onClick={handleLogOut} className="bg-base-100 text-black rounded-lg">
                                        Logout
                                    </div>
                                </> :
                                <>
                                    <Link to={'/login'} className="hover:text-blue-400 ">Login</Link>/
                                    <Link to={'/register'} className="hover:text-blue-400 ">register</Link>
                                </>
                        }

                    </button>
                </div>
            </div>
            <div className="absolute w-full shadow-xl lg:hidden">
                {
                    openSearch && <input type="text" placeholder="Search" className="input input-bordered w-full" />

                }
            </div>
        </div>
    );
};

export default Navbar;