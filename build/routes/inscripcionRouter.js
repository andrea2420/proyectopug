"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const inscripcionController_1 = require("../controllers/inscripcionController");
router.get('/', inscripcionController_1.consultarInscripciones);
router.get('/xAlumno/:id', inscripcionController_1.consultarxAlumno);
router.get('/xCurso/:id', inscripcionController_1.consultarxCurso);
router.post('/', inscripcionController_1.inscribir);
router.put('/', inscripcionController_1.calificar);
router.delete('/:estudiante_id/:curso_id', inscripcionController_1.cancelarInscripcion);
exports.default = router;
