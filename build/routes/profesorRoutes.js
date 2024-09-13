"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const profesoresController_1 = require("../controllers/profesoresController");
router.get('/', profesoresController_1.consultarTodos);
router.post('/', profesoresController_1.insertar);
router.route('/:id')
    .get(profesoresController_1.consultarUno)
    .put(profesoresController_1.modificar)
    .delete(profesoresController_1.eliminar);
exports.default = router;
