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
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        console.log(enderecoDaNovaImagem);

        const novoItem = $(`<li style="display: none"></li>`);
        $(`<img src="${enderecoDaNovaImagem}"  />`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
            Ver imagem em tamanho real
        </a>
        </div>

        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')

        //console.log('fui clicado');
    })

})

// Parou no no minuto 08:31. Continuar depois.