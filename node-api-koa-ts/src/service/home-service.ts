/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @return {int} The sum of the two numbers.
*/
export default class HomeService {
  hello = () => {
    return new Promise((resolve) => resolve('hello world'));
  };
}
