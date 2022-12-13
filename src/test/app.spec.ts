import { BasicCalculator } from '../BasicCalculator'

describe('Test calculator basic math', () => {
    test('Test calculator basic math', () => {
        let a = 1;
        let b = 2;
        let expected = 3;

        expect(BasicCalculator.add(a, b)).toEqual(expected);
    })
})

// describe('Calculate basic math'), () => {
//     test('Calculate basic math', () => {
//         let a = 1;
//         let b = 2;
//         let expected = 3;
//         expect(BasicCalculator.add(a,b)).toEqual(expected);
//     }
// }