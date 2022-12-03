import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const NavBar = () => {



    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error('error'))
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">Nazma</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/' className="btn btn-ghost normal-case " >Home</Link></li>
                        <li><Link to='/' className="btn btn-ghost normal-case " >Products</Link></li>
                        <li><Link to='/contactus' className="btn btn-ghost normal-case " >Contact Us</Link></li>
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