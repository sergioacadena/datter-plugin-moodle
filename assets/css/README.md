# 📘 CSS Guidelines for `datter.css`

This file documents the styling conventions used in the `datter.css` stylesheet. These conventions ensure maximum compatibility with Moodle, and maintain clean, modular, and maintainable code.

---

## 🎯 Purpose

- To isolate and style the `datter` block independently of Moodle core styles.
- To avoid CSS conflicts with Bootstrap or any active Moodle theme.
- To support easy migration into `styles.css` when the plugin is integrated into Moodle.

---

## 📁 File: `datter.css`

All styles in this file:

- Are **scoped** using the `.datter-` prefix (e.g. `.datter-container`, `.datter-button`, etc.).
- Avoid any direct use of global tags like `body`, `html`, `div`, `a`, etc.
- Are written using clean, modern CSS (Flexbox, Grid, etc.), without external dependencies.

---

## ✅ CSS Best Practices

- **Use BEM naming convention** where possible:  
  Example: `.datter-card__title`, `.datter-form__input--error`

- **Avoid global styles**:
  - ❌ `body { margin: 0; }`
  - ✅ `.datter-wrapper { margin: 0; }`

- **Avoid using `!important`** unless strictly necessary.

- **Use rem/em for sizing** instead of px, when possible.

- **Use variables or comments** to indicate colors and spacing for consistency:
  ```css
  /* Primary color */
  .datter-button {
    background-color: #1a73e8;
  }
