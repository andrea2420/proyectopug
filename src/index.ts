import app from "./app"
import {intializeDatabase} from './db/coenxion'
import * as dotenv from 'dotenv';
dotenv.config();
const port=parseInt(process.env.PORT || '6505',10);
const host=process.env.HOST || '0.0.0.0';

async function main(){
    try{
        await intializeDatabase();
        console.log('Base de datos conectada');

        app.listen(port,host, ()=>{
            console.log(`Servidor activo en puerto ${port}`);
        })
    }
    catch(err:unknown){
         if(err instanceof Error){
            console.log('Error al conectar la BD ',err.message);
         }
    }
    

}

main();