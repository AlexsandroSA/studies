/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function( doc ) {
    'use strict';

    // Variables
    var $display = doc.querySelector('[data-calculator-display]');
    var $buttons = doc.querySelectorAll('[data-calculator-button]');
    var $actions = doc.querySelectorAll('[data-calculator-action]');
    var actions = {
        restart: restart,
        result: result
    };
    var operations = {
        '+': '+',
        '-': '-',
        'x': '*',
        '÷': '/'
    };

    // Events
    $actions.forEach(function(action) {
        var actionName = action.dataset.calculatorAction;

        if( !isActionValid( actionName ) ) return;

        action.addEventListener('click', function() {
            exec( actionName );
        }, false);
    });

    $buttons.forEach(function($button) {
        $button.addEventListener('click', renderValueButton, false);
    });

    // Methods
    function isActionValid( action ) {
        return actions[ action ];
    }

    function exec( name ) {
        actions[ name ]();
    }

    function result() {
        var total = calcResult( $display.value );
        $display.value = total;
    }

    function calcResult( values ) {
        var total = values.replace('x', '*').replace('÷', '/');
        return eval( total );
    }

    function renderValueButton( elem ) {
        var value = elem.target.dataset.calculatorButton;

        updateLastValueIfIsAOperation( value );
        showDisplay( value );
    }

    function updateLastValueIfIsAOperation( value ) {
        var lastValue = $display.value.slice(-1);
        if ( isOperation( value ) && isOperation( lastValue ) ) {
            $display.value = $display.value.slice(0, -1);
        }
    }

    function isOperation( value ) {
        return operations[value];
    }

    function showDisplay( value ) {
        $display.value += value;
    }

    function restart() {
        $display.value = 0;
    }

})( document );
