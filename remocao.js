var domain = window.location.hostname;

document.getElementById('frmRemocao').addEventListener('submit', async (e) => {
    e.preventDefault();
    const txtId = document.getElementById("txtId");
    const txtNome = document.getElementById("txtNome");
    const txtLogin = document.getElementById("txtLogin");
    const txtSenha = document.getElementById("txtSenha");
    var selId = document.getElementById("selId");
    selId = selId.options[selId.selectedIndex];

    const id = txtId.value;
    const nome = txtNome.value;
    const login = txtLogin.value;
    const senha = txtSenha.value;
    const notificacao = document.getElementById('notificacao');

    if (txtId.value.length == 0) {
        notificacao.innerHTML = "<b class=\"text-danger\">Não há registro selecionado a ser removido no banco de dados.</b>";
        return false;
    }

    const response = await fetch('/remover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, domain })
    });

    const result = await response.json();

    limparCampos();
    notificacao.innerHTML = result.message;
});

window.addEventListener('load', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('txtNome').value;
    const login = document.getElementById('txtLogin').value;
    const notificacao = document.getElementById('notificacao');
    const senha = document.getElementById('txtSenha').value;
    const id = document.getElementById('txtId').value;
    const selId = document.getElementById('selId');

    const response = await fetch('/atualizacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain })
    });

    const result = await response.json();

    let optTmp;
    for (let i = 0; i < result.rows.length; i++) {
        optTmp = document.createElement("option");
        optTmp.value = result.rows[i].id;
        optTmp.text = result.rows[i].nome;
        optTmp.dataset.login = result.rows[i].login;
        optTmp.dataset.senha = result.rows[i].senha;
        selId.add(optTmp);
    }
    notificacao.innerHTML = "Dados carregados com sucesso!";
    abrirModal(notificacao.innerHTML);
});

document.getElementById('selId').addEventListener('change', () => {
    let txtId = document.getElementById("txtId");
    let txtNome = document.getElementById("txtNome");
    let txtLogin = document.getElementById("txtLogin");
    let txtSenha = document.getElementById("txtSenha");
    let selId = document.getElementById("selId");

    selId = selId.options[selId.selectedIndex];
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

function limparCampos() {
    let txtId = document.getElementById("txtId");
    let txtNome = document.getElementById("txtNome");
    let txtLogin = document.getElementById("txtLogin");
    let txtSenha = document.getElementById("txtSenha");
    let selId = document.getElementById("selId");

    txtId.value = "";
    txtLogin.value = "";
    txtNome.value = "";
    txtSenha.value = "";

    selId.value = "0";
}