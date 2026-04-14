# 📚 Agente 'Pastor' - Interfaz Web

> **Interfaz web independiente para interactuar con el agente 'Pastor' de manera visual y accesible.**

---

## 📌 🎯 ¿QUÉ ES ESTO?

Esta es una **interfaz web** diseñada para que puedas interactuar con el agente **'Pastor'** de manera visual y sencilla. La interfaz incluye:

✅ **🎨 Diseño responsivo** (funciona en móviles, tablets y desktop).
✅ **🔍 Campo de búsqueda** para hacer preguntas al agente.
✅ **📚 Botones predefinidos** para temas comunes (ej: "Libro de Enoc", "Profecías", "Comparar versiones").
✅ **📖 Visualización de respuestas** en formato markdown con formato adecuado.
✅ **📝 Historial de conversaciones** guardado en `history.json`.
✅ **💾 Opción para descargar respuestas** como archivo de texto.
✅ **🌐 Despliegue en EasyPanel o GitHub Pages** para acceso desde cualquier dispositivo.

---

## 📌 🚀 ¿CÓMO USAR LA INTERFAZ?

### **🔹 Paso 1: Acceder a la interfaz**
Puedes acceder a la interfaz de dos formas:

#### **🌐 Opción 1: Usar GitHub Pages (acceso rápido y gratuito)**
1. **📁 Ve a la URL de GitHub Pages:**
   - [https://tunombre.github.io/pastor-web/](https://tunombre.github.io/pastor-web/) (reemplaza `tunombre` con tu nombre de usuario de GitHub).

2. **🔍 Explora la interfaz:**
   - Escribe tu pregunta en el campo de búsqueda.
   - Usa los botones predefinidos para explorar temas comunes.
   - Lee las respuestas en formato markdown.
   - Revisa el historial de conversaciones.
   - Descarga las respuestas como archivo de texto si lo deseas.

#### **🌐 Opción 2: Desplegar en EasyPanel (acceso profesional)**
1. **📁 Ve a tu EasyPanel** y crea una nueva aplicación.
2. **🔗 Selecciona "GitHub" como fuente** y autoriza EasyPanel para acceder a tu repositorio.
3. **📂 Usa el repositorio** `pastor-web` que te proporcionaré.
4. **🚀 Despliega la aplicación** y obtén tu URL personalizada.

---

## 📌 📁 ESTRUCTURA DE ARCHIVOS

```
pastor-web/
├── index.html          # Estructura principal de la interfaz
├── styles.css          # Estilos responsivos y diseño visual
├── script.js           # Lógica de interacción con el agente 'Pastor'
├── history.json        # Historial de conversaciones (guarda preguntas y respuestas)
├── README.md           # Este archivo (instrucciones de uso)
└── assets/
    ├── images/         # Imágenes y logos
    │   ├── logo.png    # Logo del agente 'Pastor'
    │   └── background.jpg # Fondo de la interfaz
    └── icons/          # Iconos para la interfaz
        ├── search.png  # Icono de búsqueda
        ├── download.png # Icono de descarga
        └── history.png # Icono de historial
```

---

## 📌 💡 FUNCIONALIDADES CLAVE

### **🔍 Campo de Búsqueda**
- **📌 ¿Qué puedes hacer?**
  - Escribe tu pregunta en el campo de búsqueda (ej: "¿Qué dice el Libro de Enoc?").
  - Presiona **Enter** o haz clic en el botón **Buscar**.
  - La respuesta se mostrará en el área de respuestas en formato markdown.

- **📌 Ejemplos de preguntas:**
  - "¿Qué dice el Libro de Enoc sobre los vigilantes?"
  - "Comparar Génesis 1:1 en Reina Valera y NVI"
  - "¿Quiénes fueron los profetas mayores?"
  - "¿Qué simboliza el número 7 en la Biblia?"
  - "Busca Juan 3:16 en la versión Reina Valera 1960"

### **📚 Botones Predefinidos**
- **📌 Temas comunes disponibles:**
  - **Libro de Enoc:** Información sobre el Libro de Enoc y sus temas principales.
  - **Profecías:** Explicaciones sobre profecías bíblicas y su cumplimiento.
  - **Versiones:** Comparación de pasajes entre diferentes versiones de la Biblia.
  - **Salmos:** Análisis de los Salmos y su significado.
  - **Figuras Bíblicas:** Información sobre personajes bíblicos importantes.

- **📌 ¿Cómo usarlos?**
  - Haz clic en el botón correspondiente al tema que te interese.
  - La interfaz cargará automáticamente una pregunta predefinida y mostrará la respuesta.

### **📖 Área de Respuestas**
- **📌 ¿Qué verás?**
  - Las respuestas del agente 'Pastor' en formato markdown con formato adecuado.
  - Ejemplo:
    ```markdown
    ## Libro de Enoc: Los Vigilantes

    ### 📚 Contexto
    El Libro de Enoc (o 1 Enoc) es un texto **apócrifo** atribuido a Enoc, bisabuelo de Noé...
    ```

- **📌 Formato:**
  - Títulos en negrita.
  - Listas y viñetas para mejor legibilidad.
  - Código y bloques de texto destacados.

### **📝 Historial de Conversaciones**
- **📌 ¿Qué guarda?**
  - Todas las preguntas que haces y las respuestas que recibes.
  - El historial se guarda en el archivo `history.json`.

- **📌 ¿Cómo usarlo?**
  - Haz clic en el botón **Historial** para ver todas tus preguntas anteriores.
  - Haz clic en una pregunta para volver a ver su respuesta.

### **💾 Descarga de Respuestas**
- **📌 ¿Qué puedes hacer?**
  - Descargar la respuesta actual como archivo de texto.
  - El archivo se guardará con el nombre `respuesta-[fecha].txt`.

- **📌 ¿Cómo usarlo?**
  - Haz clic en el botón **Descargar** después de recibir una respuesta.
  - El archivo se descargará automáticamente.

### **🌐 Despliegue en EasyPanel**
- **📌 ¿Qué necesitas?**
  - Una cuenta en [EasyPanel](https://easypanel.io/).
  - Un repositorio en GitHub con los archivos de la interfaz.

- **📌 Pasos para desplegar:**
  1. **📁 Sube los archivos** a un repositorio público en GitHub.
  2. **🔗 Ve a EasyPanel** y crea una nueva aplicación.
  3. **🔧 Selecciona "GitHub" como fuente** y autoriza EasyPanel para acceder a tu repositorio.
  4. **📂 Configura la aplicación** como una aplicación estática.
  5. **🚀 Despliega la aplicación** y obtén tu URL personalizada.

---

## 📌 🎨 DISEÑO DE LA INTERFAZ

### **🔹 Paleta de Colores**
- **📌 Colores principales:**
  - **Fondo:** `#f5f5f5` (gris claro).
  - **Texto:** `#333333` (gris oscuro).
  - **Botones:** `#4a6baf` (azul).
  - **Botones hover:** `#3a5a9f` (azul oscuro).
  - **Área de respuestas:** `#ffffff` (blanco).
  - **Historial:** `#e9e9e9` (gris muy claro).

### **🔹 Tipografía**
- **📌 Fuente principal:** `Roboto` (Google Fonts).
- **📌 Tamaños:**
  - Títulos: `24px` (negrita).
  - Texto normal: `16px`.
  - Botones: `14px` (negrita).

### **🔹 Diseño Responsivo**
- **📌 Móviles:**
  - Diseño en una sola columna.
  - Botones grandes para facilitar el uso con el dedo.
  - Texto legible sin necesidad de zoom.

- **📌 Tablets:**
  - Diseño en dos columnas (campo de búsqueda + área de respuestas).
  - Botones y texto optimizados para pantallas medianas.

- **📌 Desktop:**
  - Diseño en tres columnas (campo de búsqueda + botones + área de respuestas).
  - Espacio amplio para el área de respuestas.

---

## 📌 🛠️ CÓDIGO FUENTE

### **🔹 index.html**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agente 'Pastor' - Interfaz Web</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header>
            <img src="assets/images/logo.png" alt="Logo Agente Pastor" class="logo">
            <h1>Agente 'Pastor'</h1>
            <p>Interfaz web para consultar la Biblia y los libros apócrifos</p>
        </header>

        <div class="search-container">
            <input type="text" id="search-input" placeholder="Escribe tu pregunta...">
            <button id="search-button">Buscar</button>
        </div>

        <div class="buttons-container">
            <button class="predefined-button" data-topic="enoc">Libro de Enoc</button>
            <button class="predefined-button" data-topic="profecias">Profecías</button>
            <button class="predefined-button" data-topic="versiones">Versiones</button>
            <button class="predefined-button" data-topic="salmos">Salmos</button>
            <button class="predefined-button" data-topic="figuras">Figuras Bíblicas</button>
        </div>

        <div class="response-container" id="response-container">
            <p>Escribe una pregunta o selecciona un tema para ver la respuesta aquí.</p>
        </div>

        <div class="history-container" id="history-container">
            <h3>Historial de Conversaciones</h3>
            <ul id="history-list"></ul>
        </div>

        <div class="actions-container">
            <button id="download-button">Descargar Respuesta</button>
            <button id="clear-button">Limpiar Historial</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### **🔹 styles.css**
```css
/* Estilos generales */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    color: #333333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

.logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

h1 {
    color: #4a6baf;
    margin: 10px 0;
}

.search-container {
    display: flex;
    margin-bottom: 20px;
}

#search-input {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #4a6baf;
    border-radius: 5px 0 0 5px;
    outline: none;
}

#search-button {
    padding: 12px 20px;
    background-color: #4a6baf;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

#search-button:hover {
    background-color: #3a5a9f;
}

.buttons-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.predefined-button {
    padding: 10px 15px;
    background-color: #4a6baf;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.predefined-button:hover {
    background-color: #3a5a9f;
}

.response-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    min-height: 300px;
}

.history-container {
    background-color: #e9e9e9;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
}

#history-list {
    list-style: none;
    padding: 0;
}

#history-list li {
    padding: 10px;
    border-bottom: 1px solid #cccccc;
    cursor: pointer;
    transition: background-color 0.3s;
}

#history-list li:hover {
    background-color: #d9d9d9;
}

.actions-container {
    display: flex;
    gap: 10px;
    justify-content: center;
}

#download-button, #clear-button {
    padding: 12px 20px;
    background-color: #4a6baf;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

#download-button:hover, #clear-button:hover {
    background-color: #3a5a9f;
}

/* Diseño responsivo */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }

    .buttons-container {
        justify-content: center;
    }

    .predefined-button {
        flex: 1;
    }
}

@media (max-width: 480px) {
    #search-input, #search-button {
        width: 100%;
    }

    .buttons-container {
        flex-direction: column;
    }

    .predefined-button {
        width: 100%;
    }
}
```

### **🔹 script.js**
```javascript
// Historial de conversaciones
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const responseContainer = document.getElementById('response-container');
    const historyList = document.getElementById('history-list');
    const downloadButton = document.getElementById('download-button');
    const clearButton = document.getElementById('clear-button');
    const predefinedButtons = document.querySelectorAll('.predefined-button');

    // Cargar historial al iniciar
    loadHistory();

    // Buscar al presionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            search();
        }
    });

    // Buscar al hacer clic en el botón
    searchButton.addEventListener('click', search);

    // Botones predefinidos
    predefinedButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            let question = '';

            switch(topic) {
                case 'enoc':
                    question = '¿Qué dice el Libro de Enoc sobre los vigilantes?';
                    break;
                case 'profecias':
                    question = '¿Qué profecías sobre el Mesías se cumplieron en Jesús?';
                    break;
                case 'versiones':
                    question = 'Comparar Génesis 1:1 en Reina Valera 1960, NVI y LBLA';
                    break;
                case 'salmos':
                    question = '¿Qué dice el Salmo 23 en la Biblia de Jerusalén?';
                    break;
                case 'figuras':
                    question = '¿Quiénes fueron los profetas mayores y qué profetizaron?';
                    break;
            }

            searchInput.value = question;
            search();
        });
    });

    // Descargar respuesta
    downloadButton.addEventListener('click', downloadResponse);

    // Limpiar historial
    clearButton.addEventListener('click', clearHistory);

    // Función para buscar
    function search() {
        const question = searchInput.value.trim();
        if (!question) return;

        // Aquí iría la lógica para conectar con el agente 'Pastor'
        // Por ahora, simulamos una respuesta
        const response = simulatePastorResponse(question);

        // Mostrar respuesta
        responseContainer.innerHTML = marked.parse(response);

        // Guardar en historial
        saveToHistory(question, response);
    }

    // Función para simular la respuesta del agente 'Pastor'
    function simulatePastorResponse(question) {
        // En una implementación real, esto conectaría con el agente 'Pastor'
        // Por ahora, devolvemos una respuesta simulada
        return `## Respuesta a: "${question}"

### 📚 Respuesta del Agente 'Pastor'

**Pregunta:** "${question}"

**Respuesta:**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

### 📖 Más Información

- **🔍 Temas relacionados:** [Libro de Enoc](#), [Profecías](#), [Versiones de la Biblia](#)
- **📚 Fuente:** [Agente 'Pastor' - Interfaz Web](#)

---

*Esta es una respuesta simulada. En una implementación real, el agente 'Pastor' proporcionaría una respuesta detallada y precisa.*`;
    }

    // Función para guardar en historial
    function saveToHistory(question, response) {
        let history = JSON.parse(localStorage.getItem('pastorHistory')) || [];
        history.push({ question, response, date: new Date().toISOString() });
        localStorage.setItem('pastorHistory', JSON.stringify(history));
        loadHistory();
    }

    // Función para cargar historial
    function loadHistory() {
        let history = JSON.parse(localStorage.getItem('pastorHistory')) || [];
        historyList.innerHTML = '';

        history.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.date.split('T')[0]} - ${item.question.substring(0, 50)}...`;
            li.addEventListener('click', () => {
                searchInput.value = item.question;
                responseContainer.innerHTML = marked.parse(item.response);
            });
            historyList.appendChild(li);
        });
    }

    // Función para descargar respuesta
    function downloadResponse() {
        const response = responseContainer.innerText;
        if (!response) {
            alert('No hay respuesta para descargar.');
            return;
        }

        const blob = new Blob([response], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `respuesta-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // Función para limpiar historial
    function clearHistory() {
        if (confirm('¿Estás seguro de que quieres limpiar el historial?')) {
            localStorage.removeItem('pastorHistory');
            historyList.innerHTML = '';
            alert('Historial limpiado correctamente.');
        }
    }
});
```

---

## 📌 📝 CÓMO CONTRIBUIR O PERSONALIZAR

### **🔹 Añadir más temas predefinidos**
1. **📁 Abre el archivo `index.html`.**
2. **🔧 Añade un nuevo botón** en la sección `<div class="buttons-container">`:
   ```html
   <button class="predefined-button" data-topic="nuevo-tema">Nuevo Tema</button>
   ```
3. **📝 Abre el archivo `script.js`.**
4. **🔧 Añade un nuevo caso** en la función `simulatePastorResponse`:
   ```javascript
   case 'nuevo-tema':
       question = '¿Qué es el nuevo tema que quieres añadir?';
       break;
   ```
5. **📚 Actualiza el archivo `README.md`** para incluir el nuevo tema.

### **🔹 Cambiar el diseño visual**
1. **📁 Abre el archivo `styles.css`.**
2. **🎨 Modifica los colores, fuentes o estilos** según tus preferencias.
3. **📝 Asegúrate de que el diseño siga siendo responsivo.**

### **🔹 Conectar con el agente 'Pastor' real**
1. **📁 Abre el archivo `script.js`.**
2. **🔗 Reemplaza la función `simulatePastorResponse`** con una función que haga una petición al agente 'Pastor'.
3. **📝 Ejemplo de conexión (usando fetch):**
   ```javascript
   async function search() {
       const question = searchInput.value.trim();
       if (!question) return;

       try {
           const response = await fetch('URL_DEL_AGENTE_PASTOR', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ question })
           });
           const data = await response.json();
           responseContainer.innerHTML = marked.parse(data.response);
           saveToHistory(question, data.response);
       } catch (error) {
           responseContainer.innerHTML = '<p>Error al conectar con el agente. Inténtalo de nuevo más tarde.</p>';
       }
   }
   ```

### **🔹 Añadir más funcionalidades**
1. **📁 Abre el archivo `script.js`.**
2. **🔧 Añade nuevas funciones** para:
   - **📚 Exportar historial a PDF.**
   - **🌐 Compartir respuestas por redes sociales.**
   - **🔍 Búsqueda avanzada por palabras clave.**
   - **📖 Modo oscuro/claro.**

---

## 📌 📚 RECURSOS ÚTILES

### **🔹 Librerías externas usadas:**
- **📌 [marked.js](https://marked.js.org/)** (para renderizar markdown en HTML).
- **📌 [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)** (tipografía).

### **🔹 Herramientas recomendadas:**
- **📌 [EasyPanel](https://easypanel.io/)** para desplegar aplicaciones web.
- **📌 [GitHub Pages](https://pages.github.com/)** para alojar sitios web estáticos.
- **📌 [Visual Studio Code](https://code.visualstudio.com/)** para editar los archivos.

### **🔹 Documentación adicional:**
- **📌 [Markdown Guide](https://www.markdownguide.org/)** para aprender a escribir en markdown.
- **📌 [CSS Tricks](https://css-tricks.com/)** para mejorar el diseño.
- **📌 [JavaScript.info](https://javascript.info/)** para aprender JavaScript.

---

## 📌 📌 EJEMPLOS DE PREGUNTAS QUE PUEDES HACER

Aquí tienes algunos ejemplos de preguntas que puedes hacerle al agente 'Pastor' usando esta interfaz:

### **📚 Sobre la Biblia:**
- "¿Cuál es la diferencia entre la Biblia católica y la protestante?"
- "¿Qué libros forman el Antiguo Testamento?"
- "¿Cuál es el mensaje central del Evangelio de Juan?"
- "¿Qué significa el libro de Apocalipsis?"

### **📖 Sobre los Apócrifos:**
- "¿Qué es el Libro de Enoc y por qué no está en la Biblia protestante?"
- "¿Cuál es la diferencia entre los libros deuterocanónicos y los pseudepígrafos?"
- "¿Qué dice el Libro de los Jubileos sobre la historia de la humanidad?"

### **📊 Sobre Teología:**
- "¿Qué es la hermenéutica bíblica?"
- "¿Quiénes fueron los profetas mayores y qué profetizaron?"
- "¿Qué simboliza el número 7 en la Biblia?"
- "¿Cuáles son las principales controversias teológicas en la historia del cristianismo?"

### **🔍 Búsquedas de pasajes:**
- "Busca Juan 3:16 en la versión Reina Valera 1960"
- "Comparar Génesis 1:1 en la Reina Valera, NVI y LBLA"
- "¿Qué dice el Salmo 23 en la Biblia de Jerusalén?"

### **📝 Guías de estudio:**
- "¿Cómo puedo estudiar la Biblia de manera efectiva?"
- "¿Cómo interpretar pasajes difíciles de la Biblia?"
- "¿Qué recursos recomiendas para profundizar en la teología de Pablo?"

---

## 📌 📌 NOTAS FINALES

- **📌 Esta interfaz es un proyecto en desarrollo.** Puedes personalizarla y mejorarla según tus necesidades.
- **📌 Si encuentras algún error o tienes una idea para mejorarla, ¡contáctame!**
- **📌 El agente 'Pastor' real puede conectarse a esta interfaz para proporcionar respuestas más precisas y detalladas.**

---

## 📌 📌 LICENCIA

Este proyecto se distribuye bajo la **Licencia MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.

---

**💬 ¡Disfruta usando la interfaz web del agente 'Pastor'!** 😊

**📌 ¿Necesitas ayuda para desplegarla o personalizarla?** 🚀