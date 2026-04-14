# 📚 Guía para Desplegar la Interfaz Web del Agente 'Pastor' en EasyPanel

> **Instrucciones paso a paso para desplegar la interfaz web en EasyPanel.**

---

## 📌 🎯 ¿POR QUÉ DESPLEGAR EN EASYPANEL?

EasyPanel es una plataforma **sencilla, profesional y gratuita** para desplegar aplicaciones web estáticas. Si GitHub Pages no funciona correctamente, EasyPanel es la mejor alternativa.

---

## 📌 📁 REQUISITOS PREVIOS

✅ **📌 Cuenta en EasyPanel:**
   - Regístrate en [https://easypanel.io](https://easypanel.io) si no tienes una cuenta.

✅ **📌 Repositorio en GitHub:**
   - El repositorio `pastor-web` debe estar subido a GitHub.
   - **🔗 Enlace al repositorio:** [https://github.com/SuperAgenteDeIA/pastor-web](https://github.com/SuperAgenteDeIA/pastor-web)

✅ **📌 Archivos en el repositorio:**
   - `index.html`
   - `styles.css`
   - `script.js`
   - `history.json`
   - `README.md`
   - Carpeta `assets/` (opcional, si hay imágenes o iconos).

---

## 📌 🚀 PASOS PARA DESPLEGAR EN EASYPANEL

### **🔹 Paso 1: Iniciar sesión en EasyPanel**
1. **📁 Abre tu navegador** y ve a [https://easypanel.io](https://easypanel.io).
2. **🔐 Inicia sesión** con tu cuenta de EasyPanel.

---

### **🔹 Paso 2: Crear una nueva aplicación**
1. **📁 En el panel de control de EasyPanel, haz clic en "Applications" (Aplicaciones).**
2. **📌 Haz clic en "New Application" (Nueva Aplicación).**

---

### **🔹 Paso 3: Configurar la aplicación**
1. **📌 Selecciona "GitHub" como fuente.**
   - EasyPanel te pedirá que autorices el acceso a tu cuenta de GitHub.
   - **🔗 Autoriza EasyPanel** para acceder al repositorio `pastor-web`.

2. **📌 Configura los detalles de la aplicación:**
   - **📛 Nombre de la aplicación:** `pastor-web`
   - **📌 Tipo de aplicación:** Selecciona **"Static App"** (Aplicación Estática).
   - **📌 Rama (Branch):** `master` o `main` (elige la que uses en tu repositorio).
   - **📌 Carpeta raíz (Root Folder):** Deja en blanco o escribe `/` si los archivos están en la raíz del repositorio.

---

### **🔹 Paso 4: Configurar variables de entorno (opcional)**
Si tu aplicación necesita variables de entorno (por ejemplo, para conectar con el agente 'Pastor' real), sigue estos pasos:

1. **📌 En la configuración de la aplicación, ve a la pestaña "Environment Variables" (Variables de Entorno).**
2. **📝 Añade las variables necesarias:**
   - Ejemplo:
     ```
     API_URL=https://api-pastor.tudominio.com
     ```

---

### **🔹 Paso 5: Desplegar la aplicación**
1. **📌 Haz clic en "Deploy" (Desplegar).**
2. **⏳ Espera unos minutos** mientras EasyPanel clona el repositorio y despliega la aplicación.

---

### **🔹 Paso 6: Obtener la URL de la aplicación**
1. **📌 Una vez desplegada, EasyPanel te mostrará la URL de la aplicación.**
   - Ejemplo: `https://pastor-web.tudominio.easypanel.host`
2. **🌐 Copia la URL** y ábrela en tu navegador para probar la interfaz.

---

## 📌 💡 CONSEJOS PARA EL DESPLIEGUE

### **🔹 Verificar que los archivos estén en el repositorio**
Antes de desplegar, asegúrate de que todos los archivos necesarios estén en el repositorio:
```
pastor-web/
├── index.html
├── styles.css
├── script.js
├── history.json
└── README.md
```

### **🔹 Configurar GitHub Pages (alternativa)**
Si prefieres usar GitHub Pages en lugar de EasyPanel, sigue estos pasos:

1. **📁 Ve a la pestaña "Settings" del repositorio en GitHub.**
2. **🔧 Selecciona "Pages" en el menú lateral.**
3. **📌 En "Branch", elige `main` o `master`.**
4. **📌 En "Folder", selecciona `/ (root)` o `/docs` si usas esa carpeta.**
5. **🚀 Haz clic en "Save".**
6. **⏳ Espera 1-2 minutos** a que GitHub Pages genere la URL.
7. **🌐 La URL de GitHub Pages será:**
   ```
   https://<tu-usuario>.github.io/pastor-web/
   ```

### **🔹 Solucionar problemas comunes**

#### **📌 Problema 1: La aplicación no se despliega**
- **🔍 Causa:** El repositorio no tiene los archivos necesarios.
- **📌 Solución:** Verifica que todos los archivos estén subidos a GitHub.

#### **📌 Problema 2: GitHub Pages muestra error 404**
- **🔍 Causa:** La rama o carpeta no está configurada correctamente.
- **📌 Solución:** Revisa la configuración en "Settings > Pages" y asegúrate de que la rama sea `main` o `master` y la carpeta sea `/`.

#### **📌 Problema 3: EasyPanel no puede acceder al repositorio**
- **🔍 Causa:** No se autorizó correctamente el acceso a GitHub.
- **📌 Solución:** Ve a "Settings > Applications" en EasyPanel y autoriza el acceso a GitHub.

---

## 📌 📖 DOCUMENTACIÓN ADICIONAL

- **📌 [Documentación oficial de EasyPanel](https://easypanel.io/docs)**
- **📌 [Guía de GitHub Pages](https://pages.github.com/)**
- **📌 [Cómo usar GitHub Pages para proyectos estáticos](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)**

---

## 📌 🎯 RESUMEN RÁPIDO

| Paso | Acción | Plataforma |
|------|--------|------------|
| 1 | Iniciar sesión en EasyPanel | EasyPanel |
| 2 | Crear nueva aplicación | EasyPanel |
| 3 | Seleccionar GitHub como fuente | EasyPanel |
| 4 | Autorizar EasyPanel en GitHub | GitHub + EasyPanel |
| 5 | Configurar como "Static App" | EasyPanel |
| 6 | Desplegar la aplicación | EasyPanel |
| 7 | Obtener la URL | EasyPanel |

---

## 📌 💬 ¿NECESITAS AYUDA?**

Si tienes problemas para desplegar la interfaz en EasyPanel o GitHub Pages, **¡avísame!** 😊

Puedo:
- **📌 Guiarte paso a paso** por chat o llamada.
- **📌 Solucionar problemas de configuración.**
- **📌 Verificar que los archivos estén subidos correctamente.**

---

**💬 ¡La interfaz web del agente 'Pastor' está lista para desplegarse en EasyPanel!** 🚀

**📌 ¿Quieres que te ayude a configurar EasyPanel o prefieres probar con GitHub Pages?** 😊