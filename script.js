// Historial de conversaciones
// Librería marked para renderizar markdown
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si marked.js está cargado
    if (typeof marked === 'undefined') {
        console.error('marked.js no está cargado. La interfaz no funcionará correctamente.');
        alert('Error: marked.js no está cargado. La interfaz no funcionará correctamente.');
    }

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
    async function search() {
        const question = searchInput.value.trim();
        if (!question) {
            alert('⚠️ Por favor, escribe una pregunta.');
            return;
        }

        // Mostrar animación de carga
        showLoading();

        try {
            // En una implementación real, esto conectaría con el agente 'Pastor' real
            // Por ahora, usaremos una función que simula la conexión
            const response = await getPastorResponse(question);

            // Mostrar respuesta
            responseContainer.innerHTML = marked.parse(response);

            // Guardar en historial
            saveToHistory(question, response);

            // Limpiar el campo de búsqueda
            searchInput.value = '';
        } catch (error) {
            console.error('Error al obtener respuesta:', error);
            responseContainer.innerHTML = `
                <div class="error-message">
                    <h3>❌ Error al obtener respuesta</h3>
                    <p>No se pudo conectar con el agente 'Pastor'. Intenta nuevamente más tarde.</p>
                    <p><small>Error: ${error.message}</small></p>
                </div>
            `;
        }
    }

    // Función para obtener respuesta del agente 'Pastor' (simulada)
    async function getPastorResponse(question) {
        // Simulamos una demora para que se vea que está "procesando"
        await new Promise(resolve => setTimeout(resolve, 1500));

        // En una implementación real, esto sería una llamada a una API o al sistema de búsqueda semántica
        // Por ahora, devolvemos una respuesta simulada pero más realista
        
        // Determinar el tipo de pregunta para dar una respuesta más específica
        const questionLower = question.toLowerCase();

        if (questionLower.includes('enoc') || questionLower.includes('vigilantes')) {
            return getEnocResponse(question);
        } else if (questionLower.includes('profecía') || questionLower.includes('profecias')) {
            return getProfeciasResponse(question);
        } else if (questionLower.includes('versión') || questionLower.includes('comparar')) {
            return getVersionesResponse(question);
        } else if (questionLower.includes('salmo') || questionLower.includes('salmos')) {
            return getSalmosResponse(question);
        } else if (questionLower.includes('figura') || questionLower.includes('profeta') || questionLower.includes('rey')) {
            return getFigurasResponse(question);
        } else {
            // Respuesta genérica para preguntas no específicas
            return getGenericResponse(question);
        }
    }

    // Funciones para respuestas específicas
    function getEnocResponse(question) {
        return `## 📚 Respuesta a: "${question}"

### 🔍 Pregunta Original
> ${question}

### 📖 Respuesta del Agente 'Pastor'

El **Libro de Enoc** (o *1 Enoc*) es uno de los textos más importantes de la literatura intertestamentaria y apócrifa. Aunque no forma parte del canon bíblico protestante, es aceptado por la Iglesia Ortodoxa Etíope y citado en la **Carta de Judas (Judas 1:14-15)**.

---

#### 📌 **Los Vigilantes en el Libro de Enoc**

Según el texto, los **Vigilantes** son un grupo de ángeles caídos que descendieron a la Tierra en los días de Jared (padre de Enoc). Su líder fue **Semyaza**, y entre ellos destacaron:
- **Azazel**: Enseñó a los humanos la fabricación de armas y cosméticos.
- **Azael**: Corrompió a la humanidad con conocimientos prohibidos.
- **Armaros, Baraqel, Kokabel, etc.**: Otros ángeles que se unieron a la rebelión.

**📜 Texto clave (1 Enoc 6-7):**
> "Y aconteció que cuando los hijos de los hombres se multiplicaron, les nacieron hijas hermosas. Y los vigilantes, hijos del cielo, las vieron y las desearon..."

---

#### 📌 **Consecuencias de la Caída de los Vigilantes**

1. **👶 Los Nephilim**: Gigantes nacidos de la unión entre los ángeles y mujeres humanas.
2. **🔥 La corrupción de la humanidad**: Los vigilantes enseñaron conocimientos prohibidos (magia, metalurgia, guerra).
3. **🌊 El Juicio Divino**: Dios envió el Diluvio como castigo por la maldad.
4. **⚖️ El castigo de los Vigilantes**: Fueron encadenados en el abismo hasta el Día del Juicio.

---

#### 📌 **Importancia Teológica**

- **Influencia en el judaísmo**: El libro fue escrito entre los siglos III a.C. y I d.C.
- **Conexión con el Nuevo Testamento**: Judas cita a Enoc en su epístola.
- **Interpretaciones**: Algunos lo ven como una advertencia contra la hibridación entre lo divino y lo humano.
- **Literatura posterior**: Inspiró obras como "El Paraíso Perdido" de Milton.

---

#### 📚 **Fuentes y Referencias**

- **Texto completo**: [Libro de Enoc (Etíope)](https://www.sacred-texts.com/bib/boe/)
- **Comentarios académicos**: "The Book of Enoch: A New Translation" por R.H. Charles
- **Análisis teológico**: "Enoch and the Synoptic Tradition" por P. Sacchi
- **Versión en español**: [Biblioteca Sacra Textos](https://www.bibliotecasacra.net/)

---

### 📝 ¿Qué más te gustaría saber sobre el Libro de Enoc?

Puedes preguntar:
- "¿Qué dice el Libro de Enoc sobre el juicio final?"
- "¿Quiénes fueron los 200 ángeles que cayeron?"
- "¿Cómo se relaciona Enoc con Noé?"
- "¿Qué simboliza el árbol de la vida en Enoc?"

---

*Esta respuesta se basa en el texto etíope de 1 Enoc. En una implementación real, el agente 'Pastor' buscaría en su base de conocimientos para proporcionar una respuesta precisa y detallada.*`;
    }

    function getProfeciasResponse(question) {
        return `## 📚 Respuesta a: "${question}"

### 🔍 Pregunta Original
> ${question}

### 📖 Respuesta del Agente 'Pastor'

Las **profecías mesiánicas** son uno de los temas más fascinantes de la Biblia. El Antiguo Testamento contiene cientos de profecías que los cristianos creen que se cumplieron en **Jesucristo**. Aquí te presento las más importantes:

---

#### 📌 **Profecías sobre el nacimiento del Mesías**

1. **📜 Isaías 7:14**
   > "He aquí, la virgen concebirá y dará a luz un hijo, y llamará su nombre Emmanuel."
   - **Cumplimiento**: Mateo 1:22-23 (Jesús nacido de María, la virgen).

2. **📜 Miqueas 5:2**
   > "Pero tú, Belén Efrata, pequeña para estar entre las familias de Judá, de ti me saldrá el que será Señor en Israel."
   - **Cumplimiento**: Jesús nació en Belén (Mateo 2:1).

---

#### 📌 **Profecías sobre la vida y ministerio de Jesús**

1. **📜 Isaías 9:1-2**
   > "El pueblo que andaba en tinieblas vio gran luz; los que moraban en tierra de sombra de muerte, luz resplandeció sobre ellos."
   - **Cumplimiento**: Jesús comenzó su ministerio en Galilea (Mateo 4:12-17).

2. **📜 Zacarías 9:9**
   > "Alégrate mucho, hija de Sion; da voces de júbilo, hija de Jerusalén; he aquí tu rey vendrá a ti, justo y salvador, humilde, y cabalgando sobre un asno, sobre un pollino hijo de asna."
   - **Cumplimiento**: Entrada triunfal de Jesús a Jerusalén (Mateo 21:1-11).

3. **📜 Salmo 22:16**
   > "Horadaron mis manos y mis pies."
   - **Cumplimiento**: Crucifixión de Jesús (Juan 20:25).

---

#### 📌 **Profecías sobre la muerte y resurrección**

1. **📜 Isaías 53:5-7**
   > "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados."
   - **Cumplimiento**: Muerte expiatoria de Jesús (1 Pedro 2:24).

2. **📜 Salmo 16:10**
   > "Porque no dejarás mi alma en el Seol, ni permitirás que tu santo vea corrupción."
   - **Cumplimiento**: Resurrección de Jesús (Hechos 2:31).

3. **📜 Zacarías 12:10**
   > "Y mirarán a mí, a quien traspasaron."
   - **Cumplimiento**: Crucifixión (Juan 19:37).

---

#### 📌 **Profecías sobre el Reino de Dios**

1. **📜 Daniel 2:44**
   > "Y en los días de estos reyes, el Dios del cielo levantará un reino que no será jamás destruido."
   - **Cumplimiento**: Reino de Dios establecido por Jesús (Marcos 1:15).

2. **📜 Isaías 2:2-3**
   > "Sucederá en los postreros días que el monte de la casa de Jehová será establecido como cabeza de los montes."
   - **Cumplimiento**: Iglesia como nuevo pueblo de Dios.

---

#### 📌 **Profecías sobre la Segunda Venida**

1. **📜 Daniel 7:13-14**
   > "Miraba yo en la visión de la noche, y he aquí con las nubes del cielo venía uno como un hijo de hombre."
   - **Interpretación**: Segunda venida de Cristo.

2. **📜 Mateo 24:30**
   > "Entonces aparecerá la señal del Hijo del Hombre en el cielo; y entonces lamentarán todas las tribus de la tierra."
   - **Interpretación**: Eventos previos al retorno de Cristo.

---

#### 📚 **Fuentes y Referencias**

- **Biblia**: Versión Reina Valera 1960
- **Libros recomendados**:
  - "Profecías Mesiánicas" por David Brickner
  - "Jesús y las Profecías del Antiguo Testamento" por Josh McDowell
  - "The Messianic Hope" por Michael Rydelnik
- **Recursos en línea**:
  - [Bible Gateway](https://www.biblegateway.com/)
  - [Got Questions](https://www.gotquestions.org/)

---

### 📝 ¿Qué más te gustaría saber sobre las profecías?

Puedes preguntar:
- "¿Qué profecías se cumplieron en la vida de David?"
- "¿Cómo se relaciona el Siervo Sufriente de Isaías con Jesús?"
- "¿Qué dice Daniel 9 sobre el Mesías?"
- "¿Cuáles son las profecías no cumplidas aún?"

---

*Estas son solo algunas de las muchas profecías que apuntan a Jesús como el Mesías prometido. En una implementación real, el agente 'Pastor' buscaría en su base de conocimientos para proporcionar respuestas más detalladas y específicas.*`;
    }

    function getVersionesResponse(question) {
        return `## 📚 Respuesta a: "${question}"

### 🔍 Pregunta Original
> ${question}

### 📖 Respuesta del Agente 'Pastor'

Comparar pasajes bíblicos entre diferentes versiones es una excelente manera de entender mejor el texto sagrado. Aquí tienes una comparación de **Génesis 1:1** en tres versiones populares:

---

#### 📜 **Génesis 1:1**

| Versión | Texto |
|---------|-------|
| **🇲🇽 Reina Valera 1960 (RVR60)** | "En el principio creó Dios los cielos y la tierra." |
| **🇺🇸 Nueva Versión Internacional (NVI)** | "En el principio creó Dios los cielos y la tierra." |
| **🇪🇸 La Biblia de las Américas (LBLA)** | "En el principio creó Dios los cielos y la tierra." |

---

#### 📌 **Análisis comparativo**

Todas las versiones coinciden en el texto básico de Génesis 1:1, pero difieren en:

1. **📖 Notas al pie**: Algunas versiones incluyen notas explicativas.
2. **🔤 Traducción de términos clave**:
   - "Principio" (RVR60, LBLA) vs "principio" (NVI) — mismo significado.
   - "Creó" (todas) — traducción del hebreo "בָּרָא" (bara).
3. **📝 Estructura del versículo**:
   - RVR60: Usa lenguaje más tradicional.
   - NVI: Usa lenguaje más moderno y accesible.
   - LBLA: Más literal al hebreo original.

---

#### 📌 **¿Por qué hay diferentes versiones?**

1. **📚 Traducción**: Cada versión traduce el texto original (hebreo/griego) de manera diferente.
2. **🎯 Objetivo**: Algunas versiones buscan ser más literales (LBLA), otras más dinámicas (NVI).
3. **📖 Público objetivo**: RVR60 es muy usada en iglesias hispanas, NVI en contextos evangélicos modernos.

---

#### 📌 **Ejemplo de comparación en otro pasaje**

**Juan 3:16**

| Versión | Texto |
|---------|-------|
| **RVR60** | "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." |
| **NVI** | "Porque tanto amó Dios al mundo que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna." |
| **LBLA** | "Porque de tal manera amó Dios al mundo, que dio a Su Hijo unigénito, para que todo el que cree en Él, no se pierda, mas tenga vida eterna." |

**Diferencias notables:**
- RVR60 usa "ha dado" (pasado) vs NVI usa "dio" (pasado simple).
- NVI omite "unigénito" (en algunos manuscritos antiguos).
- LBLA usa "Su Hijo" con mayúscula para enfatizar divinidad.

---

#### 📚 **¿Cuál versión elegir?**

| Versión | Ventajas | Desventajas |
|---------|----------|-------------|
| **RVR60** | Tradicional, muy usada en iglesias | Lenguaje antiguo, menos accesible |
| **NVI** | Lenguaje moderno, fácil de entender | Menos literal al texto original |
| **LBLA** | Muy literal al hebreo/griego | Puede ser menos fluido en español |

---

#### 📝 **Recomendaciones**

1. **📖 Para estudio serio**: Usa LBLA o RVR60 con notas.
2. **🎯 Para lectura devocional**: NVI o RVR95 (Reina Valera Revisada 1995).
3. **🔍 Para comparar**: Usa herramientas como [Bible Gateway](https://www.biblegateway.com/) o [Blue Letter Bible](https://www.blueletterbible.org/).

---

#### 📚 **Recursos para comparar versiones**

- [Bible Gateway](https://www.biblegateway.com/versions/) - Compara múltiples versiones en línea.
- [Blue Letter Bible](https://www.blueletterbible.org/) - Herramientas de estudio bíblico.
- [Bible Hub](https://biblehub.com/) - Comentarios y comparaciones.
- **Apps recomendadas**:
  - YouVersion Bible App
  - Bible Gateway App
  - Logos Bible Software

---

### 📝 ¿Qué más te gustaría comparar?

Puedes preguntar:
- "Comparar Salmo 23 en diferentes versiones"
- "Comparar Juan 1:1 en RVR60, NVI y LBLA"
- "¿Qué versión es mejor para estudiar el libro de Apocalipsis?"
- "Comparar Mateo 5:1-12 (Las Bienaventuranzas)"

---

*Esta comparación es solo un ejemplo. En una implementación real, el agente 'Pastor' buscaría en su base de datos de versiones bíblicas para proporcionar comparaciones más completas y precisas.*`;
    }

    function getSalmosResponse(question) {
        return `## 📚 Respuesta a: "${question}"

### 🔍 Pregunta Original
> ${question}

### 📖 Respuesta del Agente 'Pastor'

El **Salmo 23** es uno de los pasajes más queridos y recitados de toda la Biblia. Escrito por el rey David, este salmo expresa confianza absoluta en la provisión y protección de Dios. Aquí te presento una explicación detallada:

---

#### 📜 **Salmo 23 (RVR60)**

> 1 "*Jehová es mi pastor; nada me faltará.*
> 2 "*En lugares de delicados pastos me hará descansar;
>    junto a aguas de reposo me pastoreará.*
> 3 "*Confortará mi alma;
>    me guiará por sendas de justicia
>    por amor de su nombre.*
> 4 "*Aunque ande en valle de sombra de muerte,
>    no temeré mal alguno, porque tú estarás conmigo;
>    tu vara y tu cayado me infundirán aliento.*
> 5 "*Aderezas mesa delante de mí en presencia de mis angustiadores;
>    unges mi cabeza con aceite;
>    mi copa está rebosando.*
> 6 "*Ciertamente el bien y la misericordia me seguirán
>    todos los días de mi vida,
>    y en la casa de Jehová moraré
>    por largos días.*"

---

#### 📌 **Análisis por versículos**

##### **🔹 Versículo 1: "Jehová es mi pastor; nada me faltará"**
- **🐑 Imagen del pastor**: Dios como pastor que cuida, guía y protege a sus ovejas.
- **🛡️ Promesa de provisión**: "Nada me faltará" significa que Dios suplirá todas nuestras necesidades.
- **📖 Contexto histórico**: David, siendo pastor de ovejas, entendía el cuidado que un pastor da a su rebaño.

##### **🔹 Versículos 2-3: "En lugares de delicados pastos... me guiará por sendas de justicia"**
- **🌿 Lugares de delicados pastos**: Lugares seguros y abundantes donde las ovejas pueden alimentarse.
- **💧 Aguas de reposo**: Aguas tranquilas donde las ovejas pueden beber sin peligro.
- **🧭 Sendas de justicia**: Camino de rectitud y santidad que Dios traza para sus seguidores.
- **💖 Conforta mi alma**: Dios restaura y renueva el espíritu.

##### **🔹 Versículo 4: "Aunque ande en valle de sombra de muerte..."**
- **🌑 Valle de sombra de muerte**: Símbolo de dificultades, pruebas y peligros.
- **🛡️ "No temeré mal alguno"**: La presencia de Dios elimina el miedo.
- **🧰 "Tu vara y tu cayado"**: Instrumentos del pastor para guiar y proteger.
- **💪 "Me infundirán aliento"**: Dios da fuerza y consuelo en medio de las pruebas.

##### **🔹 Versículo 5: "Aderezas mesa delante de mí en presencia de mis angustiadores"**
- **🍽️ Mesa preparada**: Hospitalidad y provisión en medio de la hostilidad.
- **👥 "En presencia de mis angustiadores"**: Dios provee incluso cuando hay enemigos.
- **🛢️ "Unges mi cabeza con aceite"**: Símbolo de honor y consagración.
- **🍷 "Mi copa está rebosando"**: Dios nos colma de bendiciones.

##### **🔹 Versículo 6: "Ciertamente el bien y la misericordia me seguirán..."**
- **👣 "El bien y la misericordia me seguirán"**: Bendiciones que acompañan al creyente.
- **🏠 "En la casa de Jehová moraré"**: Promesa de comunión eterna con Dios.
- **🕰️ "Por largos días"**: Vida eterna y comunión con Dios.

---

#### 📌 **Temas principales del Salmo 23**

1. **🛡️ **Protección divina**: Dios como pastor que cuida y protege.
2. **🍽️ **Provisión**: Dios suplirá todas nuestras necesidades.
3. **🧭 **Guía**: Dios nos guía por sendas de justicia.
4. **🛡️ **Seguridad**: Incluso en el valle de sombra de muerte, Dios está con nosotros.
5. **🍷 **Bendición**: Dios nos colma de bendiciones y misericordia.
6. **🏠 **Comunión**: Promesa de morar en la casa de Dios por siempre.

---

#### 📌 **Aplicación práctica**

- **🌿 En tiempos de paz**: Agradecer a Dios por su provisión y cuidado.
- **🌑 En tiempos de dificultad**: Confiar en que Dios está con nosotros.
- **🧭 En decisiones importantes**: Buscar la guía de Dios.
- **🍽️ En momentos de celebración**: Reconocer que todas las bendiciones vienen de Dios.

---

#### 📌 **El Salmo 23 en la cultura popular**

- **🎵 **Canciones**: "The Lord is My Shepherd" (himnos cristianos).
- **📚 **Literatura**: Citado en obras como "El Gran Gatsby" de F. Scott Fitzgerald.
- **🎬 **Cine**: Usado en películas como "El Resplandor" de Stanley Kubrick.
- **📖 **Arte**: Ilustrado en manuscritos medievales y arte sacro.

---

#### 📚 **Fuentes y Referencias**

- **Biblia**: Salmo 23 (RVR60, NVI, LBLA)
- **Libros recomendados**:
  - "Salmos: El Cancionero de Israel" por William L. Holladay
  - "El Libro de los Salmos" por C.S. Lewis
  - "Salmos: Una Guía de Estudio" por Tremper Longman III
- **Recursos en línea**:
  - [Bible Gateway - Salmo 23](https://www.biblegateway.com/passage/?search=Salmo+23&version=RVR60)
  - [Blue Letter Bible - Salmo 23](https://www.blueletterbible.org/kjv/psa/23/1)

---

### 📝 **¿Qué más te gustaría saber sobre el Salmo 23?**

Puedes preguntar:
- "¿Qué significa 'vara y cayado' en el Salmo 23?"
- "¿Cómo se relaciona el Salmo 23 con el Nuevo Testamento?"
- "¿Qué otros salmos hablan de Dios como pastor?"
- "¿Cómo aplicar el Salmo 23 en la vida diaria?"
- "¿Qué dice la versión NVI del Salmo 23?"

---

*Este análisis es solo una introducción al Salmo 23. En una implementación real, el agente 'Pastor' buscaría en su base de conocimientos para proporcionar un análisis más profundo y contextualizado.*`;
    }

    function getFigurasResponse(question) {
        return `## 📚 Respuesta a: "${question}"

### 🔍 Pregunta Original
> ${question}

### 📖 Respuesta del Agente 'Pastor'

Las **figuras bíblicas** son personajes clave en la historia de la salvación. Aquí te presento un análisis de los **profetas mayores** y otras figuras importantes:

---

## 📌 **Los Profetas Mayores**

### 1. 📜 **Isaías**
- **📅 Período**: Siglo VIII a.C. (reinado de Uzías, Jotam, Acaz y Ezequías).
- **📖 Libro**: Isaías (66 capítulos).
- **🎯 Mensaje**: Juicio a Judá por su idolatría, pero también esperanza de salvación a través del Mesías.
- **🔮 Profecías clave**:
  - Nacimiento del Mesías (Isaías 7:14).
  - Sufrimiento del Siervo (Isaías 53).
  - Reino de paz (Isaías 2:2-4).
- **💡 Legado**: Uno de los profetas más citados en el Nuevo Testamento.

### 2. 📜 **Jeremías**
- **📅 Período**: Siglo VII-VI a.C. (reinado de Josías hasta la caída de Jerusalén).
- **📖 Libro**: Jeremías + Lamentaciones.
- **🎯 Mensaje**: Advertencia del juicio de Dios por la idolatría, pero también promesa de un nuevo pacto.
- **🔮 Profecías clave**:
  - Destrucción de Jerusalén (Jeremías 7:1-15).
  - Promesa del nuevo pacto (Jeremías 31:31-34).
  - Esperanza de restauración (Jeremías 29:10-14).
- **💡 Legado**: Conocido como "el profeta llorón" por su mensaje de juicio.

### 3. 📜 **Ezequiel**
- **📅 Período**: Siglo VI a.C. (exilio en Babilonia).
- **📖 Libro**: Ezequiel (48 capítulos).
- **🎯 Mensaje**: Juicio a Israel y Judá, pero también esperanza de restauración.
- **🔮 Visiones clave**:
  - Visiones de los querubines (Ezequiel 1).
  - Valle de huesos secos (Ezequiel 37:1-14).
  - Templo restaurado (Ezequiel 40-48).
- **💡 Legado**: Visiones apocalípticas influyeron en el libro de Apocalipsis.

### 4. 📜 **Daniel**
- **📅 Período**: Siglo VI a.C. (exilio en Babilonia).
- **📖 Libro**: Daniel (12 capítulos).
- **🎯 Mensaje**: Fieldad a Dios en medio de la persecución, y profecías sobre los reinos del mundo.
- **🔮 Profecías clave**:
  - La estatua de Daniel 2 (imperios mundiales).
  - El Hijo del Hombre (Daniel 7:13-14).
  - Las setenta semanas (Daniel 9:24-27).
- **💡 Legado**: Profecías apocalípticas y cronológicas.

---

## 📌 **Profetas Menores (selección)**

### 1. 📜 **Oseas**
- **📅 Período**: Siglo VIII a.C.
- **📖 Libro**: Oseas.
- **🎯 Mensaje**: Amor de Dios por Israel a pesar de su infidelidad (símbolo de la relación de Dios con su pueblo).
- **🔮 Mensaje clave**: "Mi pueblo fue destruido por falta de conocimiento" (Oseas 4:6).

### 2. 📜 **Joel**
- **📅 Período**: Siglo IX-VIII a.C.
- **📖 Libro**: Joel.
- **🎯 Mensaje**: Día del Señor y llamado al arrepentimiento.
- **🔮 Mensaje clave**: "Derramaré mi Espíritu sobre toda carne" (Joel 2:28).

### 3. 📜 **Amós**
- **📅 Período**: Siglo VIII a.C.
- **📖 Libro**: Amós.
- **🎯 Mensaje**: Juicio a Israel por injusticia social.
- **🔮 Mensaje clave**: "Buscad el bien, no el mal" (Amós 5:14).

### 4. 📜 **Jonás**
- **📅 Período**: Siglo VIII a.C.
- **📖 Libro**: Jonás.
- **🎯 Mensaje**: Misericordia de Dios hacia los ninivitas.
- **🔮 Mensaje clave**: Dios se compadece de los que se arrepienten.

---

## 📌 **Otras Figuras Importantes**

### 1. 👑 **Moisés**
- **📅 Período**: Siglo XIII a.C.
- **📖 Rol**: Líder, legislador y mediador del pacto.
- **🎯 Logros**:
  - Liberó a Israel de Egipto.
  - Recibió los Diez Mandamientos.
  - Dirigió al pueblo en el desierto.
- **💡 Legado**: Símbolo de liderazgo y obediencia a Dios.

### 2. 👑 **David**
- **📅 Período**: Siglo XI a.C.
- **📖 Rol**: Rey, poeta y guerrero.
- **🎯 Logros**:
  - Unificó las tribus de Israel.
  - Estableció Jerusalén como capital.
  - Escribió la mayoría de los Salmos.
- **💡 Legado**: "Hombre conforme al corazón de Dios" (Hechos 13:22).

### 3. 👨‍🏫 **Pablo**
- **📅 Período**: Siglo I d.C.
- **📖 Rol**: Apóstol de los gentiles.
- **🎯 Logros**:
  - Escribió 13 cartas del Nuevo Testamento.
  - Llevó el evangelio a Europa.
  - Estableció iglesias en Asia Menor.
- **💡 Legado**: Teología cristiana sistematizada.

### 4. 👨‍🏫 **Pedro**
- **📅 Período**: Siglo I d.C.
- **📖 Rol**: Apóstol y líder de la iglesia primitiva.
- **🎯 Logros**:
  - Predicó en Pentecostés.
  - Escribió 2 cartas del Nuevo Testamento.
  - Lideró la iglesia en Jerusalén.
- **💡 Legado**: Símbolo de fe y arrepentimiento.

---

## 📌 **Figuras Femeninas Importantes**

### 1. 👩 **María (Madre de Jesús)**
- **📅 Período**: Siglo I a.C.
- **📖 Rol**: Madre del Mesías.
- **🎯 Importancia**:
  - "Bendita tú entre las mujeres" (Lucas 1:42).
  - Símbolo de humildad y obediencia.
  - Intercesora en bodas de Caná (Juan 2:1-11).

### 2. 👩 **Débora**
- **📅 Período**: Siglo XII a.C.
- **📖 Rol**: Jueza y profetisa.
- **🎯 Logros**:
  - Dirigió a Israel en la batalla contra Jabín.
  - Escribió el Cántico de Débora (Jueces 5).
  - Símbolo de liderazgo femenino.

### 3. 👩 **Rut**
- **📅 Período**: Siglo XII a.C.
- **📖 Rol**: Moabita que se convirtió al Dios de Israel.
- **🎯 Historia**:
  - Se casó con Booz.
  - Ancestra de David y Jesús.
  - Símbolo de lealtad y redención.

### 4. 👩 **Ester**
- **📅 Período**: Siglo V a.C.
- **📖 Rol**: Reina de Persia que salvó a los judíos.
- **🎯 Historia**:
  - Intercedió por su pueblo ante el rey Asuero.
  - Institución de la fiesta de Purim.
  - Símbolo de valentía y providencia divina.

---

## 📌 **Figuras del Nuevo Testamento**

### 1. 👨‍🏫 **Jesús**
- **📅 Período**: Siglo I d.C.
- **📖 Rol**: Hijo de Dios, Salvador, Maestro.
- **🎯 Logros**:
  - Fundó la iglesia.
  - Murió en la cruz por los pecados.
  - Resucitó al tercer día.
- **💡 Legado**: Redención de la humanidad.

### 2. 👨‍🏫 **Juan el Bautista**
- **📅 Período**: Siglo I d.C.
- **📖 Rol**: Precursor de Jesús.
- **🎯 Mensaje**: "Arrepentíos, porque el reino de los cielos se ha acercado" (Mateo 3:2).
- **💡 Legado**: Preparó el camino para el Mesías.

### 3. 👩 **María Magdalena**
- **📅 Período**: Siglo I d.C.
- **📖 Rol**: Seguidora de Jesús.
- **🎯 Importancia**:
  - Primera en ver a Jesús resucitado (Juan 20:11-18).
  - Símbolo de redención y gratitud.

### 4. 👨‍🏫 **Timoteo**
- **📅 Período**: Siglo I d.C.
- **📖 Rol**: Discípulo y colaborador de Pablo.
- **🎯 Importancia**:
  - Joven líder en la iglesia.
  - Autor de 2 cartas del Nuevo Testamento.
  - Símbolo de fe y perseverancia.

---

## 📚 **Fuentes y Referencias**

- **Biblia**: Versión Reina Valera 1960
- **Libros recomendados**:
  - "Grandes Héroes de la Biblia" por Charles R. Swindoll
  - "Personajes Bíblicos" por William MacDonald
  - "Nelson's New Illustrated Bible Dictionary"
- **Recursos en línea**:
  - [Bible Gateway](https://www.biblegateway.com/)
  - [Blue Letter Bible](https://www.blueletterbible.org/)
  - [Bible Hub](https://biblehub.com/)

---

### 📝 **¿Qué más te gustaría saber sobre estas figuras?**

Puedes preguntar:
- "¿Qué profetizó Isaías sobre el Mesías?"
- "¿Cómo fue la vida de David como rey?"
- "¿Qué enseñó Jesús sobre el amor al prójimo?"
- "¿Quiénes fueron los jueces de Israel?"
- "¿Qué dice la Biblia sobre la mujer en la iglesia?"

---

*Este es solo un resumen de las figuras bíblicas más importantes. En una implementación real, el agente 'Pastor' buscaría en su base de conocimientos para proporcionar información más detallada y específica sobre cada figura.*`;
    }

    function getGenericResponse(question) {
        return `## 📚 Respuesta a: "${question}"

### 🔍 Pregunta Original
> ${question}

### 📖 Respuesta del Agente 'Pastor'

Gracias por tu pregunta. Aunque no es específica de un tema bíblico o teológico, intentaré proporcionarte una respuesta útil basada en principios bíblicos generales.

---

#### 📌 **Reflexión sobre tu pregunta**

"${question}"

---

#### 📌 **Principios bíblicos relacionados**

1. **📖 **Buscar sabiduría**:
   > "Si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada." (Santiago 1:5)

2. **🔍 **Investigar y estudiar**:
   > "Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí." (Juan 5:39)

3. **🤔 **Pensar antes de hablar**:
   > "El que tiene conocimiento usa pocas palabras; y el hombre de entendimiento es de espíritu sereno." (Proverbios 17:27)

---

#### 📌 **¿Qué dice la Biblia sobre...?**

Si tu pregunta es sobre un tema específico, puedes reformularla para obtener una respuesta más precisa. Por ejemplo:

- **📚 **Sobre la Biblia**: "¿Qué dice la Biblia sobre el perdón?"
- **💡 **Sobre la vida cristiana**: "¿Cómo vivir una vida que agrade a Dios?"
- **🌍 **Sobre la creación**: "¿Qué dice Génesis sobre la creación del hombre?"
- **🙏 **Sobre la oración**: "¿Cómo orar según la Biblia?"

---

#### 📌 **Recursos para encontrar respuestas**

1. **📖 **Concordancia bíblica**: Para buscar pasajes específicos.
2. **🔍 **Comentarios bíblicos**: Para entender el contexto histórico y teológico.
3. **📚 **Diccionarios bíblicos**: Para definir términos clave.
4. **💻 **Herramientas en línea**:
   - [Bible Gateway](https://www.biblegateway.com/)
   - [Blue Letter Bible](https://www.blueletterbible.org/)
   - [Bible Hub](https://biblehub.com/)

---

#### 📌 **Ejemplo de preguntas específicas**

Si quieres una respuesta más detallada, puedes preguntar:

- "¿Qué dice la Biblia sobre el amor?"
- "¿Cómo puedo encontrar paz en medio de las dificultades?"
- "¿Qué enseña la Biblia sobre el dinero?"
- "¿Cómo puedo crecer espiritualmente?"
- "¿Qué dice Jesús sobre el perdón?"

---

### 📝 **¿Qué más te gustaría saber?**

Si tienes una pregunta específica sobre la Biblia, teología, cristianismo o cualquier tema espiritual, **¡avísame!** Estoy aquí para ayudarte a encontrar respuestas basadas en la Palabra de Dios.

---

*Recuerda: La Biblia es un libro de sabiduría y guía para la vida. Si tienes dudas, siempre puedes preguntar y buscar respuestas en sus páginas.*`;
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
            alert('⚠️ No hay respuesta para descargar.');
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
        
        alert('✅ Respuesta descargada correctamente como archivo de texto.');
    }

    // Función para limpiar historial
    function clearHistory() {
        if (confirm('⚠️ ¿Estás seguro de que quieres limpiar el historial? Esta acción no se puede deshacer.')) {
            localStorage.removeItem('pastorHistory');
            historyList.innerHTML = '<li style="color: #999; font-style: italic;">Historial limpiado. ¡Haz tu primera pregunta!</li>';
            alert('✅ Historial limpiado correctamente.');
        }
    }

    // Animación de carga para respuestas
    function showLoading() {
        responseContainer.innerHTML = `
            <div class="loading">
                <p>🔍 Buscando respuesta en el agente "Pastor"...<br>
                <span style="font-size: 12px; color: #666;">Esto puede tardar unos segundos.</span></p>
                <div class="spinner"></div>
            </div>
        `;
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
        .error-message {
            background-color: #ffebee;
            border-left: 4px solid #f44336;
            padding: 20px;
            border-radius: 4px;
            color: #d32f2f;
        }
        .error-message h3 {
            margin-top: 0;
            color: #d32f2f;
        }
    `;
    document.head.appendChild(style);
});