/*
No HTML:
- Crie um formulário com um input de texto que receberá um CEP e um botão
de submit;
- Crie uma estrutura HTML para receber informações de endereço:
"Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
preenchidas com os dados da requisição feita no JS.
- Crie uma área que receberá mensagens com o status da requisição:
"Carregando, sucesso ou erro."

No JS:
- O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
deve ser limpo e enviado somente os números para a requisição abaixo;
- Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
"https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
no input criado no HTML;
- Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
com os dados recebidos.
- Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
a mensagem: "Buscando informações para o CEP [CEP]..."
- Se não houver dados para o CEP entrado, mostrar a mensagem:
"Não encontramos o endereço para o CEP [CEP]."
- Se houver endereço para o CEP digitado, mostre a mensagem:
"Endereço referente ao CEP [CEP]:"
- Utilize a lib DOM criada anteriormente para facilitar a manipulação e
adicionar as informações em tela.
*/

(function( DOM ) {
  'use strict';

  // Variables
  var CEP_TOTAL_CHARACTERS_VALID = 8;
  var ajax = new XMLHttpRequest();
  var $form = new DOM('[data-form="cep"]');
  var Cache = {
    CEP: '',
  };

  // Events
  $form.on('submit', sendFormCEP);

  // Methods
  function sendFormCEP( event ) {
    event.preventDefault();
    var $formCEP = event.target;
    var $input = $formCEP.querySelector('[data-field="cep"]');
    var cep =  cleanCEP( $input.value );
    Cache.CEP = cep;

    if ( !isCEPValid(cep) ) {
      showCEPNotFound();
      return;
    }

    requestCEP( cep );
  }

  function cleanCEP( cep ) {
    var regex = /\D/g;
    return cep.replace(regex, '');
  }

  function isCEPValid( cep ) {
    return cep.length === CEP_TOTAL_CHARACTERS_VALID;
  }

  function requestCEP( cep ) {
    var url = getUrl(cep);

    ajax.open('GET', url);
    ajax.send();

    showCEPStatus('loading');

    ajax.addEventListener('readystatechange' , readyStateChange);
  }

  function getUrl( cep ) {
    return 'https://viacep.com.br/ws/' + cep + '/json/';
  }

  function readyStateChange() {
    if ( isRequestSuccess() ) {
      notifyUser( ajax.responseText );
    }
  }

  function isRequestSuccess() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function notifyUser( response ) {
    var data = parserResponse( response );

    if( !isResponseValid(data) ) {
      showCEPNotFound();
      return;
    }

    showCEPStatus('success');
    showCEPInfo( data );
  }

  function parserResponse( response ) {
    var data;

    try {
      data = JSON.parse( response );
    } catch (e) {
      console.log( e );
    }

    return data;
  }

  function isResponseValid( data ) {
    return data && !data.hasOwnProperty('erro');
  }

  function showCEPInfo( data ) {
    var $fieldsAddress = new DOM('[data-address]');
    var infoCEP = {
      cep: 'cep',
      estado: 'uf',
      cidade: 'localidade',
      bairro: 'bairro',
      logradouro: 'logradouro'
    };

    $fieldsAddress.forEach(function($field) {
      var type = $field.dataset.address;

      if ( infoCEP[type] ) {
        $field.textContent = data[ infoCEP[type] ];
      }
    });

    showWrapperCEPInfo();
  }

  function showCEPNotFound() {
    hideWrapperCEPInfo();
    showCEPStatus('error');
  }

  function showWrapperCEPInfo() {
    var $wrapperInfo = getWrapperCEPInfo();
    $wrapperInfo.style.display = 'block';
  }

  function hideWrapperCEPInfo() {
    var $wrapperInfo = getWrapperCEPInfo();
    $wrapperInfo.style.display = 'none';
  }

  function getWrapperCEPInfo() {
    return new DOM('[data-feedback="cep-info"]').get()[0];
  }

  function getMessage( type ) {
    var message = {
      loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
      error: replaceCEP('Não encontramos o endereço para o CEP [CEP].'),
      success: replaceCEP('Endereço referente ao CEP [CEP]:')
    }

    return message[ type ];
  }

  function replaceCEP( message ) {
    return message.replace('[CEP]', Cache.CEP);
  }

  function showCEPStatus( type ) {
    var message = getMessage( type );
    var $wrapperStatus = new DOM('[data-feedback="status"]');

    $wrapperStatus.get()[0].textContent = message;
  }

})( DOM );
