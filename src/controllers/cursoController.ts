import { Request, Response } from 'express';


  export const consultarTodos= async (req:Request, res:Response) =>{
        try {
          res.json('Consulta prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const consultarUno= async (req:Request, res:Response) =>{
        try {
          res.json('Consulta un prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const insertar= async (req:Request, res:Response) =>{
        try {
          res.json('inserta prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const modificar= async (req:Request, res:Response) =>{
        try {
          res.json('modifica prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
    export const eliminar= async (req:Request, res:Response) =>{
        try {
          res.json('elimina prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
