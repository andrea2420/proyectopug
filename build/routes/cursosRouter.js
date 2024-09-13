"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cursoController_1 = require("../controllers/cursoController");
router.get('/', cursoController_1.consultarTodos);
router.post('/', cursoController_1.insertar);
router.route('/:id')
    .get(cursoController_1.consultarUno)
    .put(cursoController_1.modificar)
    .delete(cursoController_1.eliminar);
exports.default = router;
