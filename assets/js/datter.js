document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('datter-block');

  try {
    // 1. Cargar la plantilla HTML del bloque
    const htmlResponse = await fetch('templates/main-interface.html');
    const htmlContent = await htmlResponse.text();
    container.innerHTML = htmlContent;

    // 2. Cargar datos del usuario desde localStorage (ya no desde JSON de prueba)
    const savedData = localStorage.getItem('datterConfig');

    if (!savedData) {
      container.innerHTML += '<p style="color: red;">⚠️ No saved configuration found. Please go to settings.</p>';
      return;
    }

    const userData = JSON.parse(savedData);

    // 3. Insertar los datos en la plantilla
    document.getElementById('datter-name').textContent = userData.name || 'No Name';
    document.getElementById('datter-email').textContent = userData.email || 'No Email';
    document.getElementById('datter-phone').textContent = userData.phone || 'No Phone';

    // 3b. Manejo del avatar
    const datterAvatar = container.querySelector('#datter-avatar');
    if (userData.avatar && userData.avatar.trim() !== '') {
      datterAvatar.src = userData.avatar;
    } else {
      datterAvatar.src = 'assets/images/default-avatar.png';
    }

    // 4. Armar links
    document.getElementById('datter-whatsapp').href =
      `https://wa.me/${userData.phone.replace(/\D/g, '')}`;

    document.getElementById('datter-email-link').href =
      `mailto:${userData.email}`;

  } catch (error) {
    console.error('Error loading Datter interface:', error);
    container.innerHTML = '<p>Error loading interface. Please try again later.</p>';
  }
  // 5. Cargar eventos simulados
const eventResponse = await fetch('data/sample-calendar-events.json');
const events = await eventResponse.json();
const eventList = document.getElementById('datter-event-list');

if (Array.isArray(events) && events.length > 0) {
  events.forEach((event) => {
    const li = document.createElement('li');
    li.classList.add('datter-event-item');
    li.innerHTML = `
      <strong>${event.title}</strong><br>
      <small>${new Date(event.date).toLocaleString()}</small><br>
      <p>${event.description}</p>
    `;
    eventList.appendChild(li);
  });
} else {
  eventList.innerHTML = '<li>No upcoming events found.</li>';
}

// 6. Botón para abrir configuración
const configBtn = document.getElementById('datter-open-config');
const configContainer = document.getElementById('datter-config'); // Este div debe existir en el index

if (configBtn && configContainer) {
  
  configBtn.addEventListener('click', async () => {
    // Ocultar el bloque principal
    container.style.display = 'none';

    // Cargar la vista de configuración
    const configHtml = await fetch('templates/config-interface.html');
    const configContent = await configHtml.text();
    configContainer.innerHTML = configContent;
    configContainer.style.display = 'block';

    // Inyectar JS dinámico del formulario de configuración
    const script = document.createElement('script');
    script.src = 'assets/js/config-form-handler.js';
    script.defer = true;
    document.body.appendChild(script);
  });
}



}

);



