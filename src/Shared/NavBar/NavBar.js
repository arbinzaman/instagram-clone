import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import UseAdmin from '../../Hooks/UseAdmin';


const NavBar = () => {



    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">Nazma</Link>
                </div>


                <div className=" justify-between md:hidden navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>Products</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>


                            {
                                (isAdmin) && <>
                                    <li><Link to='/dashboard'>DashBoard</Link></li>
                                </>
                            }

                            <li> {
                                user?.uid ?
                                    <>
                                        <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 sm:h2 rounded-full" alt="" /></span>
                                        <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className="btn btn-ghost normal-case ">Login</Link>
                                        <Link to='/register' className="btn btn-ghost normal-case ">Register</Link>
                                    </>
                            }</li>
                        </ul>
                    </div>
                </div>



                <div className=" max-sm:hidden flex-none">
                    <ul className=" menu menu-horizontal p-0">

                        <li><Link to='/' className="btn btn-ghost normal-case " >Home</Link></li>
                        <li><Link to='/' className="btn btn-ghost normal-case " >Products</Link></li>
                        <li><Link to='/contactus' className="btn btn-ghost normal-case " >Contact Us</Link></li>

                        {/* 
                        {
                            (isWorker || isAdmin) && <>
                                <li><Link to='/dashboard' className="btn btn-ghost normal-case " >DashBoard</Link></li>
                            </>
                        } */}

                        {
                            (isAdmin) && <>
                                <li><Link to='/dashboard' className="btn btn-ghost normal-case " >DashBoard</Link></li>
                            </>
                        }

                        {
                            user?.uid ?
                                <>
                                    <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 sm:h2 rounded-full" alt="" /></span>
                                    <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button>
                                </>
                                :
                                <>
                                    <Link to='/login' className="btn btn-ghost normal-case ">Login</Link>
                                    <Link to='/register' className="btn btn-ghost normal-case ">Register</Link>
                                </>
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavBar;