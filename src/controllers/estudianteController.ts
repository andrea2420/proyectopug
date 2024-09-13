import { Request, Response } from 'express';
import { AppDataSource } from '../db/coenxion';
import {Estudiante} from '../models/EstudianteModel'

  const estudianteRepository=AppDataSource.getRepository(Estudiante); 

  export const consultarTodos= async (req:Request, res:Response) =>{
        try {
          const estudiantes=await estudianteRepository.find();
          res.json(estudiantes);
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const consultarUno= async (req:Request, res:Response) =>{
        try {
            const estudiante=await estudianteRepository.findOneBy({id: parseInt(req.params.id)});
            res.json(estudiante);
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const insertar= async (req:Request, res:Response) =>{
        try {
          const estudiante=estudianteRepository.create(req.body);
          const result=await estudianteRepository.save(estudiante);
          res.json(result);
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const modificar= async (req:Request, res:Response) =>{
        try {
            const estudiante=await estudianteRepository.findOneBy({id: parseInt(req.params.id)});
            if(!estudiante)
                return res.status(400).json({mens:"Estudiante no encontrado"});
            estudianteRepository.merge(estudiante,req.body);
            const result=await estudianteRepository.save(estudiante);
            res.json(result);
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
    export const eliminar= async (req:Request, res:Response) =>{
        try {
           const result= await estudianteRepository.delete(req.params.id);
           res.json(result);
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
