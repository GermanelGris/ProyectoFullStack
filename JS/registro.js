//const $ = (sel) => document.querySelector(sel);
const $ = (sel) => document.querySelector(sel);

var btnCrearCuenta = document.querySelector('btn-crear-cuenta');


document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    const strengthLevels = ['Muy débil', 'Débil', 'Media', 'Fuerte', 'Muy fuerte'];
    const strengthColors = ['#ff4757', '#ff6b7a', '#ffa502', '#2ed573', '#1dd1a1'];
    
    strengthBar.style.width = `${(strength / 4) * 100}%`;
    strengthBar.style.backgroundColor = strengthColors[strength];
    strengthText.textContent = strengthLevels[strength];
});

   
document.getElementById('btn-crear-cuenta').addEventListener('click', (event) => {
            var m_error = [];

            var nombre =document.getElementById('firstName').value.trim();
            var apellido = document.getElementById('lastName').value.trim();
            var email = document.getElementById('email').value.trim();
            var fono = document.getElementById('phone').value.trim();
            var f_nac = document.getElementById('birthDate').value.trim();
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

         
            if (nombre.length <= 2)
                m_error.push('\n Debe ingresar un nombre correcto');
            if (nombre.length === 0)
                m_error.push('\n El campo Nombre no puede ir vacío');
            if (/[0-9]/.test(nombre))
                m_error.push('\n El nombre no debe contener números');
            if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(nombre))
                m_error.push('\n El nombre solo debe contener letras');

            if (apellido.length <= 2)
                m_error.push('\n Debe ingresar un apellido correcto');
            if (apellido.length === 0)
                m_error.push('\n El campo Apellido no puede ir vacío');
            if (/[0-9]/.test(apellido))
                m_error.push('\n El apellido no debe contener números');
            if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(apellido))
                m_error.push('\n El apellido solo debe contener letras');

            if (email.length === 0)
                m_error.push('\n El correo no puede ir vacío');
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                m_error.push('\n Debe ingresar un correo válido (ej: usuario@dominio.com)');

            if (fono.length === 0)
                m_error.push('\n El teléfono no puede ir vacío');
            else if (!/^[0-9]{8,15}$/.test(fono))
                m_error.push('\n El teléfono debe contener solo números y tener entre 8 y 15 dígitos');

            if (f_nac.length === 0) {
                m_error.push('\n Debe ingresar su fecha de nacimiento');
            } 

            if (password.length < 8)
                m_error.push('\n La contraseña debe tener al menos 8 caracteres');
            
            if (confirmPassword.length === 0)
                m_error.push('\n Debe confirmar la contraseña');
            else if (password !== confirmPassword)
                m_error.push('\n Las contraseñas no coinciden');

             if (m_error.length > 0) {
                alert(`¡Hubo un error!\n  ${m_error}`);
                event.preventDefault();
            } else {
                alert('¡Registro exitoso!');
                //window.location.href = "../../index.html";
            }
        });


