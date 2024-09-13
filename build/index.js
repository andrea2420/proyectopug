"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
function main() {
    app_1.default.listen(6505, () => {
        console.log(`Servidor activo en puerto ${6505}`);
    });
}
main();
