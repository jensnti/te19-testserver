const mysql = require('mysql2');
const Pool = require('pg-pool');

let pool;

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');
    const config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true,
    };
    pool = new Pool(config);
} else {
    pool = mysql.createPool({
        connectionLimit: 10,
        charset: 'utf8mb4',
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
    });
}

console.log(pool);

module.exports = pool;
