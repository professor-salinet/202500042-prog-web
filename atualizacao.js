document.getElementById('frmAtualizacao').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('txtNome').value;
    const login = document.getElementById('txtLogin').value;
    const notificacao = document.getElementById('notificacao');

    if (nome.trim().length == 0 && login.trim().length == 0) {
        notificacao.innerHTML = "<b class=\"text-danger\">É necessário digitar um nome ou login para realizar a pesquisa.</b>"
        return false;
    }

    const senha = document.getElementById('txtSenha').value;
    const tipo = 'leitura';

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, tipo })
    });

    const result = await response.json();
    console.log(result.message);
    // console.log(result.id);
    // console.log(result.nome);
    // console.log(result.login);
    const txtId = document.getElementById('txtId');
    const txtNome = document.getElementById('txtNome');
    const txtLogin = document.getElementById('txtLogin');

    txtId.value = result.id;
    txtNome.value = result.nome;
    txtLogin.value = result.login;
    let exibir = (parseInt(result.linhas) > 0) ? " Exibindo o primeiro." : " Nada a exibir.";
    notificacao.innerText = "Foi/foram encontrado(s) " + result.linhas + " resultado(s)." + exibir;
    console.log(result.linhas);
});

window.addEventListener('load', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('txtNome').value;
    const login = document.getElementById('txtLogin').value;
    const notificacao = document.getElementById('notificacao');
    const senha = document.getElementById('txtSenha').value;
    const id = document.getElementById('txtId').value;
    const selId = document.getElementById('selId');
    const tipo = 'atualizacao';

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, tipo, id })
    });

    const result = await response.json();
    // console.log(result.rows.length);
    let optTmp;
    for (let i = 0; i < result.rows.length; i++) {
        // console.log(result.rows[i].id);
        optTmp = document.createElement("option");
        optTmp.value = result.rows[i].id;
        optTmp.text = result.rows[i].nome;
        optTmp.dataset.login = result.rows[i].login;
        optTmp.dataset.senha = result.rows[i].senha;
        selId.add(optTmp);
    }
});

document.getElementById('selId').addEventListener('change', () => {
    let txtId = document.getElementById("txtId");
    let txtNome = document.getElementById("txtNome");
    let txtLogin = document.getElementById("txtLogin");
    let txtSenha = document.getElementById("txtSenha");
    let selId = document.getElementById("selId");

    selId = selId.options[selId.selectedIndex];
    // console.log(selId);
    if (selId.dataset.login) {
        txtId.value = selId.value;
        txtNome.value = selId.text;
        txtLogin.value = selId.dataset.login;
        txtSenha.value = selId.dataset.senha;
    } else {
        txtId.value = "";
        txtNome.value = "";
        txtLogin.value = "";
        txtSenha.value = "";
    }
});
