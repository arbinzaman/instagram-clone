import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const AddAProduct = () => {
    const [img, setImg] = useState(null)
    const imageInput = (e) => {
        const file = e.target.files[0]
        setImg(file)

    }


    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const picture = img;


        // imgbb
        const formData = new FormData();
        formData.append('image', picture);
        const url = `https://api.imgbb.com/1/upload?key=6cbb967e3c16f1e826cbddd427dbde87`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // const category_id = "1";
                    // if (imgData.success || productcategory === "Apple" ) {
                    //     const category_id = "1";

                    // console.log(imgData.data.url);
                    // const addToProduct = {
                    //     title: title,
                    //     price: price,
                    //     specialty: data.specialty,
                    //     picture: imgData.data.url
                    // }






                    const picture = imgData.data.url
                    const addAProduct = {
                        title: title,
                        picture: picture,
                        description: description,
                        price: price,
                        description: description,
                        picture: picture,
                        // category_id: category_id
                    };
                    console.log(addAProduct);

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(addAProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Product is added successfully`);
                            Navigate('/dashboard/addaproduct')
                        })
                }
            })
    }



    return (
        <div className='text-center'>
            <div className="flex flex-col max-w-md p-6 mt-10 rounded-md sm:p-10 dark:bg-base-300 dark:text-black">
                <h1 className='text-4xl font-bold mb-10'>Add A Product </h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block mb-2 text-lg font semibold">Title</label>
                            <input type="title" name="title" id="title" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-2 text-lg font semibold">Price</label>
                            <input type="price" name="price" id="price" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                     
                        <div>
                            <label htmlFor="description" className="block mb-2 text-lg font semibold">Description</label>
                            <input type="description" name="description" id="description" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        
                        <div>
                            <label htmlFor="file" className="block mb-2 text-lg font semibold">Drop A Picture</label>
                            <input type="file" onChange={imageInput} name="file" id="file" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn btn-primary dark:text-base-300">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;