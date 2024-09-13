import express from 'express';
const router=express.Router();
import  { consultarTodos, consultarUno, eliminar, insertar, modificar } 
from '../controllers/cursoController';

router.get('/',consultarTodos);
router.post('/',insertar);

router.route('/:id')
    .get(consultarUno)
    .put(modificar)
    .delete(eliminar);

export default router;