import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import useSeller from '../../../../Hooks/useSeller';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyProduct = ({ products }) => {
    const {user} = useContext(AuthContext);
    const [displayUser, setDisplayUser] = useState();
    // const [isSeller] = useSeller(user?.email)

    const {
        picture,
        title,
        price,
        description
      
    } = products;
    // handleDeleteUser
    const handleDeleteUser = _id => {


        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log(data.deletedCount);
                    toast.success("Product Deleted Succesfully")
                    const remainingUsers = displayUser.filter(usr => usr._id !== _id);
                    setDisplayUser(remainingUsers);
                }
            })
    }



    return (
        <div>


            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="" /></figure>
                    <div className="card-body">

                        <h2 className="card-title">{title}</h2>
                        <p>Price : {price}</p>
                        <p>Description : {description}</p>

                      
                        <div className="card-actions justify-end">
                            {/* { isSeller &&
                                <> */}
                                   
                                    <button onClick={() => handleDeleteUser(products._id)} className='btn btn-danger'>Delete</button>



                                {/* </>
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default MyProduct;