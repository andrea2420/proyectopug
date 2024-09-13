import express, {Request, Response }  from "express";
import cors from 'cors';
import morgan from "morgan";
import path from "path";
import estudianteRouter from'./routes/estudianteRouter';
import profesorRouter from './routes/profesorRoutes';
import inscripcionRouter from './routes/inscripcionRouter';
import cursoRouter from './routes/cursosRouter';
//import methodOverride from 'method-override';

const app=express();

//habilitamos pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
//carpeta pblica
app.use(express.static('public'));



//app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());

app.get('/',(req:Request,res:Response)=>{
    console.log(__dirname);
    return res.render('index', {
        pagina: 'App Univerdsidad',
       // errores: errores.array()
    });
});
app.use('/estudiantes', estudianteRouter);
app.use('/profesores',profesorRouter );
app.use('/cursos',cursoRouter );
app.use('/inscripciones',inscripcionRouter);

export default app;


/*import express from 'express';
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

export default app;*/