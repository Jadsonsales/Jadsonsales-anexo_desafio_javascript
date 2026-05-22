// Classe Contato estruturada para receber os campos corretos da Sprint
class Contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

// Função disparada ao clicar no botão Enviar
function Post(event, form) {

    event.preventDefault();

    let dadosFormulario = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipoContato").value,
        form.elements.namedItem("mensagem").value
    );

    console.log("================ DADOS RECEBIDOS ================");
    console.log(dadosFormulario);
    console.log("=================================================");

    // Resposta de sucesso para o usuário
    alert(`Obrigado sr(a) ${dadosFormulario.nome}, os seus dados foram encaminhados com sucesso!`);
    
    // Limpa os campos do formulário após o envio
    form.reset();
}