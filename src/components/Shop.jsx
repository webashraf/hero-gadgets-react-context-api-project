import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';

const Shop = () => {
    const loaderProduct = useLoaderData();
    // console.log(loaderProduct);
    return (
        <div className='product-container'>
            {
                loaderProduct.map(product => <ProductCard product={product} key={product.id}></ProductCard>)
            }
        </div>
    );
};

export default Shop;