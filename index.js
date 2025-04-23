// document.getElementById('frmCadastro').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const nome = document.getElementById('txtNome').value;
//     const login = document.getElementById('txtLogin').value;
//     const senha = document.getElementById('txtSenha').value;
//     const tipo = 'cadastro';

//     const response = await fetch('/api/mysql', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ nome, login, senha, tipo })
//     });

//     const result = await response.json();
//     console.log(result.message);
// });

window.setInterval(() => {
    const date = new Date();

    var cumprimento = "";
    if (date.getHours() >= 0 && date.getHours() <= 11) {
        cumprimento = "Bom dia!";
    }

    if (date.getHours() >= 12 && date.getHours() <= 17) {
        cumprimento = "Boa tarde!";
    }

    if (date.getHours() >= 18 && date.getHours() <= 23) {
        cumprimento = "Boa noite!";
    }

    var dtAtual = "Hoje é " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    var hrAtual = "Agora são " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    document.getElementById("cumprimento").innerText = cumprimento;
    document.getElementById("data").innerText = dtAtual;
    document.getElementById("horario").innerText = hrAtual;
}, 1000);