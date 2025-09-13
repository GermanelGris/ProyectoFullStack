
document.getElementById('btn-login').addEventListener('click', (event) => {
            var m_error = [];

            var email = document.getElementById('email').value.trim();
            var password = document.getElementById('password').value;

            if (email.length === 0)
                m_error.push('\n El correo no puede ir vacío');
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                m_error.push('\n Debe ingresar un correo válido (ej: usuario@dominio.com)');

            if (password.length < 1)
                m_error.push('\n Debe ingresar contraseña');

             if (m_error.length > 0) {
                alert(`¡Hubo un error!\n  ${m_error}`);
                event.preventDefault();
            } else {
               window.location.href = "../../index.html";
            }
        });