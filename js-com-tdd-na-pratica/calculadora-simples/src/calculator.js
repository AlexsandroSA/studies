const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = function div(num1, num2) {
  return (num1 === 0 || num2 === 0)
    ? 'Não é possível divisão por zero!'
    : num1 / num2;
};

export { sum, sub, div, mult };
