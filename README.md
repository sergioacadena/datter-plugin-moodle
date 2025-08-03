datter_prototype/
├── assets/
│   ├── css/
│   │   ├── datter.css                   # Custom styles scoped with .datter-* (sin normalize)
│   │   └── README.md                    # Notas sobre convenciones CSS y compatibilidad Moodle
│   ├── js/
│   │   ├── datter.js                    # Main UI logic (show/hide, interactions)
│   │   ├── config-form-handler.js       # Simulated logic for settings (form handling, image preview)
│   │   └── calendar-integration.js      # Simulates Google Calendar authorization and data
│   └── images/
│       ├── default-avatar.png           # Default fallback profile image
│       └── uploads/                     # Simulated folder for uploaded profile pictures (runtime only)
├── templates/
│   ├── main-interface.html              # Main block layout (later -> main_interface.mustache)
│   └── config-interface.html            # Settings panel layout (later -> edit_form.php UI)
├── data/
│   ├── sample-user-config.json          # Simulated user settings: email, phone, image URL
│   └── sample-calendar-events.json      # Simulated calendar event data
├── index.html                           # Entry point for running and viewing the prototype
└── README.md                            # Project documentation and transition plan

                             # Developer documentation and testing notes

                             Explicación de la estructura


# Datter Plugin Prototype (Frontend Only)

This is the **frontend prototype** for `datter`, a robust communication block plugin intended for Moodle.  
It is designed to ensure 100% compatibility with Moodle's standards and architecture, using modular and namespaced HTML, CSS, and JS.

---

## 🔧 Features in this Prototype

- WhatsApp contact button
- Email contact button
- Google Calendar integration (OAuth simulated)
- User-configurable settings:
  - Phone number (for WhatsApp)
  - Email address
  - Avatar upload
  - OAuth state (Google Calendar access)
- Responsive UI for Moodle integration

---

## 📁 Folder Structure
Folder / File	Purpose
assets/css/datter.css	Custom styles using datter-* prefixes. normalize.css is not used because Moodle applies its own reset via Bootstrap.
assets/css/README.md	Describes CSS conventions and tips for Moodle compatibility (e.g., avoid !important, html, body, etc.).
assets/js/*.js	Modular JavaScript organized by functionality. Each file is designed to be easily converted into an AMD module.
assets/images/uploads/	Simulated folder for uploading profile images (non-persistent, used only during prototyping).
templates/*.html	View-specific HTML files. These will later be replaced with .mustache templates.
data/*.json	Simulates data persistence or AJAX calls for configuration and calendar events.
index.html	Launches and displays the working prototype, loading templates and JS interactions.
README.md	Project instructions and migration roadmap toward the Moodle (PHP-based) version.

