# 🚀 Guía Rápida: Subir Proyecto a Git

## 📋 Pasos para Subir tu Proyecto

### 1. Inicializar Git (si aún no lo has hecho)

```bash
git init
```

### 2. Agregar todos los archivos

```bash
git add .
```

### 3. Hacer tu primer commit

```bash
git commit -m "feat: Proyecto inicial - Sistema de Clínica Simi"
```

### 4. Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Click en "New repository"
3. Nombre: `simi` o `sistema-clinica-simi`
4. Descripción: "Sistema web para gestión de consultorios Simi - Proyecto educativo"
5. **NO** marques "Initialize with README" (ya tienes uno)
6. Click en "Create repository"

### 5. Conectar con GitHub

```bash
# Reemplaza 'tu-usuario' con tu usuario de GitHub
git remote add origin https://github.com/tu-usuario/simi.git
```

### 6. Subir tu código

```bash
git branch -M main
git push -u origin main
```

## 🔐 Nota de Seguridad

⚠️ **IMPORTANTE**: Tu archivo `supabase/supabaseClient.js` contiene credenciales. 

La **anon key** de Supabase está diseñada para ser pública (es segura de exponer), pero si prefieres mayor seguridad:

1. Crea un archivo `.env` en la carpeta `supabase/`
2. Mueve las credenciales ahí
3. El `.gitignore` ya está configurado para ignorarlo

## 📝 Comandos Útiles

### Ver estado de archivos
```bash
git status
```

### Ver qué archivos se van a subir
```bash
git status --short
```

### Deshacer cambios en un archivo
```bash
git restore nombre-archivo.js
```

### Ver historial de commits
```bash
git log
```

## 🎯 Siguientes Pasos

Una vez subido:

1. ✅ Invita a tus colaboradores (Larkybaby, Chuy08XDD, jesusmariade)
2. ✅ Configura las ramas de protección (opcional)
3. ✅ Crea issues para tareas pendientes
4. ✅ Configura GitHub Pages si quieres un demo en vivo

## 🤝 Invitar Colaboradores

1. Ve a tu repositorio en GitHub
2. Click en "Settings" → "Collaborators"
3. Agrega los usuarios de GitHub de tus colaboradores
4. Ellos recibirán una invitación

## 📚 Recursos

- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Docs](https://docs.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**¡Listo para subir!** 🚀

