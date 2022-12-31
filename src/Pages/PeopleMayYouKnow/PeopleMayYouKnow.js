import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
// import UseTitle from '../../Hooks/UseTitle';

const AllUsers = () => {

    const { user } = useContext(AuthContext);
    // UseTitle('DashBoard')
    const [displayUser, setDisplayUser] = useState();
    const url = `http://localhost:5000/usersList`;

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })



    // handleMakeAdmin
    const handleMakeAdmin = _id => {
        fetch(`http://localhost:5000/usersList/admin/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch();

                }
            })
    }


    // // handleDeleteUser
    // const handleDeleteUser = _id => {


    //     fetch(`http://localhost:5000/usersList/${_id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount > 0) {
    //                 console.log(data.deletedCount);
    //                 toast.success("User Deleted Succesfully")
    //                 const remainingUsers = displayUser.filter(usr => usr._id !== _id);
    //                 setDisplayUser(remainingUsers);
    //             }
    //         })
    // }

    return (
        <div>
            <div className='grid grid-cols-3 mt-10 gap-2'>
                <div>
                    <Link to="/"><img src={user?.photoURL} alt="" className='w-15 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800' /></Link>
                </div>
                <div>
                    {user?.displayName}
                </div>
                <div>
                    <p>Switch</p>
                </div>
            </div>
            <h1 className='mt-5'>Suggestions For You</h1>
        <div className='grid grid-row-2 mt-10 gap-2'>
            {
                users.map((user) => <div className='flex justify-between' key={user._id}>
                  {user.email} <span className='font-bold' > follow</span>
                   

                    {/* <li>{user?.role !== 'admin' && <button onClick={() => handleDeleteUser(user._id)} className='btn btn-xs btn-danger'>Delete</button>}</li> */}
                </div>)
            }
</div>





        </div>
    );
};

export default AllUsers;