export function createWandLi(wand) {
    const li = document.createElement('li');

    li.classList.add('wizardLi');
    li.style.background = wand.color;

    const pWizard = document.createElement('p');
    pWizard.classList.add('wizard');
    pWizard.textContent = wand.wizard;

    const image = document.createElement('img');
    image.src = wand.image;
    image.width = 200;
    image.height = 200;

    const pLength = document.createElement('p');
    pLength.classList.add('length');
    pLength.textContent = wand.size;

    const pWood = document.createElement('p');
    pWood.classList.add('wood');
    pWood.textContent = wand.wood;

    const pCore = document.createElement('p');
    pCore.classList.add('core');
    pCore.textContent = wand.core;

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = wand.price;

    const button = document.createElement('button');
    button.textContent = 'Add To Cart';

    li.append(pWizard, image, pLength, pWood, pCore, pPrice, button);

    return li;
  
}

export function findById(array, id) {
    for (let obj of array) {
        if (obj.id === id) {
            return obj;
        }
    }
}

export function calcItemTotal(quantity, price) {
    let total = 0;
    // const value1 = Number(quantity);
    // const value2 = Number(price);
    total = quantity * price;
    return `$${total}`;
}

export function createTableRow(cartItem, wand) {
    // Create table row element
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');
    const priceValue = calcItemTotal(cartItem.quantity, wand.price);

    tdName.textContent = wand.wizard;

    tdQuantity.textContent = cartItem.quantity;

    tdPrice.textContent = priceValue;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function createTotal(cart, wands) {
    let sum = 0;

    for (let item of cart) {
        const matchingWand = findById(wands, item.id);

        const lineItem = matchingWand * item.quantity;

        sum = sum + lineItem;
    }

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `$${sum}`;

    tr.append(td1, td2, td3);

    return tr;
}
