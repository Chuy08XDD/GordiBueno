//scr/Models/Paciente.js
export class Paciente {
    constructor(data) {
        this.curp = data.curp;
        this.ine =data.ine;
        this.nombre_completo = data.nombre_completo;
        this.direccion = data.direccion;
        this.edad = data.edad;
        this.peso = data.peso;
        this.estatura = data.estatura;
        this.descripcion_deestado = data.descripcion_deestado;
    }

    static fromJSON(data) {
        return new Paciente(data);
    }

    toJSON() {
        return {
            curp: this.curp,
            ine: this.ine,
            nombre_completo: this.nombre_completo,
            direccion: this.direccion,
            edad: this.edad,
            peso: this.peso,
            estatura: this.estatura,
            descripcion_deestado: this.descripcion_deestado
        };
    }
}