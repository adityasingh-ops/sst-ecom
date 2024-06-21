import { createContext } from "react";

const CardContext = createContext({
    cart: {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {}
});

export default CardContext;