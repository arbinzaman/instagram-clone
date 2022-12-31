
import { useQuery } from '@tanstack/react-query';
// import { useLoaderData } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import NewesFeed from './NewesFeed';

const NewesFeeds = () => {
    // const posts = useLoaderData();
    // console.log(posts);

    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        fetch('http://localhost:5000/addapost')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [posts])


    // const url = `http://localhost:5000/addapost`;

    // const { data: posts = [], } = useQuery({
    //     queryKey: ['posts'],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }

    // })
    // console.log(posts);
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