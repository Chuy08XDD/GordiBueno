// src/services/SucursalService.js
import supabase from '../../supabase/supabaseClient.js';

export class SucursalService {
    static async obtenerTodas() {
        const { data, error } = await supabase
            .from('sucursal')
            .select('*')
            .order('numero_sucursal');
        
        if (error) {
            return { data: null, error };
        }
        
        return { data, error: null };
    }

    static async obtenerPorId(numero_sucursal) {
        const { data, error } = await supabase
            .from('sucursal')
            .select('*')
            .eq('numero_sucursal', numero_sucursal)
            .single();
        
        if (error) {
            return { data: null, error };
        }
        
        return { data, error: null };
    }
}

