"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToSeconds = dateToSeconds;
function dateToSeconds(input) {
    let date;
    if (input instanceof Date) {
        date = input;
    }
    else {
        date = new Date(input);
        if (isNaN(date.getTime())) {
            throw new Error("Data inválida");
        }
    }
    // getTime() retorna milissegundos → dividir por 1000 para segundos
    return Math.floor(date.getTime() / 1000);
}
