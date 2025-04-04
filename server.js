// server.js
import express from 'express';
import mysql from 'mysql2/promise';
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

app.post('/api/usuarios', async (req, res) => {
  const { nome, login, senha } = req.body;

  try {
    await pool.query(
      "INSERT INTO tbl_login (nome, login, senha) VALUES (?, ?, ?)",
      [nome, login, senha]
    );
    res.json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
