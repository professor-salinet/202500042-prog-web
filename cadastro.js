var domain = window.location.hostname;

const txtNome = document.getElementById('txtNome');
const txtLogin = document.getElementById('txtLogin');
const txtSenha = document.getElementById('txtSenha');
const txtConfirmacaoSenha = document.getElementById('txtConfirmacaoSenha');
const notificacao = document.getElementById('notificacao');

document.getElementById('frmCadastro').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = "";
    const nome = txtNome.value.trim();
    const login = txtLogin.value.trim();
    const senha = txtSenha.value.trim();
    const confirmacaoSenha = txtConfirmacaoSenha.value.trim();

    if (nome.length == 0) {
        notificacao.innerHTML = "É necessário digitar um nome para continuar!";
        abrirModal(notificacao.innerHTML);
        txtNome.focus();
        return false;
    }

    if (login.length == 0) {
        notificacao.innerHTML = "É necessário digitar um login para continuar!";
        abrirModal(notificacao.innerHTML);
        txtLogin.focus();
        return false;
    }

    if (senha.length == 0) {
        notificacao.innerHTML = "É necessário digitar uma senha para continuar!";
        abrirModal(notificacao.innerHTML);
        txtSenha.focus();
        return false;
    }

    if (senha != confirmacaoSenha) {
        notificacao.innerHTML = "Senhas não conferem!";
        abrirModal(notificacao.innerHTML);
        txtConfirmacaoSenha.focus();
        return false;
    }

    const response = await fetch('/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, domain })
    });

    const result = await response.json();
    let msgErro = (result.error) ? " " + result.error : "";
    notificacao.innerHTML = result.message + msgErro;
    abrirModal(notificacao.innerHTML);
    limparCampos();
    // essa linha vai verificar se há uma mensagem de erro e vai impedir a janela de fechar automaticamente
    if (result.error) {
        txtLogin.focus();
        return false;
    }

    // As linhas abaixo irão manipular a leitura do parâmetro: "redirect" que está localizado na url, por exemplo: http://localhost:3000/cadastro.html?redirect=false, ou seja, será possível identificar se o parâmetro: "redirect" existe na url
    let url = new URL(window.location);
    let params = new URLSearchParams(url.search);
    let getRedirect = params.get('redirect');

    if (typeof(getRedirect) == undefined || typeof(getRedirect) == null) {
        window.setTimeout(() => {
            window.open('./login.html', '_self');
        }, 5000);
    }
});

function limparCampos() {
    txtNome.value = "";
    txtLogin.value = "";
    txtSenha.value = "";
    txtConfirmacaoSenha.value = "";
    txtNome.focus();
    notificacao.innerHTML = "Comece digitando um Nome, depois Login e por fim a Senha. (TODOS OS CAMPOS SÃO OBRIGATÓRIOS!)";
    abrirModal(notificacao.innerHTML);
}

limparCampos();