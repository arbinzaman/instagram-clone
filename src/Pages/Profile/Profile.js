import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='grid grid-cols-3 gap-2 mt-10'>
                <div></div>
                <div className='grid grid-cols-3 gap-6 mt-10'>
                    <div>
                        <Link to="/"><img src={user?.photoURL} alt="" className='w-37 h-38 rounded-full ring-2 ring-offset-4  ring-red-700 ring-offset-red-100"' /></Link>
                    </div>
                    <div >
                        <div className='text-3xl'>{user?.displayName}</div>
                        <div><span >69</span> Posts</div>
                        <p className=' mt-2 text-2xl font-bold'>{user?.displayName}</p>
                        <p>Don’t Know About meh :3 ?
                            Just Google "Arbin Zaman" : )</p>

                    </div>
                    <div>
                        <p className='btn-ghost font-bold'>Edit Profile</p>
                        <p> <span className='font-bold'>6969</span> followers</p>
                    </div>

                </div>
                <div></div>
                <div></div>
                {/* story */}
                <div className="rounded-md sm:w-96 ">

                    <div className="flex flex-col rounded-md items-center justify-center pt-4 pb-4 border-inherit">
                        <div className="flex space-x-5 p-5">
                            <img alt="" className="w-20 h-18 rounded-full ring-2 ring-offset-4  ring-red-400 ring-offset-red-100" src="https://source.unsplash.com/40x40/?portrait?1" />
                            <img alt="" className="w-20 h-18 rounded-full ring-2 ring-offset-4  ring-red-400 ring-offset-red-100" src="https://source.unsplash.com/40x40/?portrait?2" />
                            <img alt="" className="w-20 h-18 rounded-full ring-2 ring-offset-4  ring-red-400 ring-offset-red-100" src="https://source.unsplash.com/40x40/?portrait?3" />
                            <img alt="" className="w-20 h-18 rounded-full ring-2 ring-offset-4  ring-red-700 ring-offset-red-100" src="https://source.unsplash.com/40x40/?portrait?4" />
                            <img alt="" className="w-20 h-18 rounded-full ring-2 ring-offset-4  ring-red-700 ring-offset-red-100" src="https://source.unsplash.com/40x40/?portrait?4" />
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className='text-center '>
        <p className='-ml-40'><span className='font-bold'>Post</span> <span className='ml-10 font-bold'>Reel</span> <span className='ml-10 font-bold'>Saved </span> <span className='ml-10 font-bold'>Tagged</span></p>
        <p></p>
        <p></p>
        <p></p>
            </div>
            <section className="py-6">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                        <img className="object-cover   aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                        <img className="object-cover   aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                        <img className="object-cover   aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                        <img className="object-cover   aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
                    </div>
                </div>
            </section>




        </div>
    );
};

export default Profile;