import { getCart, setCart, addItem } from '../local-storage-utils.js';

const test = QUnit.test;

test('setCart should add a cart to local storage', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const cart = [{
        id: 1,
        quantity: 5
    },
    {
        id: 2,
        quantity: 2
    }];

    setCart(cart);

    const cartInLocalStorage = getCart();
    
    // Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(cart, cartInLocalStorage);
});