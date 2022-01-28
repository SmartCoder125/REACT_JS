 // TO RENDER THE APP INTO INDEX.HTML DIV ROOT

 // TO IMPORT RENDER FROM REACT DOM

 // IMPORT REACT DOM AND APP AND CSS
 
 import ReactDOM from 'react-dom';

 import App from './App';

 import './Index.css'

 // DIRECT ELEMENT

// ReactDOM.render(
//     <h1>Hello From Jay!!!</h1>,
//     document.getElementById('root')

// );


// WITH APP.JS COMPONENT

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


