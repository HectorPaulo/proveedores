# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Proveedores — Aplicación de Gestión de Proveedores

    Este repositorio contiene una aplicación web frontend construida con React + TypeScript y Vite destinada a gestionar proveedores, catálogos y procesos relacionados (registro, checkout, panel administrativo y páginas públicas).

    El proyecto es una interfaz moderna que incluye autenticación, un dashboard protegido, navegación responsive y componentes reutilizables (Sidebar, Navbar, Layouts, etc.).

    ## Funcionalidad principal

    - Registro y administración de proveedores.
    - Proceso de checkout para registrar productos/servicios.
    - Panel de control (dashboard) para usuarios autenticados.
    - Páginas públicas: Inicio, Acerca de, Contacto, Equipo.
    - Tema claro/oscuro con toggler.
    - Componentes accesibles y listos para integrarse con APIs.

    ## Estructura del proyecto (resumen)

    - `src/` – código fuente React + TypeScript
      - `components/` – componentes UI (Navbar, Sidebar, Header, GridShape, etc.)
      - `pages/` – páginas por ruta (Home, Login, Dashboard, RegistroProveedor, etc.)
      - `contexts/` – contexto de autenticación y tipos
      - `hooks/` – hooks personalizados (por ejemplo `useAuth`)
      - `assets/` – imágenes y SVGs
      - `main.tsx` – punto de entrada

    ## Tecnologías

    - React 18 + TypeScript
    - Vite (dev server y bundling)
    - Material UI (MUI) para componentes y SvgIcon
    - Tailwind CSS para utilidades de estilo (clases en componentes)
    - ESLint + Prettier (configuración básica en el template)

    ## Ejecutar en desarrollo

    1. Instalar dependencias:

    ```bash
    # PowerShell / Windows
    npm install
    ```

    2. Iniciar el servidor de desarrollo:

    ```bash
    npm run dev
    ```

    3. Abrir el navegador en `http://localhost:5173` (o la URL que Vite muestre).

    ## Build para producción

    ```bash
    npm run build
    npm run preview
    ```

    ## Notas y recomendaciones

    - Si hay errores de parsing en Vite relacionados con archivos `.js` que contienen JSX, renómbralos a `.jsx` o apunta las importaciones a `.tsx` cuando exista una versión TypeScript del componente.
    - El componente `src/components/IconUsage/IconUsage.tsx` proporciona una versión válida del icono; si existe un `IconUsage.js` con contenido corrupto, reemplázalo o elimínalo y actualiza las importaciones.
    - Ejecuta `npm run lint` y `npm run typecheck` si quieres revisar problemas de tipado y linting antes de hacer PRs.

    ## Contribuir

    1. Crea una rama feature/fix desde `main`.
    2. Añade pruebas pequeñas si cambias lógica crítica.
    3. Asegúrate de que el linter y el compilador TypeScript pasan antes de abrir un PR.

    ## Contacto

    Si necesitas ayuda con la integración backend, autenticación o despliegue, comparte los detalles y puedo ayudar a incorporar la API o configurar pipelines de CI/CD.
````
