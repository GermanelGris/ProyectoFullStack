document.getElementById('btn-iniciar').addEventListener('click', () => {
    window.location.href = "PAGES/USUARIOS/login.html";
});

document.getElementById('btn-Registro').addEventListener('click', () => {
    window.location.href = "PAGES/USUARIOS/registro.html";
});


const inputSalida = document.getElementById('f-salida');
    const inputRegreso = document.getElementById('f-regreso');

//inputSalida.addEventListener('select', () => {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const anio = hoy.getFullYear();
    const fechaHoy = `${dia}-${mes}-${anio}`;

    

//});

inputSalida.addEventListener('change', () => {
   
    const fechaSalida = inputSalida.value;
    inputRegreso.min = fechaSalida;
});

document.addEventListener('DOMContentLoaded', () => {

    const inputOrigen = document.getElementById('origen');
    const inputDestino = document.getElementById('destino');
    const sugerenciasOrigen = document.getElementById('sugerencias-origen');
    const sugerenciasDestino = document.getElementById('sugerencias-destino');
    
    inputSalida.min = fechaHoy;

    let lugaresTuristicos = [];

    // Función para cargar los datos del JSON de lugares turísticos
    async function cargarLugaresTuristicos() {
        try {
            // Asegúrate de que la ruta a tu JSON es correcta
            const respuesta = await fetch('/JS/lugares-turisticos.json'); 
            lugaresTuristicos = await respuesta.json();
        } catch (error) {
            console.error('Error al cargar los lugares turísticos:', error);
        }
    }

    // Función para mostrar las sugerencias
    function mostrarSugerencias(input, lista, valor) {
        lista.innerHTML = '';
        if (valor.length === 0) {
            return;
        }
        
        // La lógica de filtrado se ha actualizado para los campos del JSON de turismo
        const coincidencias = lugaresTuristicos.filter(lugar => 
            lugar.nombre.toLowerCase().startsWith(valor) || 
            lugar.ciudad.toLowerCase().startsWith(valor) ||
            lugar.pais.toLowerCase().startsWith(valor)
        );

        coincidencias.forEach(lugar => {
            const li = document.createElement('li');
            li.textContent = `${lugar.nombre}, ${lugar.ciudad}, ${lugar.pais}`;
            li.addEventListener('click', () => {
                input.value = lugar.nombre;
                lista.innerHTML = '';
            });
            lista.appendChild(li);
        });
    }

    // Event listeners para los inputs
    inputOrigen.addEventListener('keyup', (e) => {
        mostrarSugerencias(inputOrigen, sugerenciasOrigen, e.target.value.toLowerCase());
    });

    inputDestino.addEventListener('keyup', (e) => {
        mostrarSugerencias(inputDestino, sugerenciasDestino, e.target.value.toLowerCase());
    });

    // Ocultar sugerencias si se hace clic fuera del input
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-field')) {
            sugerenciasOrigen.innerHTML = '';
            sugerenciasDestino.innerHTML = '';
        }
    });

    // Llama a la función para cargar los datos cuando la página se carga
    cargarLugaresTuristicos();
});

document.getElementById('search-btn').addEventListener('click', (event) => {
            var m_error = [];

            var origen = document.getElementById('origen').value.trim();
            var destino = document.getElementById('destino').value.trim();
            var f_salida = document.getElementById('f-salida').value;
           
            if (origen.length === 0)
                m_error.push('\n El Origen no puede ir vacío');
            
            if (destino.length === 0)
                m_error.push('\n El Destino no puede ir vacío');
            if (f_salida.length === 0)
                m_error.push('\n debe Elegir una fecha de Salida');
            
            if (m_error.length > 0) {
                alert(`¡Hubo un error!\n  ${m_error}`);
                event.preventDefault();
            } else {
               window.location.href = "index.html";
            }
});