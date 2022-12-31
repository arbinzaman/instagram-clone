import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const DashboradLayouts = () => {
    

    const { user, logOut } = useContext(AuthContext);
    // console.log(user.photoURL);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

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

                        <li><Link to="/newfeed"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" className='h-10' /></Link></li>

                        <li><Link to="/newfeed"><img src="https://banner2.cleanpng.com/20180420/vlq/kisspng-font-awesome-computer-icons-font-housing-logo-5ada418c752ba8.1327093815242530684799.jpg" alt="" className='h-10' />Home</Link></li>

                        <li><Link to="/dashboard/addaproduct"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="" className='h-9' />Search</Link></li>

                        <li><Link to="/"><img src="https://cdn2.iconfinder.com/data/icons/web-ui-18/32/explore-512.png" alt="" className='h-8' />Explore</Link></li>

                        <li><Link to="/"><img src="https://seeklogo.com/images/I/instagram-reels-logo-18CF7D9510-seeklogo.com.png" alt="" className='h-7' />Reels</Link></li>

                        <li><Link to="/"><img src="https://toppng.com/uploads/preview/facebook-messenger-logo-black-and-white-11549681807l9jkugvdt7.png" alt="" className='h-7' />Messages</Link></li>

                        <li><Link to="/"><img src="https://www.pngfind.com/pngs/m/560-5601084_heart-outline-svg-vector-logos-love-instagram-hd.png" alt="" className='h-7' />Notification</Link></li>

                        <li><Link to="/"><img src="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-instagram-png-image_1696342.jpg" alt="" className='h-10' />Create</Link></li>

                        <li>
                            {
                                user?.uid ?

                                    <>

                                        <Link to="/"><img src={user?.photoURL} alt="" className='h-10 rounded-full' />{user?.displayName}</Link> <button onClick={handleLogOut} className="btn-ghost normal-case ">Log Out</button>
                                        

                                    </>
                                    :
                                    <>
                                     <Link to='/login' className="btn-ghost normal-case ">Login</Link>
                                        <Link to='/register' className="btn-ghost normal-case ">Register</Link>
                                    </>
                                  

                            }


                        </li>



                        {/* <li> {
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
                            }</li> */}



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboradLayouts;