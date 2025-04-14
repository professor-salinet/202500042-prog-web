var linhas = [];

document.getElementById('frmLeitura').addEventListener('submit', async (e) => {
    e.preventDefault();
    const txtId = document.getElementById('txtId');
    const txtNome = document.getElementById('txtNome');
    const txtLogin = document.getElementById('txtLogin');
    const txtSenha = document.getElementById('txtSenha');

    const hdnPesquisaNome = document.getElementById("hdnPesquisaNome");
    const hdnPesquisaLogin = document.getElementById("hdnPesquisaLogin");

    const nome = txtNome.value.trim();
    if (nome.length > 0) {
        hdnPesquisaNome.value = nome;
    }

    const login = txtLogin.value.trim();
    if (login.length > 0) {
        hdnPesquisaLogin.value = login;
    }

    const notificacao = document.getElementById('notificacao');

    if (nome.trim().length == 0 && login.trim().length == 0) {
        notificacao.innerHTML = "<b class=\"text-danger\">É necessário digitar um nome ou login para realizar a pesquisa.</b>"
        return false;
    }

    const senha = txtSenha.value;
    const tipo = 'leitura';

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, tipo })
    });

    const result = await response.json();
    console.log(result.message);

    txtId.value = result.id;
    txtNome.value = result.nome;
    txtLogin.value = result.login;

    linhas = result.linhas;

    let exibir = (parseInt(linhas) > 0) ? " Exibindo o primeiro." : " Nada a exibir.";
    notificacao.innerText = "Foi/foram encontrado(s) " + linhas + " resultado(s)." + exibir;
    console.log(linhas);

    liberarAvancar();

    console.log("hdnPesquisaNome.value: ", hdnPesquisaNome.value);
    console.log("hdnPesquisaLogin.value: ", hdnPesquisaLogin.value);
});

document.getElementById('btnPrimeiroRegistro').addEventListener('click', async (e) => {
    e.preventDefault();

    const txtId = document.getElementById('txtId');
    const txtNome = document.getElementById('txtNome');
    const txtLogin = document.getElementById('txtLogin');

    const hdnPesquisaNome = document.getElementById("hdnPesquisaNome");
    const hdnPesquisaLogin = document.getElementById("hdnPesquisaLogin");

    const id = txtId.value.trim();
    const nome = hdnPesquisaNome.value.trim();
    const login = hdnPesquisaLogin.value.trim();
    const senha = txtSenha.value.trim();

    const notificacao = document.getElementById('notificacao');

    const tipo = 'primeiro';

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, tipo })
    });

    const result = await response.json();
    console.log(result.message);

    txtId.value = result.id;
    txtNome.value = result.nome;
    txtLogin.value = result.login;

    let exibir = (parseInt(result.linhas) > 0) ? " Exibindo o primeiro." : " Nada a exibir.";
    notificacao.innerText = "Foi/foram encontrado(s) " + result.linhas + " resultado(s)." + exibir;
    console.log(result.linhas);

    liberarAvancar();
});

document.getElementById('btnRegistroAnterior').addEventListener('click', async (e) => {
    e.preventDefault();

    const txtId = document.getElementById('txtId');
    const txtNome = document.getElementById('txtNome');
    const txtLogin = document.getElementById('txtLogin');
    const txtSenha = document.getElementById('txtSenha');

    const hdnPesquisaNome = document.getElementById("hdnPesquisaNome");
    const hdnPesquisaLogin = document.getElementById("hdnPesquisaLogin");
    
    const id = txtId.value.trim();
    const nome = hdnPesquisaNome.value.trim();
    const login = hdnPesquisaLogin.value.trim();
    const senha = txtSenha.value.trim();

    const notificacao = document.getElementById('notificacao');

    const tipo = 'anterior';

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, tipo, id })
    });

    const result = await response.json();
    console.log(result.message);

    if (result.error) {
        console.error(result.error);
        return false;
    }

    txtId.value = result.id;
    txtNome.value = result.nome;
    txtLogin.value = result.login;

    let exibir = (parseInt(result.linhas) > 0) ? " Exibindo o primeiro." : " Nada a exibir.";
    notificacao.innerText = "Foi/foram encontrado(s) " + result.linhas + " resultado(s)." + exibir;
    console.log(result.linhas);

    liberarTodos();
    if (result.error) {
        liberarAvancar();
        notificacao.innerText = "Você chegou ao primeiro registro e não há outro registro anterior!";
    }

});

