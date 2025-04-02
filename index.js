import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'salinet'
}).promise();

const result = await pool.query("insert into `salinet`.`tbl_login`(`nome`, `login`, `senha`) values ('teste', 'teste@teste', 'mudar123');");
console.log(result); 
