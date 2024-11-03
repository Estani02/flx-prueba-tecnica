# Proyecto Monorepo

Este proyecto es un monorepo que contiene múltiples aplicaciones y servicios. A continuación, se detallan los pasos para inicializar y explicar la carpeta `client`.

## Inicialización del Proyecto

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 10 o superior)

### Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/Estani02/flx-prueba-tecnica.git
   cd flx-prueba-tecnica

2. Instala las dependencias de la carpeta `client`:
    ```bash
    cd client
    npm install
    ```

## 🚀 Scripts Disponibles

Dentro de la carpeta `client`, puedes ejecutar los siguientes scripts:

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Construye la aplicación para producción.
- **`npm run start`**: Inicia el servidor en modo producción.
- **`npm run lint`**: Ejecuta ESLint para encontrar y arreglar problemas en el código.




## 📂 Estructura de la Carpeta `client`

| Archivo/Carpeta           | Descripción                                                                                        |
|---------------------------|----------------------------------------------------------------------------------------------------|
| `.editorconfig`           | Configuración del editor para mantener un estilo de código consistente.                            |
| `.gitignore`              | Lista de archivos y carpetas que Git debe ignorar.                                                 |
| `.next/`                  | Archivos generados automáticamente por Next.js durante la construcción y el desarrollo.            |
| `.vscode/`                | Configuración específica de Visual Studio Code.                                                    |
| `eslint.config.mjs`       | Configuración de ESLint para asegurar calidad y consistencia en el código.                         |
| `next-env.d.ts`           | Declaraciones de tipos para Next.js.                                                               |
| `next.config.mjs`         | Configuración de Next.js.                                                                          |
| `package.json`            | Dependencias y scripts del proyecto.                                                               |
| `postcss.config.mjs`      | Configuración de PostCSS.                                                                          |
| `src/`                    | Carpeta principal que contiene el código fuente de la aplicación.                                 |
| `tailwind.config.ts`      | Configuración de Tailwind CSS para el proyecto.                                                    |
| `tsconfig.json`           | Configuración de TypeScript.                                                                       |

---