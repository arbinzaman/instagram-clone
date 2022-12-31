import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const AddAPost = () => {
    const [img, setImg] = useState(null)
    const imageInput = (e) => {
        const file = e.target.files[0]
        setImg(file)

    }


    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const caption = form.caption.value;
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
                    const picture = imgData.data.url
                    const addAPost = {
                        name: name,
                        picture: picture,
                        caption: caption,
                        img: picture,

                    };
                    console.log(addAPost);

                    fetch('http://localhost:5000/addapost', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(addAPost)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Post Added Succesfully`);
                            Navigate('/newsfeed')
                        })
                }
            })
    }



    return (
        <div className='text-center grid grid-cols-4 gap-4 mt-10'>
            <div></div>
            <div className="flex flex-col max-w-md p-6 mt-10 rounded-md sm:p-10 dark:bg-base-300 dark:text-black">
                <h1 className='text-4xl font-bold mb-10'>Add A Post </h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-lg font semibold">Name</label>
                            <input type="name" name="name" id="name" placeholder="" defaultValue={user?.displayName}  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
                        </div>
                        <div>
                            <label htmlFor="caption" className="block mb-2 text-lg font semibold">Caption</label>
                            <input type="caption" name="caption" id="caption" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-base-300 dark:text-black" />
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

export default AddAPost;