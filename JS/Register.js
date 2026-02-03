// API URL
const API_URL = 'http://localhost:3000';
// Dom elements
const registerForm = document.getElementById('registerForm');
const nombreInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signBtn = document.getElementById('signBtn');

// listenning form send
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get values
    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate that the fields are not empty
    if (!nombre || !email || !password) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // Validate email format
    if (!validarEmail(email)) {
        alert('Por favor, ingresa un email válido');
        return;
    }

    // Verify that the password has at least 8 characters
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return;
    }

    try {
        // Check if the email already exists
        const usuarioExistente = await fetch(`${API_URL}/usuarios?email=${email}`);
        const usuarios = await usuarioExistente.json();

        if (usuarios.length > 0) {
            alert('El email ya está registrado');
            return;
        }

        // create a new user
        const nuevoUsuario = {
            id: generarId(),
            nombre: nombre,
            email: email,
            password: password,
            rol: 'usuario',
            fechaRegistro: new Date().toISOString()
        };

        // send to API
        const response = await fetch(`${API_URL}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
        });

        if (response.ok) {
            alert('¡Registro exitoso! Redirigiendo al login...');
            // cleaner
            registerForm.reset();
            // Rredirection to login afther 1.5 seg
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1500);
        } else {
            alert('Error al registrar. Intenta de nuevo.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión. Asegúrate de que json-server esté corriendo.');
    }
});

// function to validations email



// function to create id unique
function generarId() {
    return Math.random().toString(36).substr(2, 9);
}