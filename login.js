var domain = window.location.hostname;

document.getElementById('frmLogin').addEventListener('submit', async (e) => {
    e.preventDefault();
    const txtLogin = document.getElementById('txtLogin');
    const txtSenha = document.getElementById('txtSenha');
    const notificacao = document.getElementById('notificacao');

    const login = txtLogin.value.trim();
    const senha = txtSenha.value.trim();

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

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, senha, domain })
    });

    const result = await response.json();

    if (result.error) {
        notificacao.innerHTML = result.error;
        abrirModal(notificacao.innerHTML);
        return false;
    } else {
        notificacao.innerHTML = result.message;
        abrirModal(notificacao.innerHTML);
        localStorage.setItem('usuario_logado', result.id);
        window.setTimeout(() => {
            window.open('./index.html', '_self');
        }, 5000);
    }
});