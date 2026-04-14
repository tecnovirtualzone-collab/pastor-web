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
        if (!question) {
            alert('Por favor, escribe una pregunta.');
            return;
        }

        // Simulamos una respuesta del agente 'Pastor'
        const response = simulatePastorResponse(question);

        // Mostrar respuesta
        responseContainer.innerHTML = marked.parse(response);

        // Guardar en historial
        saveToHistory(question, response);

        // Limpiar el campo de búsqueda
        searchInput.value = '';
    }

    // Función para simular la respuesta del agente 'Pastor'
    function simulatePastorResponse(question) {
        // En una implementación real, esto conectaría con el agente 'Pastor'
        // Por ahora, devolvemos una respuesta simulada
        return `## 📚 Respuesta a: "${question}"

### 🔍 Pregunta Original
> ${question}

### 📖 Respuesta del Agente 'Pastor'

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.

#### 📌 Ejemplo de Respuesta Detallada

**Contexto:**
El Libro de Enoc es un texto **apócrifo** atribuido a Enoc, bisabuelo de Noé. Pertenece a los **pseudepígrafos** y no está incluido en el canon protestante, aunque sí en la tradición etíope y algunas versiones de la Iglesia Ortodoxa.

**Temas principales:**
- **Los Vigilantes:** Ángeles caídos que descendieron a la Tierra y se unieron con mujeres humanas.
- **Los Nephilim:** Gigantes nacidos de estas uniones.
- **La Caída de los Ángeles:** Rebelión contra Dios y sus consecuencias.
- **El Juicio Divino:** El Diluvio como castigo por la maldad.

**Importancia teológica:**
- Influencia en el judaísmo y cristianismo primitivo.
- Citado en la **Carta de Judas (Judas 1:14-15)**.
- Amplía la historia de la corrupción humana antes del Diluvio.

#### 📚 Fuentes y Referencias
- **Texto completo:** [Libro de Enoc (Etíope)](https://www.sacred-texts.com/bib/boe/)
- **Comentarios:** "The Book of Enoch: A New Translation" por R.H. Charles.
- **Análisis teológico:** "Enoch and the Synoptic Tradition" por P. Sacchi.

---

### 📝 ¿Qué más te gustaría saber?

Puedes hacer más preguntas como:
- "¿Qué dice el Evangelio de Juan sobre el amor?"
- "¿Quiénes fueron los reyes de Israel?"
- "¿Qué simboliza el número 40 en la Biblia?"
- "Comparar Salmo 23 en diferentes versiones"

---

*Esta es una respuesta simulada. En una implementación real, el agente 'Pastor' proporcionaría una respuesta detallada y precisa basada en su base de conocimientos.*`;
    }

    // Función para guardar en historial
    function saveToHistory(question, response) {
        let history = JSON.parse(localStorage.getItem('pastorHistory')) || [];
        history.push({ 
            question: question,
            response: response,
            date: new Date().toISOString()
        });
        localStorage.setItem('pastorHistory', JSON.stringify(history));
        loadHistory();
    }

    // Función para cargar historial
    function loadHistory() {
        let history = JSON.parse(localStorage.getItem('pastorHistory')) || [];
        historyList.innerHTML = '';

        if (history.length === 0) {
            historyList.innerHTML = '<li style="color: #999; font-style: italic;">No hay historial aún. ¡Haz tu primera pregunta!</li>';
            return;
        }

        history.forEach((item, index) => {
            const li = document.createElement('li');
            const date = new Date(item.date);
            const formattedDate = date.toLocaleString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            li.textContent = `[${formattedDate}] ${item.question.substring(0, 60)}...`;
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
        if (!response || response.trim() === '') {
            alert('No hay respuesta para descargar.');
            return;
        }

        const date = new Date().toISOString().split('T')[0];
        const blob = new Blob([response], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `respuesta-pastor-${date}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        alert('Respuesta descargada correctamente como archivo de texto.');
    }

    // Función para limpiar historial
    function clearHistory() {
        if (confirm('¿Estás seguro de que quieres limpiar el historial? Esta acción no se puede deshacer.')) {
            localStorage.removeItem('pastorHistory');
            historyList.innerHTML = '<li style="color: #999; font-style: italic;">Historial limpiado. ¡Haz tu primera pregunta!</li>';
            alert('Historial limpiado correctamente.');
        }
    }

    // Animación de carga para respuestas
    function showLoading() {
        responseContainer.innerHTML = '<div class="loading"><p>🔍 Buscando respuesta en el agente "Pastor"...<br><span style="font-size: 12px; color: #666;">Esto puede tardar unos segundos.</span></p><div class="spinner"></div></div>';
    }

    // Estilos para la animación de carga
    const style = document.createElement('style');
    style.textContent = `
        .loading {
            text-align: center;
            padding: 40px;
            color: #4a6baf;
        }
        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4a6baf;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});