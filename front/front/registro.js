const obtenerTiposDeCuenta = async () => {
  try {
    const response = await fetch("http://localhost:8080/tipoCuenta", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Error al obtener los tipos de cuenta:', response.statusText);
      return;
    }

    const data = await response.json();
    const tiposDeCuenta = data.datos;

    if (!Array.isArray(tiposDeCuenta)) {
      console.error('La propiedad "datos" de la respuesta no es un arreglo:', tiposDeCuenta);
      return;
    }

    const selectTipoCuenta = document.getElementById("selectTipoCuenta");
    selectTipoCuenta.innerHTML = '<option value="">Seleccione una opción</option>';

    tiposDeCuenta.forEach(tipo => {
      const option = document.createElement("option");
      option.value = tipo.id;
      option.textContent = tipo.nombre; 
      selectTipoCuenta.appendChild(option);
    });
  } catch (error) {
    console.error('Error de red al obtener los tipos de cuenta:', error);
  }
};

const registrarCuenta = async () => {
  const pin = document.getElementById("pin").value;
  const confpin = document.getElementById("confpin").value;
  const idAfiliado = document.getElementById("idAfiliado").value;
  const selectTipoCuenta = document.getElementById("selectTipoCuenta").value;

  // Validar que el PIN tenga exactamente 4 dígitos y solo contenga números
  const pinRegex = /^[0-9]{4}$/;
  if (!pinRegex.test(pin)) {
    alert("El PIN debe tener exactamente 4 dígitos numéricos.");
    return;
  }

  if (pin !== confpin) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  if (selectTipoCuenta === "") {
    alert("Debe seleccionar un tipo de cuenta.");
    return;
  }

  let campos = {
    id: "",
    numeroCuenta: "",
    pin: pin,
    saldo: 0.0,
    afiliado: {
      numeroIdAfiliado: idAfiliado
    },
    tipoCuenta: {
      id: selectTipoCuenta
    }
  };

  console.log("Datos a enviar:", campos);

  try {
    const response = await fetch("http://localhost:8080/api/v1/cuenta/registro", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campos)
    });

    if (!response.ok) {
      console.error('Error en la solicitud:', response.statusText);
      alert("No se pudo crear la cuenta debido a un error ->(El usuario no esta registrado en la institucion o los datos son incorrectos)");
      return;
    }

    const data = await response.json();
    console.log('Respuesta de la API:', data);
    
    if (data.error) {
      alert("No se pudo crear la cuenta: " + data.error.message);
    } else {
      alert("La cuenta se ha creado exitosamente.");
    }
  } catch (error) {
    console.error('Error de red:', error);
    alert("No se pudo crear la cuenta debido a un error de red.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  obtenerTiposDeCuenta();
});

document.getElementById("bRegistro").addEventListener("click", async (evento) => {
  evento.preventDefault(); 
  await registrarCuenta();
});
