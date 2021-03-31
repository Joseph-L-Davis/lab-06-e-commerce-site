import { wands } from '../products.js';
import { cart } from '../cart/cart-data.js';
import { createTableRow, createTotal, findById } from '../utils.js';

const table = document.querySelector('table');

for (let item of cart) {
    const matchingWand = findById(wands, item.id);

    const tr = createTableRow(item, matchingWand);

    table.append(tr);
}

const totalRow = createTotal(cart, wands);

table.append(totalRow);