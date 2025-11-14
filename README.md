# 🏥 Sistema de Clínica Simi

Sistema web para la gestión de consultorios de Farmacia Simi. Proyecto educativo diseñado para que los practicantes aprendan desarrollo web moderno siguiendo buenas prácticas y arquitectura MVC.

## 📋 Descripción

Este proyecto es una aplicación web desarrollada para la gestión de sucursales y servicios de los consultorios Simi.

## 🎯 Objetivos del Proyecto

- **Educativo**: Proporcionar un entorno de aprendizaje práctico para desarrolladores en formación
- **Colaborativo**: Fomentar la colaboración y el trabajo en equipo
- **Profesional**: Aplicar buenas prácticas de desarrollo y arquitectura de software

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend/Database**: Supabase (PostgreSQL)
- **Arquitectura**: MVC (Model-View-Controller)
- **Estilos**: CSS personalizado con paleta de colores definida

## 📁 Estructura del Proyecto

```
simi/
├── public/                 # Archivos estáticos (imágenes, documentos)
├── src/
│   ├── controllers/        # Controladores (lógica de negocio)
│   ├── models/            # Modelos de datos
│   ├── services/          # Servicios (comunicación con API/BD)
│   ├── styles/            # Estilos CSS
│   ├── utils/             # Utilidades y helpers
│   └── views/             # Vistas HTML
│       ├── home/          # Vista principal
│       └── sucursales/    # Vista de sucursales
├── supabase/              # Configuración de Supabase
├── header.html            # Componente header reutilizable
├── footer.html            # Componente footer reutilizable
└── index.html             # Página principal
```

## 🚀 Inicio Rápido

### Prerrequisitos si gustas colaborar

- Un servidor web local (XAMPP, WAMP, o similar)
- Navegador web moderno
- Cuenta de Supabase (para la base de datos)

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/simi.git
cd simi
```

2. Configura Supabase:
   - Crea un proyecto en [Supabase](https://supabase.com)
   - Copia tu URL y anon key
   - Copia el archivo `supabase/config.example.js` como `supabase/config.js`
   - Actualiza `supabase/config.js` con tus credenciales de Supabase
   - ⚠️ **Importante**: El archivo `config.js` no se sube a Git (está en .gitignore)

3. Inicia tu servidor web local:
   - Si usas XAMPP: coloca el proyecto en `htdocs/`
   - Accede a `http://localhost/simi/index.html`

## 🎨 Paleta de Colores

El proyecto utiliza una paleta de colores consistente:

- `#16C1C8` - Azul turquesa (principal)
- `#49CCCC` - Azul cyan
- `#7CD7CF` - Azul claro
- `#AEE1D3` - Azul aqua
- `#E1ECD6` - Pálido (fondo)

## 📚 Funcionalidades

### Implementadas
- ✅ Página principal con carrusel de imágenes
- ✅ Sistema de selección de sucursales
- ✅ Integración con Supabase
- ✅ Arquitectura MVC

### En Desarrollo
- 🔄 sucursales
- 🔄 Gestión de pacientes
- 🔄 Gestión de medicos
- 🔄 Sistema de citas
- 🔄 aun esta en pleno desarollo practicamente todo el proyecto 

## 🤝 Contribuir

Este proyecto está abierto a colaboraciones. Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para conocer las guías de contribución

## 👥 Autores y Contribuidores

### Autores Principales
- **Larkybaby** - Desarrollo inicial
- **Chuy08XDD** - Desarrollo inicial
- **jesusmariade** - Desarrollo inicial

### Equipo de Desarrollo Simi
- **Equipo de Desarrollo Simi** - Coordinación y desarrollo

### 🤝 Contribuidores
Gracias a todos los que han contribuido a este proyecto. Ver [CONTRIBUTING.md](CONTRIBUTING.md) para unirse al equipo.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- A todos los practicantes que contribuyen al proyecto
- A la comunidad de desarrolladores que comparten conocimiento con sus colaboraciones futuras
- A Farmacia Simi por la oportunidad de desarrollar este sistema (mentira no sabe) 

## 📞 Contacto

Para preguntas o sugerencias:
- Email: consultorios@simi.com
- Teléfono: 45-45-98-45-45

---

**Nota**: Este es un proyecto educativo. Siéntete libre de aprender, experimentar y contribuir. 🚀

