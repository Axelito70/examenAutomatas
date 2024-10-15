// Diccionario con 15 palabras y sus sinónimos
const diccionario = {
    "feliz": ["contento", "alegre"],
    "triste": ["deprimido", "melancólico"],
    "rapido": ["veloz", "ligero"],
    "lento": ["pausado", "despacio"],
    "fuerte": ["robusto", "potente"],
    "debil": ["frágil", "endeble"],
    "inteligente": ["listo", "sabio"],
    "tonto": ["necio", "torpe"],
    "grande": ["enorme", "gigante"],
    "pequeño": ["chico", "diminuto"],
    "caliente": ["ardiente", "hirviente"],
    "frio": ["helado", "gélido"],
    "oscuro": ["tenebroso", "sombrío"],
    "claro": ["luminoso", "brillante"],
    "dificil": ["complicado", "arduo"]
};

// Llenar el selector con palabras del diccionario
const palabraDiccionarioSelect = document.getElementById('palabraDiccionario');

window.onload = () => {
    Object.keys(diccionario).forEach(palabra => {
        const option = document.createElement('option');
        option.value = palabra;
        option.textContent = palabra;
        palabraDiccionarioSelect.appendChild(option);
    });
};

// Manejo de eventos para buscar y reemplazar palabras
const buscarBtn = document.getElementById('buscarBtn');
const reemplazarBtn = document.getElementById('reemplazarBtn');
const textoInput = document.getElementById('textoInput');
const sinonimosLista = document.getElementById('sinonimosLista');
const resultadoSinonimos = document.getElementById('resultadoSinonimos');

// Buscar sinónimos de la palabra seleccionada
buscarBtn.addEventListener('click', () => {
    const palabraSeleccionada = palabraDiccionarioSelect.value.toLowerCase();
    if (palabraSeleccionada && diccionario[palabraSeleccionada]) {
        sinonimosLista.innerHTML = ''; // Limpiar lista de sinónimos anteriores
        diccionario[palabraSeleccionada].forEach(sinonimo => {
            const opcion = document.createElement('option');
            opcion.value = sinonimo;
            opcion.textContent = sinonimo;
            sinonimosLista.appendChild(opcion);
        });
        resultadoSinonimos.classList.remove('remplazar'); // Usamos 'remplazar' en lugar de 'd-none'
    } else {
        alert("Selecciona una palabra válida del diccionario.");
    }
});

// Reemplazar la palabra en el texto
reemplazarBtn.addEventListener('click', () => {
    const palabraSeleccionada = palabraDiccionarioSelect.value.toLowerCase();
    const sinonimoSeleccionado = sinonimosLista.value;
    const textoActual = textoInput.value;

    // Reemplazar todas las ocurrencias de la palabra seleccionada con el sinónimo seleccionado
    const textoModificado = textoActual.replaceAll(palabraSeleccionada, sinonimoSeleccionado);
    textoInput.value = textoModificado;

    // Ocultar la lista de sinónimos después del reemplazo
    resultadoSinonimos.classList.add('remplazar'); // Usamos 'remplazar' en lugar de 'd-none'
    palabraDiccionarioSelect.value = ''; // Limpiar el select
});
