document.addEventListener('DOMContentLoaded', function () {
    const contatoForm = document.getElementById('contatoForm');

    contatoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio do formulário

        // Pega os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples
        if (nome && email && assunto && mensagem) {
            alert('Mensagem enviada com sucesso!');
            contatoForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});