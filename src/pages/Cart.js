import { useContext , useEffect, useState } from 'react';

import { CartContext } from '../CartContext'

const  Cart = () => {

    // LOCAL STATE 

    const  [products , setProducts ] = useState([]) 

    // GET CART ROOT LOCALSTATE

    const { cart } = useContext(CartContext);

    console.log(cart)

    useEffect(()=> {

        if(!cart.items)  {

            return;
        }

        
        console.log('cart' ,Object.keys(cart.items))

         fetch('/api/products/cart-items', {

            method : 'POST',
            headers : {

                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ids : Object.keys(cart.items) })
       
        }).then(res => res.json())

        .then(products => {

            setProducts(products)

        })


    }, [cart]);


    // GET QUNATITY FUNCTION

    const getQty = (productId) =>  {

        return cart.items[productId]

    }


    return (
        <div className='container mx-auto lg:w-1/2 w-full b-24'>

            {/* CART HEADINGS */}

            <h1 className='my-12 font-bold'>Cart items</h1>
            
            {/* LIST FOR THE PRODUCTS */}

            <ul>
                {/* LIST ITEMS LOOP */}

                {

                    products.map(product => {

                        return(

                            <li className='mb-12'>
                            <div className='flex items-center justify-between'>
        
                                <div className='flex items-center'>
                                    <img className='h-16' src={ product.image } alt='Cart Pizza'/>
                                    <span className='font-bold ml-4 w-48'>{ product.name }</span>
                                </div>
        
                                <div>
                                    <button  className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                                    <b className='px-4'>{getQty(product._id)}</b>
                                    <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                                </div>
        
                                <span>₹ { product.price }</span>
        
                                <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>
        
                            </div>
                        </li>
        
                        )

                    })
                }
                
                {/* <li className='mb-12'>
                    <div className='flex items-center justify-between'>

                        <div className='flex items-center'>
                            <img className='h-16' src='/images/peproni.png' alt='Cart Pizza'/>
                            <span className='font-bold ml-4 w-48'>Double Peproni</span>
                        </div>

                        <div>
                            <button  className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                            <b className='px-4'>2</b>
                            <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                        </div>

                        <span>₹ 500</span>

                        <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>

                    </div>
                </li> */}


            </ul>

                <hr className='my-6' />

                {/* // GRAND TOTAL DIV */}

            <div className='text-right'>
                <b>Grand Total</b> : ₹ 1000
            </div>

            <div className='text-right mt-6'>
                <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
            </div>


        </div>
    )
}

export default Cart;
