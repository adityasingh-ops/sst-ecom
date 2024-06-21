
import { useContext } from "react";
import CartContext from "../../context/CardContext";
function AddToCart({ product}) {
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    function increase() {
        increaseQuantity(product);
    }
    function decrease() {
        decreaseQuantity(product);
    }
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }

}

export default AddToCart;


// array of object 
// object of object 

//[{id: 1, quantity: 10}, {id: 2, quantity: 10}, {id: 3, quantity: 10}, {id: 4, quantity: 10}]
// cart = 
// {id:{id: 1, quantity: 10}, id:{id: 2, quantity: 10}, id:{id: 3, quantity: 10}, id:{id: 4, quantity: 10}}
//cart["3"]

// Object.value(obj);
// Object.keys(obj);
