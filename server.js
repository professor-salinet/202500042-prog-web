// server.js
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // serve seu index.html
// app.use('/api/cadastro', require('./api/cadastro').app).listen(3000);
// app.use('/api/login', require('./api/login').app).listen(3000);
// app.use(express.static('index.html')); // serve index.html
// app.use(express.static('login.html')); // serve login.html
// app.use(express.static('cadastro.html')); // serve cadastro.html
// app.use(express.static('leitura.html')); // serve leitura.html
// app.use(express.static('atualizacao.html')); // serve atualizacao.html
// app.use(express.static('remocao.html')); // serve remocao.html

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
                await pool.query(
                    "insert into `salinet`.`tbl_login` (`nome`, `login`, `senha`) values (?, ?, ?);",
                    [nome, login, senha]
                );
                if (pool.insertId > 0) {
                    res.json({ message: 'Usuário cadastrado com sucesso!' });
                } else {
                    throw (`Não foi possível cadastrar o usuário! pool: ${pool}`);
                }
                break;
            case 'login':
                await pool.query(
                    "select * from `salinet`.`tbl_login` where `nome` = ? and `login` = ? and `senha` = ?;",
                    [nome, login, senha]
                );
                res.json({ message: 'Usuário logado com sucesso!' });
                break;
            default:
                throw ("Erro");
        }
    } catch (err) {
        // console.error(err);
        res.status(500).json({ message: `Erro: ${err} | pool: ${pool}` });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
