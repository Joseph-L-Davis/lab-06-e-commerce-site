import { wands } from '../products.js';
import { createWandLi } from '../utils.js';

console.log(wands);

const ul = document.querySelector('.products');

for (let wand of wands) {
  
    const li = createWandLi(wand);

    ul.append(li);
}