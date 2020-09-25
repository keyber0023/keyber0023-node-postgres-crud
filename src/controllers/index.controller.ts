import {Request, Response} from 'express'
import {QueryResult} from 'pg'
import { pool } from '../database'

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('SELECT * FROM portal.usuario_paciente;');
        return res.status(200).json(response.rows);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');

    }
    
};


export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM portal.usuario_paciente WHERE id = $1;', [id]);
        return res.status(200).json(response.rows);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');

    }
    
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const {tipo_id_paciente, paciente_id, username, password, created_by, email} = req.body;
    try{
        const response: QueryResult = await pool.query('INSERT INTO portal.usuario_paciente (tipo_id_paciente, paciente_id, username, password, created_by, email) VALUES ($1, $2, $3, $4, $5, $6);', [tipo_id_paciente, paciente_id, username, password, created_by, email]);
        return res.status(200).json(req.body);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');

    }
    
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const {tipo_id_paciente, paciente_id, username, password, created_by, email} = req.body;
    try{
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('UPDATE portal.usuario_paciente SET email = $1, updated_by = $2 WHERE id = $3;', [email, 2, id]);
        return res.status(200).json(req.body);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');

    }
    
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('DELETE FROM portal.usuario_paciente WHERE id = $1;', [id]);
        return res.status(200).json('User ${id} deleted succefully');
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');

    }
    
};