const mysql = require('mysql2');
const Pool = require('pg-pool');

let pool;

const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });
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

console.log(pool)

module.exports = pool;
