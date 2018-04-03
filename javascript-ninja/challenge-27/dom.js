/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

(function( win, doc ) {
    'use strict';

    // Variables
    var ObjectType = {
        NULL: '[object Null]',
        ARRAY: '[object Array]',
        NUMBER: '[object Number]',
        OBJECT: '[object Object]',
        STRING: '[object String]',
        BOLLEAN: '[object Boolean]',
        FUNCTION: '[object Function]',
        UNDEFINED: '[object Undefined]'
    };

    function getType( obj ) {
      return Object.prototype.toString.call( obj );
    }

    function DOM( element ) {
        this.element = doc.querySelectorAll( element );
        return this;
    }

    DOM.prototype.on = function on( event, callback ) {
        this.element.forEach(function( elem ){
            elem.addEventListener( event, callback, false );
        });
    }

    DOM.prototype.off = function off( event, callback ) {
        this.element.forEach(function( elem ){
            elem.removeEventListener( event, callback, false );
        });
    }

    DOM.prototype.get = function get() {
        return this.element;
    }

    DOM.prototype.forEach = function forEach() {
      return Array.prototype.forEach.apply( this.element, arguments );
    }

    DOM.prototype.map = function map() {
      return Array.prototype.map.apply( this.element, arguments );
    }

    DOM.prototype.filter = function filter() {
      return Array.prototype.filter.apply( this.element, arguments );
    }

    DOM.prototype.filter = function filter() {
      return Array.prototype.filter.apply( this.element, arguments );
    }

    DOM.prototype.reduce = function reduce() {
      return Array.prototype.reduce.apply( this.element, arguments );
    }

    DOM.prototype.reduceRight = function reduceRight() {
      return Array.prototype.reduceRight.apply( this.element, arguments );
    }

    DOM.prototype.every = function every() {
      return Array.prototype.every.apply( this.element, arguments );
    }

    DOM.prototype.some = function some() {
      return Array.prototype.some.apply( this.element, arguments );
    }

    DOM.isArray = function isArray( obj ) {
      return getType( obj ) === ObjectType.ARRAY;
    }

    DOM.isNumber = function isNumber( obj ) {
      return getType( obj ) === ObjectType.NUMBER;
    }

    DOM.isFunction = function isFunction( obj ) {
      return getType( obj ) === ObjectType.FUNCTION;
    }

    DOM.isObject = function isObject( obj ) {
      return getType( obj ) === ObjectType.OBJECT;
    }

    DOM.isString = function isString( obj ) {
      return getType( obj ) === ObjectType.STRING;
    }

    DOM.isBoolean = function isBoolean( obj ) {
      return getType( obj ) === ObjectType.BOLLEAN;
    }

    DOM.isNull = function isNull( obj ) {
      var type = getType( obj );
      return type === ObjectType.NULL || type === ObjectType.UNDEFINED;
    }

    // Publc Api
    return win.DOM = DOM;

})( window, document );
