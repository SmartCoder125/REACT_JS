
import AProduct from './Aproduct' 

import {useState, useEffect, useContext} from 'react'

import { CartContext } from '../CartContext';


const AProducts = () => {

    // USE CONTEXT

//    const { name } = useContext(CartContext)


    const [products, setProducts] = useState([]);     // DESTRUCTRING ASSINMENT.


    useEffect(()=> {

        // console.log('Component Mounted!')

        fetch('/api/products')
        
        .then(responce => responce.json())  //  console.log(responce);

        
        .then(products => {

            setProducts(products)

            // console.log(products);
        });
    
    },[]);  // [] - DEPENDANCY ARRAY AFTER DATA CHANGE , MULTIPLE THEN RUN, IF EMPTY THEN AFTER MOUNT RUN ONCE.



    return (

        <div className="container mx-auto pb-24">

            <h1 className="text-lg font-bold my-8">Products </h1>     {/*{name}*/}

             <div className="grid grid-cols-5 my-8 gap-24">
    
            {/* MANUALLY WITHOUT DATABASE AND SERVER AND BACKEND */}

            {/* <AProduct/> */}

            {/* <AProduct/> */}


            {/* AUTOMATICALLY USING THE LOOP  */}


            {
                products.map(product => <AProduct key={product._id} product={product}/>)
            }
            
                        
            
            </div>

        </div>
    )
}

export default AProducts;
