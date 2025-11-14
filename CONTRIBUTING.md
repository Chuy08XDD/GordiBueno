# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al Sistema de Clínica Simi! Este proyecto está diseñado para ser educativo y colaborativo. Tu participación es muy valiosa.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Estándares de Código](#estándares-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)

## 📜 Código de Conducta

Este proyecto sigue un código de conducta que esperamos que todos los colaboradores sigan:

- **Respeto**: Trata a todos con respeto y amabilidad son practicantes chiquitos
- **Aprendizaje**: Este es un proyecto educativo, todos estamos aprendiendo
- **Paciencia**: Sé paciente con los demás y contigo mismo
- **Colaboración**: Trabajamos juntos, no en competencia 

## 🚀 Cómo Contribuir

### Para Practicantes

1. **Fork el repositorio**
2. **Crea una rama** para tu feature (`git checkout -b feature/MiNuevaFuncionalidad`)
3. **Respeta la estructura** del proyecto (MVC)
4. **Commit tus cambios** (`git commit -m 'Agrega nueva funcionalidad'`)
5. **Push a la rama** (`git push origin feature/MiNuevaFuncionalidad`)
6. **Abre un Pull Request**

### Para Colaboradores Experimentados

- Revisa los Pull Requests de los practicantes
- Proporciona feedback constructivo nos ayudas un monton
- Ayuda a mantener la calidad del código
- Documenta nuevas funcionalidades

## 📁 Estructura del Proyecto

**IMPORTANTE**: Respeta la estructura MVC del proyecto.

### Estructura Correcta

```
src/
├── controllers/     # Lógica de negocio y control de flujo
├── models/          # Modelos de datos (clases/objetos)
├── services/        # Servicios (API, base de datos)
├── styles/          # Archivos CSS
├── utils/           # Funciones auxiliares
└── views/           # Vistas HTML
    └── [nombre]/    # Cada módulo en su carpeta
        └── [nombre].html
```

### ❌ NO Hacer

- ❌ Crear archivos en la raíz del proyecto (excepto index.html, header.html, footer.html)
- ❌ Mezclar lógica de negocio en las vistas
- ❌ Poner estilos inline en el HTML
- ❌ Crear servicios directamente en los controladores

### ✅ Sí Hacer

- ✅ Crear modelos en `src/models/`
- ✅ Crear controladores en `src/controllers/`
- ✅ Crear servicios en `src/services/`
- ✅ Crear vistas en `src/views/[modulo]/`
- ✅ Mantener estilos en `src/styles/`

## 📝 Estándares de Código

### JavaScript

- Usa **ES6+** (arrow functions, const/let, template literals)
- Nombres descriptivos en **camelCase** para variables y funciones
- Nombres en **PascalCase** para clases
- Comenta código complejo
- Usa `const` por defecto, `let` solo si necesitas reasignar

```javascript
// ✅ Bien
const obtenerSucursales = async () => {
    const { data, error } = await SucursalService.obtenerTodas();
    return { data, error };
};

// ❌ Mal
function getSucursales() {
    // código sin estructura
}
```

### HTML

- Usa indentación consistente (2 o 4 espacios)
- Atributos en comillas dobles
- Etiquetas semánticas (`<main>`, `<section>`, `<article>`)
- Comenta secciones importantes

### CSS

- Usa la **paleta de colores definida**
- Nombres de clases en **kebab-case** (`.mi-clase`)
- Organiza por componentes
- Comenta secciones grandes

```css
/* ✅ Bien */
.sucursal-card {
    background: #7CD7CF;
    padding: 30px;
}

/* ❌ Mal */
.card {
    background: blue; /* No usar colores fuera de la paleta */
}
```

## 🔄 Proceso de Pull Request

1. **Antes de crear un PR**:
   - Asegúrate de que tu código sigue los estándares
   - Prueba tu código localmente
   - Verifica que no rompes funcionalidades existentes

2. **Título del PR**:
   - Sé descriptivo: `feat: Agrega sistema de citas`
   - Usa prefijos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`

3. **Descripción del PR**:
   - Explica qué hace tu cambio
   - Menciona si es una nueva funcionalidad o corrección
   - Incluye capturas de pantalla si aplica

4. **Revisión**:
   - Los PRs serán revisados por el equipo
   - Puede haber sugerencias de mejora
   - No te desanimes con el feedback, es para aprender

## 🐛 Reportar Bugs

Si encuentras un bug:

1. Verifica que no haya un issue abierto ya
2. Crea un nuevo issue con:
   - **Título claro**: "Bug: [descripción breve]"
   - **Descripción**: Qué esperabas vs qué pasó
   - **Pasos para reproducir**
   - **Comportamiento esperado**
   - **Screenshots** si aplica

## 💡 Sugerir Mejoras

Las sugerencias son bienvenidas:

1. Abre un issue con el label `enhancement`
2. Describe la mejora propuesta
3. Explica por qué sería útil
4. Si puedes, propón una solución


## ❓ Preguntas

Si tienes dudas:
- Abre un issue con el label `question`
- Pregunta en los comentarios de los PRs
- Revisa la documentación existente

## 🎉 ¡Gracias!

Tu contribución hace que este proyecto sea mejor. Cada línea de código, cada bug reportado, cada sugerencia cuenta. ¡Sigue así! 🚀

---

**Recuerda**: Este es un proyecto educativo. No tengas miedo de cometer errores, todos estamos aprendiendo. Lo importante es intentar y mejorar. 💪

