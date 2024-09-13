import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Estudiante} from "./EstudianteModel";
import {Profesor} from "./ProfesorModel";

@Entity('cursos')
export class Curso{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @Column({type:'text'})
    descripcion:string;

    @ManyToOne(()=>Profesor)
    @JoinColumn({name:'profesor_id'})
    profesor:Profesor;

    @ManyToMany(()=>Estudiante)
    @JoinTable({
        name:'cursos_estudiantes',
        joinColumn:{name:'curso_id', referencedColumnName:'id'},
        inverseJoinColumn:{name:'estudiante_id', referencedColumnName:'id'}
    })
    estudiantes:Estudiante[];
}
