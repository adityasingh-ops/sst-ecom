import './ProductCard.css';
import AddToCart from '../AddToCart/AddToCart';
import { useRef, useState } from 'react';
import logo1 from '../../assests/logo1.png';
function ProductCard({ product, cart, increaseQuantity, decreaseQuantity }) {
  var a = 10;
  a = a + 1;
  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('Class');

  // setInput(value);
  function printTitle() {
    // console.log("printTitle");
    // console.log(pRef.current.innerText);
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }
  // console.log("Rerendered", inputV);
  function displayOutput(e) {
    // console.log(iRef.current);
    // console.log(oRef.current);
    // oRef.current.innerText = `Output here: ${ iRef.current.value }`;
    // oRef.current.innerText = oRef.current.innerText + iRef.current.value;
    setInputV(e.target.value);
  }

  return (
    <div className="product-card">
      <p onClick={printTitle}> {product.title}</p>
      <p ref={pRef}> {product.price.value}</p>
      <img src={logo1} />
      <input type="text" onChange={displayOutput} ref={iRef} value={inputV} />
      <p ref={oRef}>Over here the output would arrive - {inputV}</p>
      <AddToCart product={product}  cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </div>
    )
  }
  
export default ProductCard;
  

//ProductCard()

// useState
// useRef
// useEffect

// custom hooks 
// default hooks
// they should not render a ui 
// they should be on the top of a function 
// they should be not in any conditon or loops 



// state variable = 
// whenver a state variable is set it would cause a rerender of the component
// and the value of the variable would be retained on rerenders

// function or component is called for the first time 
// Mounting

// useState(default value)
// returns [stateVar, setterFn];


// useEffect(fn, [])