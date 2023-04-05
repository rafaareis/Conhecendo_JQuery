$(document).ready(function() {
    // JavaScript: console.log(document.querySelector('header button'));
    // JQuery: console.log($('header button'));
    
    //[JavaScript] 
    //document.querySelector('header button').addEventListener('click', function() {})

    //[JQuery]
    $('header button').click(function() {
        //alert(`Expandir formulário`)
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        console.log('fui clicado');
    })

})
