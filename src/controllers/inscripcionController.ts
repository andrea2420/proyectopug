import { Request, Response } from 'express';


  export const consultarInscripciones= async (req:Request, res:Response) =>{
        try {
          res.json('Consulta inscripciones');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const consultarxAlumno= async (req:Request, res:Response) =>{
        try {
          res.json('Consulta un prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const consultarxCurso= async (req:Request, res:Response) =>{
        try {
          res.json('inserta prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const inscribir= async (req:Request, res:Response) =>{
        try {
          res.json('modifica prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
    export const cancelarInscripcion= async (req:Request, res:Response) =>{
        try {
          res.json('elimina prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const calificar= async (req:Request, res:Response) =>{
      try {
        res.json('elimina prof');
      } catch (err: unknown) {
          if (err instanceof Error){
              res.status(500).send(err.message);
          }
      }
  }
