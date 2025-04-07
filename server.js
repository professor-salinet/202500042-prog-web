// server.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // serve seu index.html

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'salinet'
});

app.post('/api/cadastro', async (req, res) => {
    const { nome, login, senha } = req.body;
    try {
        await pool.query(
            "insert `salinet`.`tbl_login` (`nome`, `login`, `senha`) values (?, ?, ?);",
            [nome, login, senha]
        );
        res.json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
    }
});

// app.post('/api/login', async (req, res) => {
//     const { nome, login, senha } = req.body;
//     try {
//         await pool.query(
//             "select * from `salinet`.`tbl_login` where `nome` = ? and `login` = ? and `senha` = ?;",
//             [nome, login, senha]
//         );
//         res.json({ message: 'Login realizado com sucesso!' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Erro ao logar usuário.' });
//     }
// });

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
