import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from './Product';

const Products = () => {

    const url = `http://localhost:5000/products`;

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })









    return (
        <div>
            <h1 className='text-5xl font-bold mb-10 mt-5 text-center '>Products</h1>

            <div className='grid md:grid-cols-3 gap-3 mx-20 mb-10'>
                {
                    products.map((products) => <Product
                    products={products}
                    key={products._id}
                    ></Product>
                    )}
            </div>
        </div>
    );
};

export default Products;