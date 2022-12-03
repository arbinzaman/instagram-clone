import React from 'react';

const Gallery = () => {
    return (
        <div>
            <section className="py-6 ">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://images.unsplash.com/photo-1577835789932-d66df549cca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1481204121400-45a5864d060d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1565273976076-9f17896520ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGp1dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1512715707335-328a1fde430e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGp1dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://plus.unsplash.com/premium_photo-1663133988328-95f6e843a6b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGp1dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1645607664987-850ab6260f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGp1dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1598117584525-450c3136f27f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGp1dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1565273976195-6f8529600264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGp1dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1546397088-0e7d39971ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGp1dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img src="https://images.unsplash.com/photo-1612698502048-ee198b8785b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default Gallery;