/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

(function( win, doc ) {
    'use strict';

    //
    var $select = doc.querySelector('[data-js="select"]');
    var $status = doc.querySelector('[data-status-network]');
    var $displayNumber = doc.querySelector('[data-js="number-selected"]');

    // Events
    win.addEventListener('online', notifyNetworkStatus, false);
    win.addEventListener('offline', notifyNetworkStatus, false);
    doc.addEventListener('DOMContentLoaded', init, false);
    $select.addEventListener('change', notifyNumberSelected,false);

    // Methods
    function init() {
        hello();
        notifyNetworkStatus();
    }

    function hello() {
        console.log('%cHello,', 'font-size: 22px');
        console.log('Welcome to challenge-25 :)' );
    }

    function notifyNetworkStatus() {
        var status = ( isNetworkOnline() ) ? 'online' : 'offline';
        $status.textContent = 'Browser: ' + status;
    }

    function isNetworkOnline() {
        return (win.navigator.onLine) ? true : false;
    }

    function notifyNumberSelected( event ) {
        var $select = event.target;
        var $option = $select.querySelector('option:checked');
        $displayNumber.textContent = $option.value;
    }

})( window, document );
