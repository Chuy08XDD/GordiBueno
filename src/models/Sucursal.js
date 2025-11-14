// src/models/Sucursal.js
export class Sucursal {
    constructor(data) {
        this.numero_sucursal = data.numero_sucursal;
        this.nombre = data.nombre || '';
        this.direccion = data.direccion || '';
    }

    static fromJSON(data) {
        return new Sucursal(data);
    }

    toJSON() {
        return {
            numero_sucursal: this.numero_sucursal,
            nombre: this.nombre,
            direccion: this.direccion
        };
    }
}

