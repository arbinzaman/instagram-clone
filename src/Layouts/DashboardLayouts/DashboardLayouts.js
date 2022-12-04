import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import UseAdmin from '../../Hooks/UseAdmin';
import UseWorker from '../../Hooks/UseWorker';
import Navbar from '../../Shared/NavBar/NavBar'

const DashboradLayouts = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email)
    const [isWorker] = UseWorker(user?.email)
    return (
        <div>
       
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {/* <li><Link to="/dashboard">My Orders</Link></li> */}
                        {/* {
                            (isWorker || isAdmin) && <>
                                <li><Link to="/dashboard/myproduct">My Products</Link></li>
                                <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
                            </>
                        } */}

                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All User</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboradLayouts;