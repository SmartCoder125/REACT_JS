import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';

import { CartContext } from '../CartContext';




const Aproduct = (props) => {

    // FOR BUTTON LOCAL STATE

    const [ isAdding, setIsAdding ] = useState(false);


    // TO USE CONTEXT

    const { cart , setCart} =  useContext(CartContext)

    const { product } = props;


    // console.log(props)

    // DESTRUCTURE THE OBJECT

    // const { product } = props;  // ALT


    // ONCLICK ADD TO REFRENCE

    const addToCart = (event, product) => {

        // TO AVOID THE REDIRECT

        event.preventDefault();  // stopPropogation.

        console.log(product) // events



        // CART 

        // const cart = {

        //     items : {

        //         '61f249c7bf58f80d12521858' : 2,
        //         '61f2497fbf58f80d12521851' : 3
                 
        //     },

        //     totalItem :  5

        // }


        let _cart = {...cart}  // TO CLONE SPRED OPERATOR

        if(!_cart.items) {  // EMPTY OBJECT CART

            _cart.items = {}
        }

        if(_cart.items[product._id])  {

            _cart.items[product._id]  = _cart.items[product._id]  + 1;

        }

        else {

            _cart.items[product._id] = 1;
        }

        
        if(!_cart.totalItems)  {

            _cart.totalItems = 0;
        }


        _cart.totalItems += 1;

        setCart(_cart)   ///////////


        // COLOR CHANGING BUTTON

        setIsAdding(true)

        setTimeout(() => {

            setIsAdding(false)

        }, 1000)

        


    }

    return (
            
        <Link to={`/products/${product._id}`}>
        
        <div>
                <img src={product.image} alt="Pizza"/>   {/*"/images/peproni.png"*/}
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{product.name}</h2>   {/* Havana Special */} {/*props.product.name*/}
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <span>₹ {product.price}</span>
                    <button disabled={isAdding}  onClick={ (e)=> {addToCart(e, product)} } className={`${ isAdding ? 'bg-green-500' : 'bg-yellow-500'} py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED' : '' }</button>

                </div>
            </div>
        
        </Link>
    )
}

export default Aproduct;
