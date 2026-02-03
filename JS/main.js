
// API URL
const API_URL = 'http://localhost:3000';

// // Dom Elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signInBtn = document.getElementById('signInBtn');

// verify user
window.addEventListener('load', () => {
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    if (usuarioAutenticado) {
        // Redirigir a la página principal o dashboard
        window.location.href = '../admin-dashboard.html';
    }
});

// listenning event 
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get value
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // validate filled fields
    if (!email || !password) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // change buttom to state
    signInBtn.disabled = true;
    signInBtn.textContent = 'Iniciando sesión...';

    try {
        // find user for email
        const response = await fetch(`${API_URL}/usuarios?email=${email}`);
        const usuarios = await response.json();

        if (usuarios.length === 0) {
            alert('Email no registrado');
            signInBtn.disabled = false;
            signInBtn.textContent = 'Sign In';
            return;
        }

        const usuario = usuarios[0];

        // verify password
        if (usuario.password !== password) {
            alert('Contraseña incorrecta');
            signInBtn.disabled = false;
            signInBtn.textContent = 'Sign In';
            return;
        }

        // Login well - save user
        const usuarioSesion = {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            rol: usuario.rol,
            timestamp: new Date().getTime()
        };

        localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioSesion));

        alert('¡Bienvenido ' + usuario.nombre + '!');

        // clean form
        loginForm.reset();

        // redirection of rol
        setTimeout(() => {
            if (usuario.rol === 'admin') {
                window.location.href = '../admin-dashboard.html';
            } else {
                window.location.href = '../dashboard.html';
            }
        }, 1000);

    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión. Asegúrate de que json-server esté corriendo.');
        signInBtn.disabled = false;
        signInBtn.textContent = 'Sign In';
    }
});

// function to close account
function cerrarSesion() {
    localStorage.removeItem('usuarioAutenticado');
    window.location.href = '../index.html';
}

// function to get user auth
function obtenerUsuarioAutenticado() {
    const usuarioSesion = localStorage.getItem('usuarioAutenticado');
    return usuarioSesion ? JSON.parse(usuarioSesion) : null;
}
