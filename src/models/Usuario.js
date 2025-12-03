//sera el modelo de usuario que va a hacer sera quien reciba los datos de supabase 
//vamos a crear nuetro modelo voy a irlo comentando para explicarlo (alo:oki)

export class Usuario { //exportamos la clase de usuario para poder usarla en los otros archivos 
    constructor(data) { //El contrsuctor recibe un objeto que es data que sera lo que traera toda la informacion de el usuario 
        this.id = data.id;// es el id del usuario 
        this.email = data.email; //el email del usuario
        this.password_hash = data.password_hash; //la contrasena del usuario
        this.tipo_usuario = data.tipo_usuario; //el tipo de usuario que es (admin, medico, recepcionista, etc)
        this.id_relacionado = data.id_relacionado; //el id relacionado al usuario (por ejemplo, id del medico si es un usuario medico)
        this.activo = data.activo ?? true ; //esta el usuario activo?
        this.created_at = data.created_at; //fecha en la que fue creado el usuario
        this.updated_at = data.updated_at; //fecha en la que fue actualizado el usuario
    } //bien perfecto, si ya son todos nuestors campos 

    
    toJSONSafe(){//este metodo asegura devolver solo los datos seguros del usuario  se usa cuando se quiere guardar, enviar o serializar un objeto 
        return{
            id: this.id,
            email: this.email,
            tipo_usuario: this.tipo_usuario, 
            id_relacionado: this.id_relacionado,
            activo: this.activo,
            created_at: this.created_at,
            updated_at: this.updated_at,
            //no devolvemos el password hash por seguridad alo (oka)
        };

    }
    
} //ahora vamos a instalar esto bueno voy,  npm install bcryptjs  investiguen para que es 
 