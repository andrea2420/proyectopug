import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const port =3000;
const app=express();
import estudianteRouter from './routes/estudianteRouter';
import profesorRouter from './routes/profesorRoutes';
import cursoRouter from'./routes/cursosRouter';
import inscripcionRouter from'./routes/inscripcionRouter';

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('App universidad');
});
app.use('/estudiantes', estudianteRouter);
app.use('/profesores',profesorRouter );
app.use('/cursos',cursoRouter );
app.use('/inscripciones',inscripcionRouter);

export default app;