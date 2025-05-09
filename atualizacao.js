var domain = window.location.hostname;
var minChars = 4;

document.getElementById('frmAtualizacao').addEventListener('submit', async (e) => {
    e.preventDefault();

    var selId = document.getElementById("selId");

    const txtId = document.getElementById("txtId");
    const txtNome = document.getElementById("txtNome");
    const txtLogin = document.getElementById("txtLogin");
    const txtSenha = document.getElementById("txtSenha");
    const txtConfirmarSenha = document.getElementById("txtConfirmarSenha");

    const txtNomeNotify = document.getElementById("txtNomeNotify");
    txtNomeNotify.classList.add("collapse");
    const txtLoginNotify = document.getElementById("txtLoginNotify");
    txtLoginNotify.classList.add("collapse");
    const txtSenhaNotify = document.getElementById("txtSenhaNotify");
    txtSenhaNotify.classList.add("collapse");
    const txtConfirmarSenhaNotify = document.getElementById("txtConfirmarSenhaNotify");
    txtConfirmarSenhaNotify.classList.add("collapse");

    const id = txtId.value.trim();
    const nome = txtNome.value.trim();
    const login = txtLogin.value.trim();
    const senha = txtSenha.value.trim();
    const confirmarSenha = txtConfirmarSenha.value.trim();

    const notificacao = document.getElementById('notificacao');

    if (nome.length == 0) {
        txtNomeNotify.innerHTML = "<b class=\"text-danger\">É necessário digitar um nome para continuar.</b>";
        txtNomeNotify.classList.remove("collapse");
        txtNome.focus();
        return false;
    } else if (nome.length < minChars) {
        notificacao.innerHTML = "<b class=\"text-danger\">É necessário digitar ao menos " + minChars + " caracteres/letras no nome para continuar.</b>";
        alert(notificacao.innerText);
        txtNome.focus();
        return false;
    }

    if (login.length == 0) {
        notificacao.innerHTML = "<b class=\"text-danger\">É necessário digitar um login para continuar.</b>";
        alert(notificacao.innerText);
        txtLogin.focus();
        return false;
    } else if (login.length < minChars) {
        notificacao.innerHTML = "<b class=\"text-danger\">É necessário digitar ao menos " + minChars + " caracteres/letras no login para continuar.</b>";
        alert(notificacao.innerText);
        txtLogin.focus();
        return false;
    }

    if (senha.length > 0 && senha.length < minChars) {
        notificacao.innerHTML = "<b class=\"text-danger\">É necessário digitar ao menos " + minChars + " caracteres/letras na senha para continuar.</b>";
        alert(notificacao.innerText);
        txtSenha.focus();
        return false;
    }

    if (confirmarSenha.length > 0 && confirmarSenha.length < minChars) {
        notificacao.innerHTML = "<b class=\"text-danger\">É necessário digitar ao menos " + minChars + " caracteres/letras na confirmação de senha para continuar.</b>";
        alert(notificacao.innerText);
        txtConfirmarSenha.focus();
        return false;
    }

    if (senha != confirmarSenha) {
        notificacao.innerHTML = "<b class=\"text-danger\">Ops! As senhas não conferem. Verifique a digitação, digite e tente novamente</b>";
        alert(notificacao.innerText);
        txtConfirmarSenha.focus();
        return false;
    }

    selId = selId.options[selId.selectedIndex];

    if (
        selId.text == txtNome.value && 
        selId.dataset.login == txtLogin.value && 
        selId.dataset.senha == txtSenha.value
    ) {
        notificacao.innerHTML = "<b class=\"text-danger\">Não há alteração a ser atualizada no banco de dados.</b>";
        return false;
    }

    const response = await fetch('/atualizar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nome, login, senha, domain })
    });

    const result = await response.json();

    selId.text = txtNome.value;
    notificacao.innerText = result.message;
    alert(result.message);
});

window.addEventListener('load', async (e) => {
    e.preventDefault();

    const notificacao = document.getElementById('notificacao');
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
    notificacao.innerText = "Dados carregados com sucesso!";
    alert("Dados carregados com sucesso!");
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
        // txtSenha.value = selId.dataset.senha;
    } else {
        txtId.value = "";
        txtNome.value = "";
        txtLogin.value = "";
        // txtSenha.value = "";
    }
});
