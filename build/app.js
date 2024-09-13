"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const port = 3000;
const app = (0, express_1.default)();
const estudianteRouter_1 = __importDefault(require("./routes/estudianteRouter"));
const profesorRoutes_1 = __importDefault(require("./routes/profesorRoutes"));
const cursosRouter_1 = __importDefault(require("./routes/cursosRouter"));
const inscripcionRouter_1 = __importDefault(require("./routes/inscripcionRouter"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.get('/', (req, res) => {
    res.send('App universidad');
});
app.use('/estudiantes', estudianteRouter_1.default);
app.use('/profesores', profesorRoutes_1.default);
app.use('/cursos', cursosRouter_1.default);
app.use('/inscripciones', inscripcionRouter_1.default);
exports.default = app;
