// en nuestro controlador basicamente verifica y retorna vale 

import { AuthService } from "../services/AuthService.js";

export class AuthController {
//iniciar sesion
static async iniciarSesion(email, password){
    try {
        const { usuario, error } = await AuthService.iniciarSesion(email, password);
        if(error || !usuario )
            {
                return { success: false , error};
            }
            //guardamos los datos  todos los que valla ingresando
            const usuarioData = usuario.toJSONSafe();
            localStorage.setItem('usuarioId', usuarioData.id)
            localStorage.setItem('tipoUsuario', usuarioData.tipo_usuario)
            localStorage.setItem('email', usuarioData.email)
            localStorage.setItem('idRelacionado', usuarioData.id_relacionado || '');
            localStorage.setItem('usuarioNombre', usuarioData.email.split('@')[0]);
            localStorage.setItem('sesionActiva', 'true');

return { success : true, usuario: usuarioData }
        }catch(error){
            return { success: false, error: { message: "Error al iniciar sesion", details: error } };
    }
    
}
//cerrar sesion 
static cerrarSesion(){
    //lo mismo para cerrarla pero remove los datos del localStorage
    localStorage.removeItem('usuarioId');
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('email');
    localStorage.removeItem('idRelacionado');
    localStorage.removeItem('usuarioNombre');
    localStorage.removeItem('sesionActiva');
    //una vez cerrada la sesion redirigimos al login verificar ruta 
    window.location.href = '/src/views/Login/login.html';//login.html esta en carpeta views/Login/login.html si creo es esa 
}
//verificar si hay alguna sesion activa 
static verificarSesion(){
    const sesionActiva = localStorage.getItem('sesionActiva');
    const tipoUsuario = localStorage.getItem('tipoUsuario');
    const usuarioId = localStorage.getItem('usuarioId');

    return sesionActiva === 'true' && tipoUsuario && usuarioId;
}
//obtener usuario en sesion 
static obtenerUsuarioEnSesion(){
    if(!this.verificarSesion()){
        return null;
    }


    return {
        id: localStorage.getItem('usuarioId'),
        email: localStorage.getItem('email'),
        tipo_usuario: localStorage.getItem('tipoUsuario'),
        id_relacionado: localStorage.getItem('idRelacionado'),
        nombre: localStorage.getItem('usuarioNombre')
    };
}
//verificamos tipo 
static verificarTipoUsuario(tipo){
    const tipoActual = localStorage.getItem('tipoUsuario');
    return tipoActual === tipo;
}
}