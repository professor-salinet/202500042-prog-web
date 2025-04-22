document.getElementById('frmLogin').addEventListener('submit', async (e) => {
    e.preventDefault();
    const txtLogin = document.getElementById('txtLogin');
    const txtSenha = document.getElementById('txtSenha');
    const notificacao = document.getElementById('notificacao');

    const nome = "";
    const login = txtLogin.value.trim();
    const senha = txtSenha.value.trim();
    const tipo = 'login';

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha, tipo })
    });

    const result = await response.json();
    console.log(result.message);

    if (result.error) {
        notificacao.innerText = result.error;
        return false;
    } else {
        notificacao.innerText = result.message;
        localStorage.setItem('usuario_logado', login);
        window.setTimeout(() => {
            window.open('./index.html', '_self');
        }, 5000);
    }
});