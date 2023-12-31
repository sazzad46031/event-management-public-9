import { NavLink, Navigate } from "react-router-dom";


const Navbar = () => {
    
    return (
        <div className="navbar bg-sky-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink
                                to="/Home"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>    
                            <NavLink
                                to="/weddingvenues"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Wedding Venues
                            </NavLink>
                        </li>
                        <li>    
                            <NavLink
                                to="/inspiration"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Idea and inspiration
                            </NavLink>
                        </li>
                        <li>    
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>    
                            <NavLink
                                to="/register"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <a className="normal-case text-3xl">Wedding manager</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "text-white"
                            }
                        >
                            Home
                        </NavLink>
                    </li> 
                    <li>   
                        <NavLink
                                to="/weddingvenues"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Wedding Venues
                        </NavLink>
                    </li>
                    <li>    
                        <NavLink
                                to="/inspiration"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Idea and inspiration
                        </NavLink>        
                    </li>
                    <li>    
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>    
                            <NavLink
                                to="/register"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-white"
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-primary mr-4">Sign in</button>
                <button className="btn btn-secondary">Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;