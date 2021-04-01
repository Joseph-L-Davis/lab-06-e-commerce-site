import { findById } from './utils.js';

const CART = 'CART';

// A function to create a cart if one doesn't exist
export function getCart() {
    const stringCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringCart);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }

}

// A function to set cart to local storage
export function setCart(parsedCart) {
  // Turn object cart into string cart
    const stringCart = JSON.stringify(parsedCart);
  //  Set string cart to local storage
    localStorage.setItem(CART, stringCart);
}

// Add items to cart, increment quantity
export function addItem(wandID) {
  // Check if item is already in cart
    const cart = getCart();

    const matchingWand = findById(cart, wandID);

    if (matchingWand) {
        matchingWand.quantity++;
    } else {
        const item = {
            id: wandID,
            quantity: 1
        };
        //  Append item to end of cart
        cart.push(item);
    }
    //  Save cart to local storage
    setCart(cart);
}