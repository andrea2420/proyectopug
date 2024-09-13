import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Curso} from "./CursoModel";
@Entity('profesores')
export class Profesor{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    dni:string;
    @Column()
    nombre:string;
    @Column()
    apellido:string;
    @Column()
    email:string;
    @Column()
    profesion:string;
    @Column()
    telefono:string;
    @CreateDateColumn()
    createAt:Date;
    @UpdateDateColumn()
    updateAt:Date;

    @OneToMany(()=>Curso,(curso)=>curso.profesor)
    cursos:Curso[];
}