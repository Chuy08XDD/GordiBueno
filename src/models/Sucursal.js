// src/models/Sucursal.js
export class Sucursal {
    constructor(data) {
        this.numero_sucursal = data.numero_sucursal;
        this.nombre = data.nombre || '';
        this.direccion = data.direccion || '';
    }
//crear una instancia de la clase se usa para leer, recibir o convertir datos JSON, GENERALMENTE ES ESTATICO PORQUE CONSTRUYE UN OBJETO NUEVO
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

