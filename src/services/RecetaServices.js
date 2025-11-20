// src/services/RecetaService.js
import supabase from '../../supabase/supabaseClient.js';
export class RecetaService {
    // Crear una nueva receta asociada a una cita ahora vamos a crear el controlador y nuestro modelo 
    static async crearReceta(idCita) {
        try {
            const { data, error } = await supabase
                .from('receta')
                .insert({
                    id_cita: idCita,
                    fecha_expedicion: new Date().toISOString().split('T')[0],
                    surtida: false
                })
                .select()
                .single();
            
            if (error) {
                return { data: null, error };
            }
            
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }
    // Agregar un medicamento a una receta noooooo guardaaa las recetaaas aaaaaaaaaaaa
static async agregarMedicamentoAReceta(idReceta, idMedicamento, cantidad, dosis) {
    try {
        const { data, error } = await supabase
            .from('receta_medicamento')
            .insert({
                id_receta: idReceta,
                id_medicamento: idMedicamento,
                cantidad: cantidad,
                dosis: dosis || null
            })
            .select()
            .single();
        
        if (error) {
            return { data: null, error };
        }
        
        return { data, error: null };
    } catch (error) {
        return { data: null, error };
    }
}
}