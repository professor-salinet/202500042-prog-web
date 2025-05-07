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

    const response = await fetch('/leitura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, tipo })
    });

    const result = await response.json();
    // console.log(result.message);

    txtId.value = result.id;
    txtNome.value = result.nome;
    txtLogin.value = result.login;

    linhas = result.linhas;

    let exibir = (linhas.length > 0) ? " Exibindo o primeiro." : " Nada a exibir.";

    notificacao.innerText = "Foi/foram encontrado(s) " + linhas.length + " resultado(s)." + exibir;
    alert("Foi/foram encontrado(s) " + linhas.length + " resultado(s)." + exibir);

    if (linhas.length > 1) {
        liberarAvancar();
    }

    // console.log("hdnPesquisaNome.value: ", hdnPesquisaNome.value);
    // console.log("hdnPesquisaLogin.value: ", hdnPesquisaLogin.value);
});

document.getElementById('btnPrimeiroRegistro').addEventListener('click', async (e) => {
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

    const response = await fetch('/leitura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, domain })
    });

    const result = await response.json();
    // console.log(result.message);

    if (result.error) {
        console.error(result.error);
        liberarAvancar();
        notificacao.innerText = "Você chegou ao primeiro registro.";
        alert("Você chegou ao primeiro registro.");
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

    notificacao.innerText = "Primeiro registro posicionado com sucesso";
    alert("Primeiro registro posicionado com sucesso");
    // console.log(result.linhas);
    
    linhas = result.linhas;
    if (linhas.length > 1) {
        liberarAvancar();
    }
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

    const notificacao = document.getElementById('notificacao');

    const response = await fetch('/anterior', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nome, login, domain })
    });

    const result = await response.json();
    // console.log(result.message);

    if (result.error) {
        console.error(result.error);
        liberarAvancar();
        notificacao.innerText = "Você chegou ao primeiro registro.";
        alert("Você chegou ao primeiro registro.");
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
        notificacao.innerText = "Registro anterior posicionado com sucesso.";
        alert("Registro anterior posicionado com sucesso.");
        liberarTodos();
    } else {
        liberarAvancar();
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

    const notificacao = document.getElementById('notificacao');

    const response = await fetch('/leitura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nome, login, domain })
    });

    const result = await response.json();

    if (result.error) {
        console.error(result.error);
        liberarRetroceder();
        notificacao.innerText = "Você chegou ao último registro.";
        alert("Você chegou ao último registro.");
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
        notificacao.innerText = "Próximo registro posicionado com sucesso.";
        alert("Próximo registro posicionado com sucesso.");
        liberarTodos();
    } else {
        liberarRetroceder();
    }
});

document.getElementById('btnUltimoRegistro').addEventListener('click', async (e) => {
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

    const tipo = 'ultimo';

    const response = await fetch('/ultimo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, domain })
    });

    const result = await response.json();
    // console.log(result.message);

    if (result.error) {
        console.error(result.error);
        liberarRetroceder();
        notificacao.innerText = "Você chegou ao último registro.";
        alert("Você chegou ao último registro.");
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

    notificacao.innerText = "Último registro posicionado com sucesso.";
    alert("Último registro posicionado com sucesso.");
    
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
    const txtId = document.getElementById('txtId');
    const txtNome = document.getElementById('txtNome');
    const txtLogin = document.getElementById('txtLogin');
    const txtSenha = document.getElementById('txtSenha');
    const notificacao = document.getElementById('notificacao');

    txtId.value = "";
    txtNome.value = "";
    txtLogin.value = "";
    txtSenha.value = "";
    notificacao.innerText = "Digite um nome para pesquisar.";
    alert("Digite um nome para pesquisar.");

    txtNome.focus();
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
