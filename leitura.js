var domain = window.location.hostname;
var linhas = [];

const txtId = document.getElementById('txtId');
const txtNome = document.getElementById('txtNome');
const txtLogin = document.getElementById('txtLogin');
const txtSenha = document.getElementById('txtSenha');

const btnPrimeiroRegistro = document.getElementById("btnPrimeiroRegistro");
const btnRegistroAnterior = document.getElementById("btnRegistroAnterior");
const btnProximoRegistro = document.getElementById("btnProximoRegistro");
const btnUltimoRegistro = document.getElementById("btnUltimoRegistro");

const notificacao = document.getElementById('notificacao');

const hdnPesquisaNome = document.getElementById("hdnPesquisaNome");
const hdnPesquisaLogin = document.getElementById("hdnPesquisaLogin");

document.getElementById('frmLeitura').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = txtNome.value.trim();
    if (nome.length > 0) {
        hdnPesquisaNome.value = nome;
    }

    const login = txtLogin.value.trim();
    if (login.length > 0) {
        hdnPesquisaLogin.value = login;
    }

    if (nome.trim().length == 0 && login.trim().length == 0) {
        notificacao.innerHTML = "<b class=\"text-danger\">É necessário digitar um nome ou login para realizar a pesquisa.</b>"
        return false;
    }

    const response = await fetch('/leitura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, domain })
    });

    const result = await response.json();

    txtId.value = result.id;
    txtNome.value = result.nome;
    txtLogin.value = result.login;

    linhas = result.linhas;

    let exibir = (linhas.length > 0) ? " Exibindo o primeiro." : " Nada a exibir.";

    notificacao.innerHTML = "Foi/foram encontrado(s) " + linhas.length + " resultado(s)." + exibir;
    abrirModal(notificacao.innerHTML);

    if (linhas.length > 1) {
        liberarAvancar();
    }
});

document.getElementById('btnPrimeiroRegistro').addEventListener('click', async (e) => {
    e.preventDefault();

    const id = txtId.value.trim();
    const nome = hdnPesquisaNome.value.trim();
    const login = hdnPesquisaLogin.value.trim();
    const senha = txtSenha.value.trim();

    const response = await fetch('/leitura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, domain })
    });

    const result = await response.json();

    if (result.error) {
        console.error(result.error);
        liberarAvancar();
        notificacao.innerHTML = "Você chegou ao primeiro registro.";
        abrirModal(notificacao.innerHTML);
        return false;
    }

    if (result.id) {
        txtId.value = result.id;
    }

    if (result.nome) {
        txtNome.value = result.nome;
    }

    if (result.login) {
        txtLogin.value = result.login;
    }

    notificacao.innerHTML = "Primeiro registro posicionado com sucesso";
    abrirModal(notificacao.innerHTML);
    
    linhas = result.linhas;
    if (linhas.length > 1) {
        liberarAvancar();
    }
});

document.getElementById('btnRegistroAnterior').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const id = txtId.value.trim();
    const nome = hdnPesquisaNome.value.trim();
    const login = hdnPesquisaLogin.value.trim();

    const response = await fetch('/anterior', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nome, login, domain })
    });

    const result = await response.json();

    if (result.error) {
        console.error(result.error);
        liberarAvancar();
        notificacao.innerHTML = "Você chegou ao primeiro registro.";
        abrirModal(notificacao.innerHTML);
        return false;
    }

    if (result.id) {
        txtId.value = result.id;
    }

    if (result.nome) {
        txtNome.value = result.nome;
    }

    if (result.login) {
        txtLogin.value = result.login;
    }

    if (result.linhas) {
        notificacao.innerHTML = "Registro anterior posicionado com sucesso.";
        abrirModal(notificacao.innerHTML);
        liberarTodos();
    } else {
        liberarAvancar();
    }
});

document.getElementById('btnProximoRegistro').addEventListener('click', async (e) => {
    e.preventDefault();

    const id = txtId.value.trim();
    const nome = hdnPesquisaNome.value.trim();
    const login = hdnPesquisaLogin.value.trim();

    const response = await fetch('/leitura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nome, login, domain })
    });

    const result = await response.json();

    if (result.error) {
        console.error(result.error);
        liberarRetroceder();
        notificacao.innerHTML = "Você chegou ao último registro.";
        abrirModal(notificacao.innerHTML);
        return false;
    }

    if (result.id) {
        txtId.value = result.id;
    }

    if (result.nome) {
        txtNome.value = result.nome;
    }

    if (result.login) {
        txtLogin.value = result.login;
    }

    if (result.linhas) {
        linhas = result.linhas;
        notificacao.innerHTML = "Próximo registro posicionado com sucesso.";
        abrirModal(notificacao.innerHTML);
        liberarTodos();
    } else {
        liberarRetroceder();
    }
});

document.getElementById('btnUltimoRegistro').addEventListener('click', async (e) => {
    e.preventDefault();

    const nome = hdnPesquisaNome.value.trim();
    const login = hdnPesquisaLogin.value.trim();

    const response = await fetch('/ultimo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, domain })
    });

    const result = await response.json();

    if (result.error) {
        console.error(result.error);
        liberarRetroceder();
        notificacao.innerHTML = "Você chegou ao último registro.";
        abrirModal(notificacao.innerHTML);
        return false;
    }

    if (result.id) {
        txtId.value = result.id;
    }

    if (result.nome) {
        txtNome.value = result.nome;
    }

    if (result.login) {
        txtLogin.value = result.login;
    }

    notificacao.innerHTML = "Último registro posicionado com sucesso.";
        abrirModal(notificacao.innerHTML);
    
    linhas = result.linhas;
    if (linhas.length > 1) {
        liberarRetroceder();
    }
});

document.getElementById('btnLimpar').addEventListener('click', async (e) => {
    e.preventDefault();

    limparCampos();
    bloquearTodos();
    limpar = [];
});

function limparCampos() {

    txtId.value = "";
    txtNome.value = "";
    txtLogin.value = "";
    txtSenha.value = "";
    notificacao.innerHTML = "Digite um nome para pesquisar.";
    abrirModal(notificacao.innerHTML);

    txtNome.focus();
}

function liberarAvancar() {
    btnPrimeiroRegistro.disabled = true;
    btnRegistroAnterior.disabled = true;
    btnProximoRegistro.disabled = false;
    btnUltimoRegistro.disabled = false;
}

function liberarRetroceder() {
    btnPrimeiroRegistro.disabled = false;
    btnRegistroAnterior.disabled = false;
    btnProximoRegistro.disabled = true;
    btnUltimoRegistro.disabled = true;
}

function liberarTodos() {
    btnPrimeiroRegistro.disabled = false;
    btnRegistroAnterior.disabled = false;
    btnProximoRegistro.disabled = false;
    btnUltimoRegistro.disabled = false;
}

function bloquearTodos() {
    btnPrimeiroRegistro.disabled = true;
    btnRegistroAnterior.disabled = true;
    btnProximoRegistro.disabled = true;
    btnUltimoRegistro.disabled = true;
}

bloquearTodos();
