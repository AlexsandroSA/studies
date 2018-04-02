(function( win, doc ) {
    'use strict';

    function DOM( element ) {
        this.element = doc.querySelectorAll( element );
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

    // Publc Api
    return win.DOM = DOM;

})( window, document );
