$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#cancel').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const endNovaImg = $('#endImgN').val();
        const endData = $('#addData').val();

        // Formatar a data para dd/MM/yyyy
        const data = new Date(endData);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses começam do zero
        const ano = data.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;

        // Cria os itens de tarefa e data
        const novaTarefa = $(`<li>${endNovaImg}</li>`);
        const novaData = $(`<li>${dataFormatada}</li>`); // Usando a data formatada

        // Adiciona a nova tarefa e data às suas respectivas listas
        $('#atividade-lista-tarefa').append(novaTarefa);
        $('#atividade-lista-data').append(novaData);

        // Limpa os campos de input
        $('#endImgN').val('');
        $('#addData').val('');
    });
});
