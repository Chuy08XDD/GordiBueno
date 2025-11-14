// src/controllers/SucursalController.js
import { SucursalService } from '../services/SucursalService.js';
import { Sucursal } from '../models/Sucursal.js';

export class SucursalController {
    static async cargarSucursales() {
        try {
            const { data, error } = await SucursalService.obtenerTodas();
            
            if (error) {
                console.error('Error al cargar sucursales:', error);
                return { sucursales: [], error };
            }
            
            if (!data || data.length === 0) {
                return { sucursales: [], error: null };
            }
            
            const sucursales = data.map(sucursal => Sucursal.fromJSON(sucursal));
            return { sucursales, error: null };
        } catch (error) {
            console.error('Error:', error);
            return { sucursales: [], error };
        }
    }

    static renderizarSucursales(sucursales, container) {
        if (!sucursales || sucursales.length === 0) {
            container.innerHTML = '<p>No hay sucursales disponibles</p>';
            return;
        }

        container.innerHTML = sucursales.map(sucursal => `
            <div class="sucursal-card" data-sucursal-id="${sucursal.numero_sucursal}">
                <p class="sucursal-id">Sucursal ${sucursal.numero_sucursal}</p>
                <p class="sucursal-nombre">${sucursal.nombre || ''}</p>
                <p class="sucursal-direccion">${sucursal.direccion || ''}</p>
            </div>
        `).join('');

        // Agregar evento click a cada tarjeta
        document.querySelectorAll('.sucursal-card').forEach(card => {
            card.addEventListener('click', function() {
                const sucursalId = this.getAttribute('data-sucursal-id');
                SucursalController.seleccionarSucursal(sucursalId);
            });
        });
    }

    static seleccionarSucursal(sucursalId) {
        localStorage.setItem('sucursal_seleccionada', sucursalId);
        console.log('Sucursal seleccionada:', sucursalId);
        // Aquí puedes agregar más lógica, como redirigir a otra página
    }

    static async inicializar() {
        const container = document.getElementById('sucursales-container');
        if (!container) return;

        const { sucursales, error } = await SucursalController.cargarSucursales();
        
        if (error) {
            container.innerHTML = '<p>Error al cargar las sucursales</p>';
            return;
        }

        SucursalController.renderizarSucursales(sucursales, container);
    }
}

