// Import necessary modules from React and Redux
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Initial state
const initialState = {
  cart: {
    items: [],
    total: 0,
  },
};

// Reducer function
const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload.item],
        total: state.total + action.payload.item.price,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.itemId),
        total: state.total - action.payload.itemPrice,
      };
    default:
      return state;
  }
};

// Combine reducers if needed
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Create Redux store
const store = createStore(rootReducer);

// Action creators
const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: { item },
});

const removeFromCart = (itemId, itemPrice) => ({
  type: REMOVE_FROM_CART,
  payload: { itemId, itemPrice },
});

// React component using connect to access Redux store
const App = ({ cartItems, cartTotal, addToCart, removeFromCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shopping Cart Example</Text>
      
      {/* Render products */}
      {products.map(product => (
        <View key={product.id} style={{ marginBottom: 10 }}>
          <Text>{product.name} - ${product.price}</Text>
          <Button title="Add to Cart" onPress={() => addToCart(product)} />
        </View>
      ))}

      {/* Render cart items */}
      <Text>Cart Items:</Text>
      {cartItems.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
      <Text>Total: ${cartTotal}</Text>

      {/* Example of removing item from cart */}
      {cartItems.length > 0 && (
        <Button title="Remove Last Item" onPress={() => removeFromCart(cartItems[cartItems.length - 1].id, cartItems[cartItems.length - 1].price)} />
      )}
    </View>
  );
};

// Map state to props
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  cartTotal: state.cart.total,
});

// Connect component to Redux store
const ConnectedApp = connect(mapStateToProps, { addToCart, removeFromCart })(App);

// Render the app with Redux provider
const ReduxApp = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

// Export the ReduxApp component as the main entry point
export default ReduxApp;
