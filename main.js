$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))

    document.querySelector('header button').addEventListener('click', function (){
    
    })

    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#cancel').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit',function(e){
        console.log("submit")
        e.preventDefault()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const endNovaImg = $('#endImgN').val()
        const novaImg = $('<li style = "display: none"></li>')
        $(`<img src="${endNovaImg}"/>`).appendTo(novaImg)
        $(`
            <div class="overlay-imagem-link">
                <a href="${endNovaImg}" target="_blank">
                Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novaImg)
        $(novaImg).appendTo('ul')
        $(novaImg).fadeIn(1000)
        $('#endImgN').val('')
    })

}
)