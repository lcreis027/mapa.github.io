$(document).ready(function() {
    $('#novo').click(function() {
        $('#form-novo').show();
        $('#form-login').hide();
    });

    $('#login').click(function() {
        $('#form-login').show();
        $('#form-novo').hide();
    });

    $('#form-novo form').submit(function(event) {
        // Validação de campos
        if ($('#nome').val() === '' || $('#cep').val() === '' || $('#email-novo').val() === '' || $('#senha-novo').val() === '') {
            alert('Todos os campos são obrigatórios!');
            event.preventDefault();
        }
    });

    $('#form-login form').submit(function(event) {
        // Validação de campos
        if ($('#email-login').val() === '' || $('#senha-login').val() === '') {
            alert('Todos os campos são obrigatórios!');
            event.preventDefault();
        }
    });
});
