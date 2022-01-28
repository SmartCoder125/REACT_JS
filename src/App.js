// THIS IS ROOT COMPONENT AFTER THIS ALL CHILD COMP. OF THIS

// TWO TYPES OF COMPONENT CLASS (OLDEST) , FUNCTIONAL (NEW AND RECOM.) JAVASCRIPT FUNCTION

// FUNCTIONAL COMPONENT (IF COMPONENT THEN FIRST LETTER CAPS OTHERWISE REACT TELL YOU)

    // FOR ONE ELEMENT

// function App() {
//     return <h1>I WILL WIN</h1>; // THIS IS NOT HTML THIS IS JSX SIMILAR TO HTML AND HAVING OWN FUN.
                                
// };

    // FOR MORE THAN ONE ELEMENT

    // function App() {
    //     return (
    //         <div>
    //             <h1>Hello From Jay!!!</h1>
    //             <p>This is Testing Paragraph!</p>
    //         </div>
    //     )
    // }


    // REACT FRAGMENTS WITHOUT EXTRA ELEMENT

    // function App() {
    //     return (
    //         <>
    //             <h1>Hello From Jay!!!</h1>
    //             <p>This is Testing Paragraph!</p>
    //         </>
    //     )
    // }

    
    ////REACT-ROUTER-DOM///////////////////

    // IMPORTS ROUTER-DOM AND ALL

    import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

    import Home from './pages/Home';

    // import About from './pages/About';

    import products from './pages/products'
    
    import Cart from './pages/Cart';

    import SingleProduct from './pages/SingleProduct';

    import Navigation from './components/Navigation';

    import { CartContext } from './CartContext'

    import { useState , useEffect } from 'react';



    // With Arrow Function

    const App = () => {

        // LOCAL STATE CONTEXT API

        const [ cart, setCart ] = useState({})

        // USE LOCALSTORAGE TO STOREA ND FETCH AFTER REFRESH DATA PERSIST.

        useEffect (()=> {

            // TO GET DATA FORM LOCAL STORAGE

            const cart =  window.localStorage.getItem('cart');

            setCart(JSON.parse(cart));
            
            // console.log(JSON.parse(cart))

        },[]);


        // WATCH THE CART ORIGINAL

        useEffect(()=> {
            
            window.localStorage.setItem('cart', JSON.stringify(cart))

        },[cart]);

        return (
            <>
                <Router>

                    {/* TO USE CONTEXT API */}

                <CartContext.Provider value={{ cart , setCart}}>

                    {/* // REACT NAVIGATION COMPONENT IN NAV PAGE */}

                    <Navigation/>

                    {/* Rect Props With Tags */}

                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link> */}


                    {/* Normal Achor Tag with Realoadin */}

                    {/* <a href="/">Home</a>
                    <a href="about">About</a> */}

                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        {/* <Route path="/about" component={About}></Route> */}
                        <Route path="/products" component={products} exact></Route>
                        <Route path="/products/:_id" component={SingleProduct} exact></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>

                </CartContext.Provider>

                </Router>
            </>
        )
    }

















// TO EXPORT FUNCTIONAL COMPONENT (INBUILT JS )

export default App;

