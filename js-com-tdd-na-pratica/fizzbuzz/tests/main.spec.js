import { expect } from 'chai';
import fizzBuzz from '../src/main';

/*
  Desafio: FizzBuzz

  Esta é a função responsável por converter múltiplos de 3 em 'Fizz',
  múltiplos de 5 em 'Buzz' e múltiplos de ambos
  em 'FizzBuzz'.

  Números não divisíveis, são retornados normalmente.
*/

describe('FizzBuzz', () => {
  it('should `Fizz` when number is multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should `Buzz` when number is mutiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should `FizzBuzz` when number is multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should the number when non-multiple', () => {
    expect(fizzBuzz(2)).to.be.equal(2);
    expect(fizzBuzz(7)).to.be.equal(7);
  });
});
