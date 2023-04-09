import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContex } from '../../App';

const Cart = () => {
    const cartContextData = useContext(CartContex);
    console.log("Context data",cartContextData);
    const cartData = useLoaderData();
    let total = 0;
    return (
        <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 mx-auto '>
            <ul className='flex flex-col divide-y divide-gray-700'>

            {
                cartData.map(product => <CartItem key={product.id} product={product}></CartItem>)
            }
            </ul>
            {
                cartData.map(pd => total = total + pd.price)
            }
            <h1 className='text-xl'>Total amount: {total}</h1>
            <p>Not including taxes and shipping costs

</p>
<div className='flex justify-center'>
<button className='btn-outlined'>Clear Cart</button>
<button className='btn-primary'>Place Order</button>
</div>
        </div>
    );
};

export default Cart;