document.getElementById('btnProximoRegistro').addEventListener('click', async (e) => {
    e.preventDefault();

    const txtId = document.getElementById('txtId');
    const txtNome = document.getElementById('txtNome');
    const txtLogin = document.getElementById('txtLogin');
    const txtSenha = document.getElementById('txtSenha');

    const hdnPesquisaNome = document.getElementById("hdnPesquisaNome");
    const hdnPesquisaLogin = document.getElementById("hdnPesquisaLogin");
    
    const id = txtId.value.trim();
    const nome = hdnPesquisaNome.value.trim();
    const login = hdnPesquisaLogin.value.trim();
    const senha = txtSenha.value.trim();

    const notificacao = document.getElementById('notificacao');

    const tipo = 'proximo';

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, tipo, id })
    });

    const result = await response.json();
    console.log(result.message);

    if (result.error) {
        console.error(result.error);
        return false;
    }

    txtId.value = result.id;
    txtNome.value = result.nome;
    txtLogin.value = result.login;

    let exibir = (parseInt(result.linhas) > 0) ? " Exibindo o primeiro." : " Nada a exibir.";
    notificacao.innerText = "Foi/foram encontrado(s) " + result.linhas + " resultado(s)." + exibir;
    console.log(result.linhas);

    liberarTodos();

    console.log("hdnPesquisaNome.value: ", hdnPesquisaNome.value);
    console.log("hdnPesquisaLogin.value: ", hdnPesquisaLogin.value);
});

document.getElementById('btnUltimoRegistro').addEventListener('click', async (e) => {
    e.preventDefault();

});

document.getElementById('btnLimpar').addEventListener('click', async (e) => {
    e.preventDefault();

    limparCampos();
    bloquearTodos();
    limpar = [];
});

function limparCampos() {
    const txtId = document.getElementById('txtId');
    const txtNome = document.getElementById('txtNome');
    const txtLogin = document.getElementById('txtLogin');
    const txtSenha = document.getElementById('txtSenha');

    txtId.value = "";
    txtNome.value = "";
    txtLogin.value = "";
    txtSenha.value = "";
}

function liberarAvancar() {
    let btnPrimeiroRegistro = document.getElementById("btnPrimeiroRegistro");
    let btnRegistroAnterior = document.getElementById("btnRegistroAnterior");
    let btnProximoRegistro = document.getElementById("btnProximoRegistro");
    let btnUltimoRegistro = document.getElementById("btnUltimoRegistro");

    btnPrimeiroRegistro.disabled = true;
    btnRegistroAnterior.disabled = true;
    btnProximoRegistro.disabled = false;
    btnUltimoRegistro.disabled = false;
}

function liberarRetroceder() {
    let btnPrimeiroRegistro = document.getElementById("btnPrimeiroRegistro");
    let btnRegistroAnterior = document.getElementById("btnRegistroAnterior");
    let btnProximoRegistro = document.getElementById("btnProximoRegistro");
    let btnUltimoRegistro = document.getElementById("btnUltimoRegistro");

    btnPrimeiroRegistro.disabled = false;
    btnRegistroAnterior.disabled = false;
    btnProximoRegistro.disabled = true;
    btnUltimoRegistro.disabled = true;
}

function liberarTodos() {
    let btnPrimeiroRegistro = document.getElementById("btnPrimeiroRegistro");
    let btnRegistroAnterior = document.getElementById("btnRegistroAnterior");
    let btnProximoRegistro = document.getElementById("btnProximoRegistro");
    let btnUltimoRegistro = document.getElementById("btnUltimoRegistro");

    btnPrimeiroRegistro.disabled = false;
    btnRegistroAnterior.disabled = false;
    btnProximoRegistro.disabled = false;
    btnUltimoRegistro.disabled = false;
}

function bloquearTodos() {
    let btnPrimeiroRegistro = document.getElementById("btnPrimeiroRegistro");
    let btnRegistroAnterior = document.getElementById("btnRegistroAnterior");
    let btnProximoRegistro = document.getElementById("btnProximoRegistro");
    let btnUltimoRegistro = document.getElementById("btnUltimoRegistro");

    btnPrimeiroRegistro.disabled = true;
    btnRegistroAnterior.disabled = true;
    btnProximoRegistro.disabled = true;
    btnUltimoRegistro.disabled = true;
}

bloquearTodos();

// window.addEventListener('click', async (e) => {
//     e.preventDefault();

//     const hdnPesquisaNome = document.getElementById("hdnPesquisaNome");
//     const hdnPesquisaLogin = document.getElementById("hdnPesquisaLogin");

//     console.log("hdnPesquisaNome.value: ", hdnPesquisaNome.value);
//     console.log("hdnPesquisaLogin.value: ", hdnPesquisaLogin.value);
// });
