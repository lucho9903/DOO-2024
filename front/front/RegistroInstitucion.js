// Función para obtener los tipos de institución
const obtenerTiposDeInstitucion = async () => {
  try {
    const response = await fetch("http://localhost:8080/tipoInstitucion/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Error al obtener los tipos de institución:', response.statusText);
      return;
    }

    const data = await response.json();
    const tiposDeInstitucion = data.datos;

    if (!Array.isArray(tiposDeInstitucion)) {
      console.error('La propiedad "datos" de la respuesta no es un arreglo:', tiposDeInstitucion);
      return;
    }

    const selectTipoInstitucion = document.getElementById("selectTipoInstitucion");

    selectTipoInstitucion.innerHTML = '<option value="">Seleccione una opción</option>';

    tiposDeInstitucion.forEach(tipo => {
      const option = document.createElement("option");
      option.value = tipo.id;
      option.textContent = tipo.nombre; 
      selectTipoInstitucion.appendChild(option);
    });
  } catch (error) {
    console.error('Error de red al obtener los tipos de institución:', error);
  }
};

// Inicializar la obtención de tipos de institución al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  obtenerTiposDeInstitucion();
});

// Manejador del evento click del botón de registro
document.getElementById("bRegistro").addEventListener("click", async (evento) => {
  evento.preventDefault(); 
  if (validarFormulario()) {
    await registrarInstitucion();
  }
});

// Manejador del evento click del botón de cancelar
document.getElementById("bCancelar").addEventListener("click", () => {
  window.location.href = 'cuenta.html'; // Redirigir a cuenta.html
});

// Validar el correo
const validarCorreo = (correo) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
};

// Validar el formulario
const validarFormulario = () => {
  const nombreInstitucion = document.getElementById("nombreInstitucion").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const tipoInstitucion = document.getElementById("selectTipoInstitucion").value.trim();

  if (nombreInstitucion === "") {
    alert("El nombre de la institución no puede estar vacío.");
    return false;
  }

  if (nombreInstitucion.length > 100) {
    alert("El nombre de la institución no puede tener más de 100 caracteres.");
    return false;
  }

  if (correo === "") {
    alert("El correo de la institución no puede estar vacío.");
    return false;
  }

  if (correo.length > 300) {
    alert("El correo de la institución no puede tener más de 300 caracteres.");
    return false;
  }

  if (!validarCorreo(correo)) {
    alert("El formato del correo es inválido.");
    return false;
  }

  if (tipoInstitucion === "") {
    alert("Debe seleccionar un tipo de institución.");
    return false;
  }

  return true;
};

// Registrar la institución
const registrarInstitucion = async () => {
  const campos = {
    id: "",
    nombre: document.getElementById("nombreInstitucion").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    tipoInstitucion: {
      id: document.getElementById("selectTipoInstitucion").value.trim()
    }
  };

  console.log("Datos a enviar:", campos);

  try {
    const response = await fetch("http://localhost:8080/institucion/registro", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campos)
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Respuesta de la API:', data);
      alert('La institución se ha registrado correctamente.');
    } else {
      // Muestra mensaje de error específico
      if (data && data.mensaje) {
        alert(`Error: ${data.mensaje}`);
      } else {
        alert('Error en la solicitud: ya existe una institución con este nombre o correo ' + response.statusText);
      }
    }
  } catch (error) {
    console.error('Error de red:', error);
    alert('Error de red: ' + error.message);
  }
};
