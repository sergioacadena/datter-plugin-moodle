// ✅ Mensaje para confirmar que el JS se ejecuta correctamente


// Referencias a elementos del DOM
const form = document.getElementById('datter-config-form');

const nameInput = document.getElementById('datter-name-input');
const emailInput = document.getElementById('datter-email-input');
const phoneInput = document.getElementById('datter-phone-input');
const avatarInput = document.getElementById('datter-avatar-upload');
const avatarPreview = document.getElementById('datter-avatar-preview');
const calendarButton = document.getElementById('datter-calendar-auth');

// 1. Preview de la imagen de perfil
if (avatarInput) {
  avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (event) {
        avatarPreview.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

// 2. Simular autorización de Google Calendar
if (calendarButton) {
  calendarButton.addEventListener('click', () => {
    alert('Simulated authorization with Google Calendar.\n(This will be replaced with real OAuth)');
  });
}

// 3. Guardar configuración
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const configData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      avatar: avatarPreview.src // DataURL si cargó una imagen
    };

    // Simulación: almacenar en localStorage
    console.log('✅ Configuración guardada:', configData);
    localStorage.setItem('datterConfig', JSON.stringify(configData));

    alert('✅ Your settings have been saved (simulated).');
  });
}



// 0. Cargar datos previos si existen Carga los datos guardados en localStorage
const savedData = localStorage.getItem('datterConfig');
if (savedData) {
  const config = JSON.parse(savedData);
  nameInput.value = config.name || '';
  emailInput.value = config.email || '';
  phoneInput.value = config.phone || '';
  avatarPreview.src = config.avatar || 'assets/images/default-avatar.png';
}
