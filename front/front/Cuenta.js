// frontend/Cuenta.js

document.addEventListener('DOMContentLoaded', () => {
  const cuentaData = JSON.parse(localStorage.getItem('cuentaData'));

  if (cuentaData) {
    document.getElementById('numeroCuenta').textContent = cuentaData.numeroCuenta;
    document.getElementById('saldo').textContent = cuentaData.saldo;
    document.getElementById('tipoCuenta').textContent = cuentaData.tipoCuenta;
  } 
});

function cerrarSesion() {
  localStorage.removeItem('cuentaData');
  alert('Sesión cerrada correctamente.');
  window.location.href = 'Login.html'; 
}
