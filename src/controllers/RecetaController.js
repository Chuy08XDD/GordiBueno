// src/controllers/RecetaController.js
import { RecetaService } from '../services/RecetaServices.js';
import { MedicamentoService } from '../services/MedicamentoService.js';

export class RecetaController {

    // Crear receta desde cita
    static async crearRecetaDesdeCita(idCita) {
        try {
            const { data, error } = await RecetaService.crearReceta(idCita);
            if (error) return { receta: null, error };
            return { receta: data, error: null };
        } catch (error) {
            return { receta: null, error };
        }
    }

    //  AGREGAR medicamento a una receta
    static async agregarMedicamentoAReceta(id_receta, data) {
        try {
            const { data: added, error } = await RecetaService.agregarMedicamentoAReceta(
                id_receta,
                data.id_medicamento,
                data.cantidad,
                data.dosis,
                false // comprado siempre inicia en false
            );

            if (error) return { success: false, error };
            return { success: true, data: added };
        } catch (error) {
            return { success: false, error };
        }
    }

    // Actualizar medicamento de receta
    static async actualizarMedicamentoReceta(idReceta, idMedicamentoOld, data) {
        try {
            const { data: updated, error } = await RecetaService.actualizarMedicamentoReceta(
                idReceta,
                idMedicamentoOld,
                data.id_medicamento,
                data.cantidad,
                data.dosis
            );

            if (error) return { success: false, error };
            return { success: true, data: updated };

        } catch (error) {
            return { success: false, error };
        }
    }

    // Eliminar medicamento
    static async eliminarMedicamentoReceta(id_receta, id_medicamento) {
        try {
            const { error } = await RecetaService.eliminarMedicamentoReceta(id_receta, id_medicamento);
            if (error) return { success: false, error };
            return { success: true };
        } catch (error) {
            return { success: false, error };
        }
    }

    // Obtener receta por cita
    static async obtenerRecetaporCita(id_cita) {
        try {
            const { data, error } = await RecetaService.obtenerRecetaporCita(id_cita);
            if (error) return { receta: null, error };
            return { receta: data, error: null };
        } catch (error) {
            return { receta: null, error };
        }
    }

    // Cargar medicamentos
    static async cargarMedicamentos() {
        try {
            const { data, error } = await MedicamentoService.obtenerTodos();
            if (error) return { medicamentos: [], error };
            return { medicamentos: data, error: null };
        } catch (error) {
            return { medicamentos: [], error };
        }
    }
    //parte para obtener receta a traves de la id de la cita 
   //cargar receta de cita 
   static async obtenerRecetaporId(id_cita){
     try{ 
        const{data, error} = await RecetaService.obtenerRecetaporId(id_cita) 
        if(error){ 
            return{receta:null, error} 
        } 
        return{receta:data, error:null} 
    } 
    catch(error){ return{receta:null, error} 
} 
}
}
