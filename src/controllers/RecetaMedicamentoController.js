//src/controllers/RecetaMedicamentoController.js
import { RecetaMedicamentoService } from '../services/RecetaMedicamentoService.js';

export class RecetaMedicamentoController {

    static async obtenerRecetaMedicamentoporid(id_receta) {
        try {
            const { data, error } = await RecetaMedicamentoService.obtenerRecetaMedicamentoporid(id_receta);

            if (error) return { RecetaMedicamento: null, error };
            return { RecetaMedicamento: data, error: null };

        } catch (error) {
            return { RecetaMedicamento: null, error };
        }
    }
    static async marcarComoComprado(id_receta, id_medicamento) {
        try {
            const { data, error } = await RecetaMedicamentoService.marcarComoComprado(id_receta, id_medicamento);

            if (error) return { success: false, error };

            return { success: true, data, error: null };
            
        } catch (err) {
            return { success: false, error: err };
        }
    }

}
