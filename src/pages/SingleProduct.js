import { useState , useEffect} from "react";

import { useParams , useHistory} from 'react-router-dom';




const SingleProduct = () => {

    // FETCH THE ENDPOINT OF REST API

   const [product, setproduct] = useState({});
   

   const params = useParams();

   const history = useHistory();

//    console.log(params)

//   TO GET THE PRODUCT I.E. FETCH THE PRODUCTS

    useEffect(()=> {

        fetch(`/api/products/${params._id}`)

        .then(res => res.json())

        .then(product => {

            // console.log(product)

            // TO SET THE PRODUCT ON REACT FRONTEND

           setproduct(product);

        })

    }, [params._id]);  // AS A DEPENDANCY IF CHANGE THEN CALL AVOID WARNING
     

  return (

    <>

    <div className="container mx-auto mt-12">

    {/* FOR THE BUTTON */}

    <button className="mb-12 font-bold" onClick={() => { history.goBack()}}>Back</button> 

    {/* FOR THE CARD */}

    <div className="flex">

    <img src={product.image} alt="pizza"></img>

    <div className="ml-16">

        <h1 className="text-xl font-bold">{product.name}</h1>

        <div className="text-md">{product.size}</div>

        <div className="font-bold mt-2">₹ {product.price}</div>

        <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to Cart</button>

    </div>

    </div>



    </div>

    </>

  )

};

export default SingleProduct;
