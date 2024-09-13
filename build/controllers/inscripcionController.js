"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calificar = exports.cancelarInscripcion = exports.inscribir = exports.consultarxCurso = exports.consultarxAlumno = exports.consultarInscripciones = void 0;
const consultarInscripciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('Consulta inscripciones');
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        }
    }
});
exports.consultarInscripciones = consultarInscripciones;
const consultarxAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('Consulta un prof');
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        }
    }
});
exports.consultarxAlumno = consultarxAlumno;
const consultarxCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('inserta prof');
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        }
    }
});
exports.consultarxCurso = consultarxCurso;
const inscribir = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('modifica prof');
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        }
    }
});
exports.inscribir = inscribir;
const cancelarInscripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('elimina prof');
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        }
    }
});
exports.cancelarInscripcion = cancelarInscripcion;
const calificar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('elimina prof');
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        }
    }
});
exports.calificar = calificar;
