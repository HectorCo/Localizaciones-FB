# 📍 Localizaciones · Prospección de zonas

PWA (Progressive Web App) para que los comerciales inmobiliarios hagan prospección de sus zonas desde el móvil, sin necesidad de llevar la hoja impresa.

## ✨ Qué hace

- Funciona **sin conexión** una vez cargada.
- Se puede **instalar** en la pantalla de inicio (Android / iOS).
- Permite **imprimir** con el mismo formato y orden de columnas que el Excel original.
- Guarda todos los datos **localmente en el dispositivo** (localStorage).
- Campo **CALLE** con autocompletado de todas las calles de L'Hospitalet de Llobregat.
- Campo **ESTADO** seleccionable: Buzón lleno / Okupado / Vacío / Venta / Otros.
- **BUZONEO** y **ADMINISTRACIÓN OFRECIDA** son casillas.
- La **FECHA** aparece por defecto con la del día actual.

## 🚀 Cómo publicarla en GitHub Pages

1. Sube los 5 archivos a la raíz del repositorio.
2. Ve a **Settings → Pages**.
3. En *Source* selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. En unos segundos tendrás una URL tipo:
   `https://tu-usuario.github.io/tu-repositorio/`
5. Ábrela en el móvil y pulsa **"Añadir a pantalla de inicio"**.

## 📱 Cómo usarla

- **Crear hoja de zona:** botón `+` (abajo a la derecha).
- **Añadir registro:** pulsa cualquier fila en blanco de la tabla.
- **Editar registro:** pulsa sobre una fila con datos.
- **Imprimir:** botón "Imprimir" arriba a la derecha (elige A4 horizontal).
- **Exportar copia:** menú `⋮ → Exportar copia (.json)`.
- **Exportar a Excel:** menú `⋮ → Exportar a CSV`.

## 🗂️ Campos de cada registro

| Campo | Tipo |
|---|---|
| Fecha | Fecha (por defecto hoy) |
| Calle | Texto con autocompletado de L'Hospitalet |
| Número | Texto |
| Piso | Texto |
| Estado | Desplegable: Buzón lleno / Okupado / Vacío / Venta / Otros |
| Buzoneo | Casilla |
| Propietario | Texto |
| Teléfono | Teléfono |
| Observaciones | Texto largo |
| Seguimiento | Texto largo |
| Presidente | Texto |
| Administración ofrecida | Casilla |
| Administrador | Texto |

## 🛠️ Tecnología

- HTML + CSS + JavaScript puro (sin dependencias).
- Service Worker para funcionamiento offline.
- Web App Manifest para instalación en móvil.
- Almacenamiento: `localStorage`.

## 📄 Licencia

Uso libre para el equipo comercial.