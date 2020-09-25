import { Pool } from 'pg';
export const pool = new Pool({
    user: 'user',
    host: 'localhost',
    password: 'password',
    database: 'mydb',
    port: 5432
});