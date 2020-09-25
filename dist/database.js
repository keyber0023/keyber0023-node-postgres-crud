"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'admindb',
    host: '192.168.1.12',
    password: '*ecCIVE2000*',
    database: 'SIIS_TEST_1',
    port: 5432
});
