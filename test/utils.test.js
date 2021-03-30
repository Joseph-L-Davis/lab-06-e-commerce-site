// // IMPORT MODULES under test here:
// // import { example } from '../example.js';
// import { createWandLi } from '../utils.js';

// const test = QUnit.test;

// test('time to test a function', (expect) => {
//     // Arrange
//     // Set up your arguments and expectations
//     const expected = `<li class="wizardLi">
//                     <p class="wizard">Dumbledore</p>
//                     <p class="image"><img src="../assets/dumbledore.jpg" alt="dumbledore wand" width="200" height="200"></p>
//                     <p class="size">15 inches</p>
//                     <p class="wood">Elder wood</p>
//                     <p class="core">Thestral tail hair core</p>
//                     <p class="price">£300,000</p>
//                 </li>`;
    
//     // Act 
//     // Call the function you're testing and set the result to a const
//     const actual = createWandLi(
//         {
//             wizard: 'Dumbledore',
//             image: '../assets/dumbledore.jpg',
//             size: '15 inches',
//             wood: 'Elder Wood',
//             core: 'Thestral tail hair core',
//             price: '£300,000'
//         }
//     );
//     // Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });