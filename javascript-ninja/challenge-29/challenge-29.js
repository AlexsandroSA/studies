/*
Vamos estruturar um pequeno app utilizando módulos.
Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
seguinte forma:
- No início do arquivo, deverá ter as informações da sua empresa - nome e
telefone (já vamos ver como isso vai ser feito)
- Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
um formulário para cadastro do carro, com os seguintes campos:
- Imagem do carro (deverá aceitar uma URL)
- Marca / Modelo
- Ano
- Placa
- Cor
- e um botão "Cadastrar"

Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
aparecer no final da tabela.

Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
Dê um nome para a empresa e um telefone fictício, preechendo essas informações
no arquivo company.json que já está criado.

Essas informações devem ser adicionadas no HTML via Ajax.

Parte técnica:
Separe o nosso módulo de DOM criado nas últimas aulas em
um arquivo DOM.js.

E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
que será nomeado de "app".
*/

(function( win, DOM ) {
  'use strict';

  // Variables
  var ajax = new XMLHttpRequest();
  var Element = {
    FORM: DOM('[data-form="add-car"]'),
    WRAPPER_LIST_CARD: DOM('[data-wrapper-list="cars"]').get()
  };
  var Cache = {
    company: null
  };

  // Events
  Element.FORM.on('submit', addCar);

  // Methods
  function addCar( event ) {
    event.preventDefault();
    var $form = event.target;
    var data = getFormData( $form );

    showNewCar( data );
    resetForm( $form );
  }

  function getFormData( $form ) {
    var $inputs = $form.querySelectorAll('[data-input]');
    var contract = {
      year: 'year',
      image: 'image',
      brand: 'brand',
      plate: 'plate',
      color: 'color'
    };

    var data = {};

    $inputs.forEach(function($input) {
      var dataAtrributeName = $input.dataset.input;

      if( contract[ dataAtrributeName ] ) {
        data[ contract[ dataAtrributeName ] ] = $input.value;
      }
    });

    return data;
  }

  function showNewCar( data ) {
    var $template = getTemplateCar( data );
    Element.WRAPPER_LIST_CARD.insertAdjacentHTML( 'beforeend', $template );
  }

  function getTemplateCar( data ) {
    var $template = '';
    $template += '<tr>';
      $template += '<td> <img src="' + data.image + '" /></td>';
      $template += '<td> ' + data.brand + ' </td>';
      $template += '<td> ' + data.year + ' </td>';
      $template += '<td> ' + data.plate + ' </td>';
      $template += '<td> ' + data.color + ' </td>';
    $template += '</tr>';
    return $template;
  }

  function resetForm( $form ) {
    $form.reset();
  }

  function init() {
    requestCompanyInfo();
  }

  function showCompanyInfo() {
    showCompany('name');
    showCompany('phone');
  }

  function showCompany( prop ) {
    var $company = DOM('[data-company="' + prop + '"]');
    $company.forEach(function($item) {
      $item.textContent = Cache.company[prop];
    });
  }

  function isCompanyDataValid( item ) {
    return infoCompanyValid[ item ];
  }

  function requestCompanyInfo() {
    ajax.open('GET', './company.json', true);
    ajax.send();
    ajax.addEventListener('readystatechange' , readyStateChange, false);
  }

  function readyStateChange() {
    if ( isRequestSuccess() ) {
      saveCacheCompany( ajax.responseText );
      showCompanyInfo();
    }
  }

  function isRequestSuccess() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function saveCacheCompany( data ) {
    Cache.company = JSON.parse( data );
  }

  // Public Api
  win.app = {
    init: init
  };

  // Start app
  win.app.init();

})( window, DOM );
