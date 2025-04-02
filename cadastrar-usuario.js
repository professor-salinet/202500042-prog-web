import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'salinet'
}).promise();

async function cadastrarUsuario() {

    let txtNome = document.getElementById("txtNome");
    let txtLogin = document.getElementById("txtLogin");
    let txtSenha = document.getElementById("txtSenha");

    const result = await pool.query("insert into `salinet`.`tbl_login`(`nome`, `login`, `senha`) values ('" + txtNome.value + "', '" + txtLogin.value + "', '" + txtSenha.value + "');");

    if (result.insertId > 0) {
        console.log("Cadastro foi realizado com sucesso!");
    } else {
        return false;
    }
}
