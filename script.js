document.addEventListener("DOMContentLoaded", function () {
    const contenido = document.getElementById('contenido');

    // Funciones para mostrar las secciones
    function mostrarInicio() {
        contenido.innerHTML = `
            <div class="container">
                <h1>Comparación entre el Cifrado César y el Cifrado Escítala</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Criterio</th>
                            <th>Cifrado César</th>
                            <th>Cifrado Escítala</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Método de Cifrado:</strong></td>
                            <td>Cifrado por sustitución. Cada letra es desplazada un número fijo de posiciones en el alfabeto.</td>
                            <td>Cifrado por transposición. El orden de las letras es reorganizado en función de un patrón geométrico.</td>
                        </tr>
                        <tr>
                            <td><strong>Complejidad:</strong></td>
                            <td>Muy simple y fácil de entender, pero fácil de descifrar.</td>
                            <td>Relativamente simple, pero requiere una clave física, lo que añade resistencia.</td>
                        </tr>
                        <tr>
                            <td><strong>Clave:</strong></td>
                            <td>Número de desplazamiento entre 1 y 25.</td>
                            <td>Diámetro de la varilla, que define cuántas columnas tendrá el mensaje.</td>
                        </tr>
                        <tr>
                            <td><strong>Vulnerabilidad a Ataques:</strong></td>
                            <td>Vulnerable a ataques de fuerza bruta y análisis de frecuencia.</td>
                            <td>Menos vulnerable al análisis de frecuencia, pero susceptible a ataques por permutaciones.</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Análisis de Seguridad</h2>
      <p><strong>Cifrado César:</strong></p>
      <ul>
        <li><strong>Fuerza Bruta:</strong> Solo hay 25 posibles desplazamientos, por lo que un atacante puede probar todas las claves en cuestión de segundos.</li>
        <li><strong>Análisis de Frecuencia:</strong> Como las letras originales se mantienen y solo cambian su posición en el alfabeto, es susceptible al análisis de frecuencia. Letras comunes como "E" o "A" en un idioma son fáciles de identificar y decodificar.</li>
      </ul>

      <p><strong>Cifrado Escítala:</strong></p>
      <ul>
        <li><strong>Fuerza Bruta:</strong> Un ataque de fuerza bruta implicaría probar todas las posibles longitudes de la varilla, lo que requiere más tiempo que el cifrado César, pero no mucho si el mensaje no es muy largo.</li>
        <li><strong>Seguridad Limitada:</strong> Aunque la transposición complica el análisis de frecuencia, no añade una capa significativa de seguridad moderna. Un análisis detallado de permutaciones o la obtención de patrones a partir de mensajes largos puede descifrar el texto.</li>
      </ul>
            </div>
        `;
    }

    function mostrarCifradoCesar() {
        contenido.innerHTML = `
            <div class="container">
                <h2>Cifrado César</h2>
                <input type="text" id="mensajeCesar" placeholder="Mensaje">
                <input type="number" id="desplazamientoCesar" placeholder="Desplazamiento">
                <button id="btnCifrarCesar">Cifrar</button>
                <button id="btnDescifrarCesar">Descifrar</button>
                <h3>Resultado:</h3>
                <textarea id="resultadoCesar" readonly></textarea>
                <button id="btnCopiarCesar">Copiar</button>
                <button id="btnInfoCesar">¿Cómo funciona el Cifrado César?</button>
                <div id="infoCesar" style="display:none;">
                    <h4>¿Cómo funciona el Cifrado César?</h4>
                    <p>El cifrado César es un método de cifrado por sustitución que desplaza cada letra del alfabeto un número fijo de posiciones.</p>
                    <ul className="aligned-list">
            <li>
              <strong>Desplazamiento:</strong> Se elige un número entero que determinará cuántas posiciones se desplazará cada letra.
            </li>
            <li>
              <strong>Alfabeto:</strong> Si se llega al final del alfabeto, el desplazamiento continúa desde el principio.
            </li>
            <li>
              <strong>Cifrado:</strong> Para cifrar un mensaje, se aplica el desplazamiento y se sustituye por la letra resultante.
            </li>
            <li>
              <strong>Descifrado:</strong> Para descifrar, se aplica el desplazamiento en la dirección opuesta.
            </li>
          </ul>
                </div>
            </div>
        `;

        // Agregar funcionalidad a los botones
        document.getElementById('btnCifrarCesar').onclick = cifrarCesar;
        document.getElementById('btnDescifrarCesar').onclick = descifrarCesar;
        document.getElementById('btnCopiarCesar').onclick = copiarCesar;
        document.getElementById('btnInfoCesar').onclick = function () {
            const info = document.getElementById('infoCesar');
            info.style.display = info.style.display === 'none' ? 'block' : 'none';
        };
    }

    function mostrarCifradoEscitala() {
        contenido.innerHTML = `
            <div class="container">
                <h2>Cifrado Escítala</h2>
                <input type="text" id="mensajeEscitala" placeholder="Mensaje">
                <input type="number" id="columnasEscitala" placeholder="Columnas">
                <button id="btnCifrarEscitala">Cifrar</button>
                <button id="btnDescifrarEscitala">Descifrar</button>
                <h3>Resultado:</h3>
                <textarea id="resultadoEscitala" readonly></textarea>
                <button id="btnCopiarEscitala">Copiar</button>
                <button id="btnInfoEscitala">¿Cómo funciona el Cifrado Escítala?</button>
                <div id="infoEscitala" style="display:none;">
                    <h4>¿Cómo funciona el Cifrado Escítala?</h4>
                    <p>El Cifrado Escítala es un método de cifrado por transposición de letras utilizado en la antigüedad.</p>
                    <ul className="aligned-list">
            <li>
              <strong>Herramienta:</strong> Se requiere una varilla con un diámetro específico.
            </li>
            <li>
              <strong>Escritura:</strong> El mensaje se enrolla alrededor de la varilla y se escribe en filas.
            </li>
            <li>
              <strong>Lectura:</strong> Se lee verticalmente en lugar de horizontalmente.
            </li>
            <li>
              <strong>Descifrado:</strong> El receptor necesita una varilla del mismo diámetro para descifrar el mensaje.
            </li>
          </ul>
                </div>
            </div>
        `;

        // Agregar funcionalidad a los botones
        document.getElementById('btnCifrarEscitala').onclick = cifrarEscitala;
        document.getElementById('btnDescifrarEscitala').onclick = descifrarEscitala;
        document.getElementById('btnCopiarEscitala').onclick = copiarEscitala;
        document.getElementById('btnInfoEscitala').onclick = function () {
            const info = document.getElementById('infoEscitala');
            info.style.display = info.style.display === 'none' ? 'block' : 'none';
        };
    }

    function cifrarCesar() {
        const mensaje = document.getElementById('mensajeCesar').value;
        const desplazamiento = parseInt(document.getElementById('desplazamientoCesar').value);
        let resultado = '';

        for (let i = 0; i < mensaje.length; i++) {
            let charCode = mensaje.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                resultado += String.fromCharCode(((charCode - 65 + desplazamiento) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                resultado += String.fromCharCode(((charCode - 97 + desplazamiento) % 26) + 97);
            } else {
                resultado += mensaje[i];
            }
        }
        document.getElementById('resultadoCesar').value = resultado;
    }

    function descifrarCesar() {
        const mensaje = document.getElementById('mensajeCesar').value;
        const desplazamiento = parseInt(document.getElementById('desplazamientoCesar').value);
        let resultado = '';

        for (let i = 0; i < mensaje.length; i++) {
            let charCode = mensaje.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                resultado += String.fromCharCode(((charCode - 65 - desplazamiento + 26) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                resultado += String.fromCharCode(((charCode - 97 - desplazamiento + 26) % 26) + 97);
            } else {
                resultado += mensaje[i];
            }
        }
        document.getElementById('resultadoCesar').value = resultado;
    }

    function copiarCesar() {
        const resultado = document.getElementById('resultadoCesar').value;
        navigator.clipboard.writeText(resultado).then(() => {
            alert('Resultado copiado al portapapeles');
        });
    }

    function cifrarEscitala() {
        const mensaje = document.getElementById('mensajeEscitala').value;
        const columnas = parseInt(document.getElementById('columnasEscitala').value);
        let resultado = '';
        const rows = Math.ceil(mensaje.length / columnas);

        for (let col = 0; col < columnas; col++) {
            for (let row = 0; row < rows; row++) {
                const index = row * columnas + col;
                if (index < mensaje.length) {
                    resultado += mensaje[index];
                }
            }
        }
        document.getElementById('resultadoEscitala').value = resultado;
    }

    function descifrarEscitala() {
        const mensaje = document.getElementById('mensajeEscitala').value;
        const columnas = parseInt(document.getElementById('columnasEscitala').value);
        const rows = Math.ceil(mensaje.length / columnas);
        let resultado = new Array(mensaje.length).fill('');
        let k = 0;

        for (let col = 0; col < columnas; col++) {
            for (let row = 0; row < rows; row++) {
                const index = row * columnas + col;
                if (index < mensaje.length) {
                    resultado[index] = mensaje[k++];
                }
            }
        }
        document.getElementById('resultadoEscitala').value = resultado.join('');
    }

    function copiarEscitala() {
        const resultado = document.getElementById('resultadoEscitala').value;
        navigator.clipboard.writeText(resultado).then(() => {
            alert('Resultado copiado al portapapeles');
        });
    }

    // Inicializar la sección de inicio
    mostrarInicio();

    // Agregar eventos a los botones de navegación
    document.getElementById('btnInicio').onclick = mostrarInicio;
    document.getElementById('btnCesar').onclick = mostrarCifradoCesar;
    document.getElementById('btnEscitala').onclick = mostrarCifradoEscitala;
});
