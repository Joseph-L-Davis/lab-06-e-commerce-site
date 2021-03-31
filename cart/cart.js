import { wands } from '../products.js';
import { cart } from '../cart/cart-data.js';
import { createTableRow, createTotal, findById } from '../utils.js';

const table = document.querySelector('table');

for (let item of cart) {
    const matchingWand = findById(wands, item.id);

    console.log(matchingWand, item);
}