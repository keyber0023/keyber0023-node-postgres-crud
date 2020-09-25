"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUser = void 0;
const database_1 = require("../database");
exports.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM portal.usuario_paciente;');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('SELECT * FROM portal.usuario_paciente WHERE id = $1;', [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo_id_paciente, paciente_id, username, password, created_by, email } = req.body;
    try {
        const response = yield database_1.pool.query('INSERT INTO portal.usuario_paciente (tipo_id_paciente, paciente_id, username, password, created_by, email) VALUES ($1, $2, $3, $4, $5, $6);', [tipo_id_paciente, paciente_id, username, password, created_by, email]);
        return res.status(200).json(req.body);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo_id_paciente, paciente_id, username, password, created_by, email } = req.body;
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('UPDATE portal.usuario_paciente SET email = $1, updated_by = $2 WHERE id = $3;', [email, 2, id]);
        return res.status(200).json(req.body);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('DELETE FROM portal.usuario_paciente WHERE id = $1;', [id]);
        return res.status(200).json('User ${id} deleted succefully');
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
