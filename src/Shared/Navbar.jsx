import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";


const Navbar = () => {

    const { user, logOut } = useAuth();
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
    </>;
    const handleLogOut = async () => {
        try {
            await logOut()
            toast.success('Logged out successfully')

        } catch (error) {
            console.log("didnt logout", error)
        }

    }
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
                    <a className="btn btn-ghost pl-0 sm:pl-4 text-2xl font-bold text-blue-400">TechFinder</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>

                </div>
                <div className="navbar-end">
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
        </div>
    );
};

export default Navbar;