// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import NewesFeed from './NewesFeed';

const NewesFeeds = () => {

    const [posts ,setPosts]= useState([]);
    console.log(posts);

    useEffect(()=>{
         fetch('http://localhost:5000/addapost')
         .then(res=>res.json())
         .then(data=>setPosts(data))
     },[posts])
    
    return (
        <div>
            {
                posts.map((post) => <NewesFeed
                    key={post._id}
                    post={post}
                ></NewesFeed>
                )}
        </div>
    );
};

export default NewesFeeds;