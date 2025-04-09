// server.js
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'salinet'
});

app.post('/api/mysql', async (req, res) => {
    const { nome, login, senha, tipo } = req.body;
    try {
        switch (tipo) {
            case 'cadastro':
                var [rows, fields] = await pool.query(
                    "insert into `salinet`.`tbl_login` (`nome`, `login`, `senha`) values (?, ?, ?);",
                    [nome, login, senha]
                );
                if (rows.affectedRows > 0) {
                    res.json({ message: 'Usuário cadastrado com sucesso!' });
                } else {
                    throw ('Não foi possível cadastrar o usuário!');
                }
                break;
            case 'login':
                var [rows, fields] = await pool.query(
                    "select * from `salinet`.`tbl_login` where `nome` = ? and `login` = ? and `senha` = ?;",
                    [nome, login, senha]
                );
                if (rows.length == 1) {
                    res.json({ message: 'Usuário logado com sucesso' });
                } else {
                    throw ("Não foi possível logar o usuário!");
                }
                break;
            case 'leitura':
                var addNome = "";
                var addLogin = "";
                var addAnd = "";

                if (nome.trim().length > 0) {
                    addNome = " `nome` like '%" + nome + "%' ";
                }

                if (login.trim().length > 0) {
                    addLogin = " `login` like '%" + login + "%' ";
                }

                if (nome.trim().length > 0 && login.trim().length > 0) {
                    addAnd = " and ";
                }

                var strSql = "select * from `salinet`.`tbl_login` where" + 
                    addNome + addAnd + addLogin + ";";
                var [rows, fields] = await pool.query(strSql);
                if (rows.length > 0) {
                    res.json({ 
                        message: 'Nome ou login encontrado com sucesso!',
                        id: rows[0].id,
                        nome: rows[0].nome,
                        login: rows[0].login,
                        linhas: rows.length
                    });
                } else {
                    throw ("Não foi possível encontrar o nome ou login!");
                }
                break;
            default:
                throw ("Não foi possível identificar o tipo!");
        }
    } catch (err) {
        // console.error(err); // aqui não vai aparecer o erro no console, pois este arquivo não é processado pelo frontend, mas sim pelo backend (node server.js)
        res.status(500).json({ message: `Erro: ${err}` });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
