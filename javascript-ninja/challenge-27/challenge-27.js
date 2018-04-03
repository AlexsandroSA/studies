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

(function( DOM ) {
    'use strict';

    // Test types
    var type =  {
      NULL: null,
      ARRAY: [1,2,3],
      NUMBER: 10,
      OBJECT: {},
      STRING: 'alexsandro',
      BOLLEAN: false,
      FUNCTION: function() {}
    };

    var consoleTitleStyle = 'font-weight: bold; font-size: 18px;';
    var consoleTesteStyleError = 'color: #ce0601';
    var consoleTesteStyleSuccess = 'color: #6fa450';

    for (var prop in type) {
        console.log('%cTest: is' + prop + ' with value "' + type[prop] + '"',  consoleTitleStyle);

        console.log('%cDOM.isNull( ' + type[prop] + ' ) = ' + DOM.isNull( type[prop] ), colorFeedback( DOM.isNull(type[prop]) ));
        console.log('%cDOM.isArray( ' + type[prop] + ' ) = ' + DOM.isArray( type[prop] ), colorFeedback( DOM.isArray(type[prop]) ));
        console.log('%cDOM.isNumber( ' + type[prop] + ' ) = ' + DOM.isNumber( type[prop] ), colorFeedback( DOM.isNumber(type[prop]) ));
        console.log('%cDOM.isObject( ' + type[prop] + ' ) = ' + DOM.isObject( type[prop] ), colorFeedback( DOM.isObject(type[prop]) ));
        console.log('%cDOM.isString( ' + type[prop] + ' ) = ' + DOM.isString( type[prop] ), colorFeedback( DOM.isString(type[prop]) ));
        console.log('%cDOM.isBoolean( ' + type[prop] + ' ) = ' + DOM.isBoolean( type[prop] ), colorFeedback( DOM.isBoolean(type[prop]) ));
        console.log('%cDOM.isFunction( ' + type[prop] + ' ) = ' + DOM.isFunction( type[prop] ), colorFeedback( DOM.isFunction(type[prop]) ));

        console.log('\n');
    }

    function colorFeedback( status ) {
      return status ? consoleTesteStyleSuccess : consoleTesteStyleError;
    }

    // Test Array methods
    console.log('%cDOM', consoleTitleStyle);
    var $links = new DOM('[data-js="link"]');
    console.log( $links );

    //
    console.log('%cDOM map', consoleTitleStyle);
    var nameLinks = $links.map(function($link) {
      return $link.textContent;
    });
    console.log( nameLinks );

    console.log('%cDOM filter', consoleTitleStyle);
    var $linksWithLink = $links.filter(function($link) {
      if ( $link.hasAttribute('href') && $link.getAttribute('href') !== '#' ) {
        return $link.href;
      }
    });
    console.log( $linksWithLink );

    console.log('%cDOM forEach', consoleTitleStyle);
    $links.forEach(function($link) {
      console.log( $link.textContent + ' - ' + $link.href );
    })

})( DOM );
