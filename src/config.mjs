import mysql from 'mysql2'

export const connection = mysql.createConnection({
    host     : '192.168.1.6',
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    port: 4040
}) 