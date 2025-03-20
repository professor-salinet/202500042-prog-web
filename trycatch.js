// const nome = "Rodrigo";

// try {
//     nome = "Salinet";
// } catch (err) {
//     console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro: " + err);
// }

// console.log("Teste");

// nome = "Rodrigo";

// console.log("Teste2");

function fazerLogin() {
    let usuario = document.getElementById("txtLogin");
    let senha = document.getElementById("txtSenha");
    try {
        if (usuario.value !== "usuario123") {
            usuario.focus();
            throw new Error("Erro: Usuário inválido.");
        }
        if (senha.value !== "senha123") {
            senha.focus();
            throw new Error("Erro: Senha incorreta.");
        }
        console.log("Login realizado com sucesso.");
    } catch (erro) {
        console.error(erro.message);
    } finally {
        console.log("Aqui está o finally...");
    }
}
