"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const estudianteController_1 = require("../controllers/estudianteController");
router.get('/', estudianteController_1.consultarTodos);
router.post('/', estudianteController_1.insertar);
router.route('/:id')
    .get(estudianteController_1.consultarUno)
    .put(estudianteController_1.modificar)
    .delete(estudianteController_1.eliminar);
exports.default = router;
