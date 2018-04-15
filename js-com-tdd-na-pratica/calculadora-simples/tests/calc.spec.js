import { expect } from 'chai';
import { sum, sub, div, mult } from '../src/calculator';

describe('Simple Calculator', () => {

  describe('Smoke test', () => {

    it('sould exist method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.function;
    });

    it('sould exist method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.function;
    });

    it('sould exist method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a.function;
    });

    it('sould exist method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.function;
    });

  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });

    it('should return 10 when `sum(3,7)`', () => {
      expect(sum(3, 7)).to.be.equal(10);
    });

    it('should return 99 when `sum(0,99)`', () => {
      expect(sum(0, 99)).to.be.equal(99);
    });
  });

  describe('Sub', () => {
    it('should return 0 when `sub(2,2)`', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });

    it('should return 5 when `sub(3,7)`', () => {
      expect(sub(3, 7)).to.be.equal(-4);
    });

    it('should return 9 when `sub(10,1)`', () => {
      expect(sub(10, 1)).to.be.equal(9);
    });
  });

  describe('Div', () => {
    it('should return 3 when `div(9, 3)`', () => {
      expect(div(9, 3)).to.be.equal(3);
    });

    it('should return 5 when `div(25, 5)`', () => {
      expect(div(25, 5)).to.be.equal(5);
    });

    it('should return `Não é possível divisão por zero!` when `div(4, 0)`', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });

  describe('Mult', () => {
    it('should return 100 when `mult(10,10)`', () => {
      expect(mult(10, 10)).to.be.equal(100);
    });

    it('should return 0 when `mult(10, 0)`', () => {
      expect(mult(10, 0)).to.be.equal(0);
    });

    it('shuold return 25 when `mult(5, 5)`', () => {
      expect(mult(5, 5)).to.be.equal(25);
    })
  });

});
