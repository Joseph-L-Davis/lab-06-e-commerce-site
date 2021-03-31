// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createWandLi, findById, calcItemTotal, createTableRow, createTotal } from '../utils.js';
import { wands } from '../products.js';
import { cart } from '../cart/cart-data.js';
const cartThing = cart[0];
const wandThing = wands[0];

const test = QUnit.test;

test('time to test a function', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = `<li class="wizardLi" style="background: cyan;"><p class="wizard">Dumbledore</p><img src="../assets/dumbledore.jpg" width="200" height="200"><p class="length">15 inches</p><p class="wood">Wood: Elder</p><p class="core">Core: Thestral Tail Hair</p><p class="price">£300,000</p><button>Add To Cart</button></li>`;
    
    // Act 
    // Call the function you're testing and set the result to a const
    const actual = createWandLi(
        {
            wizard: 'Dumbledore',
            color: 'cyan',
            image: '../assets/dumbledore.jpg',
            size: '15 inches',
            wood: 'Wood: Elder',
            core: 'Core: Thestral Tail Hair',
            price: '£300,000'
        }
    );
    // Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should find and return an object based on its ID', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = 
        {
            id: 1,
            wizard: 'Dumbledore',
            image: '../assets/dumbledore.jpg',
            color: 'cyan',
            size: '15 inches',
            wood: 'Wood: Elder',
            core: 'Core: Thestral Tail Hair',
            price: 3
        };
    
    // Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(wands, 1);
    // Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return a total given a quantity and price', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = 24;
    
    // Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(8, 3);
    // Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return a total given a quantity and price', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = `<tr>
                    <td>Dumbledore</td>
                    <td>3</td>
                    <td>3</td>
                </tr>`;
    
    // Act 
    // Call the function you're testing and set the result to a const
    const actual = createTableRow(cartThing, wandThing);
    // Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    console.log(cartThing);
    console.log(wandThing);
});

test('should return a total given a quantity and price', (expect) => {
    // Arrange
    // Set up your arguments and expectations
    const expected = `<tr>
                    <td>Dumbledore</td>
                    <td>3</td>
                    <td>3</td>
                </tr>`;
    
    // Act 
    // Call the function you're testing and set the result to a const
    const actual = createTotal(cart, wands);
    // Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});