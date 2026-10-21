# 📍 Localizaciones · Prospección de zonas

PWA (Progressive Web App) para prospección inmobiliaria, con autenticación y base de datos en Firebase.

## ✨ Qué hace

- **Login con Firebase Auth** (usuario `comercial XX` / `master` + contraseña).
- **Datos en Firestore** (próximo paso: migración del `localStorage` a Firestore).
- Funciona **sin conexión** una vez cargada (incluido el SDK de Firebase).
- Se puede **instalar** en la pantalla de inicio (Android / iOS).
- Guarda el estado local en `localStorage` **de momento** (se migrará a Firestore).

## 🔐 Cuentas

- **MASTER**: `master@localizaciones.local` (o el email que hayas puesto al crear la cuenta en la consola de Firebase).
- **Comerciales**: `comercial01@localizaciones.local` … `comercial50@localizaciones.local`.
- En la pantalla de login se escribe solo el nombre de usuario: `master` o `comercial 01`. La app traduce internamente al email.

## 🔧 Configuración inicial en Firebase

1. Proyecto: `localizaciones-fb`.
2. **Authentication → Sign-in method → Correo electrónico/Contraseña** habilitado.
3. **Firestore Database** creado en modo producción (región `europe-west1` o similar).
4. **Reglas de Firestore** pegadas en la consola (ver el bloque del chat).
5. Cuenta MASTER creada manualmente en **Authentication → Users**.

## 🚀 Cómo publicarla en GitHub Pages

1. Sube los archivos (`index.html`, `manifest.json`, `sw.js`, `exceljs.min.js`, `icono-fincas.svg`) a la raíz del repositorio.
2. Ve a **Settings → Pages**.
3. En *Source* selecciona `main` y `/ (root)`.
4. Guarda. En unos segundos tendrás una URL tipo `https://tu-usuario.github.io/tu-repositorio/`.

## 📱 Cómo usarla

- **Crear hoja de zona:** botón `+` (abajo a la derecha).
- **Añadir registro:** pulsa cualquier fila en blanco.
- **Editar registro:** pulsa sobre una fila con datos.
- **Cerrar sesión:** menú `⋮ → Cerrar sesión`.

## 🛠️ Tecnología

- HTML + CSS + JavaScript puro.
- Firebase Auth + Firestore (v10, modular).
- Service Worker para offline.
- Web App Manifest para instalación.

## 📄 Licencia

Uso libre para el equipo comercial.
