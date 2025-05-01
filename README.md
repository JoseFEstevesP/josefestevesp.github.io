# Portfolio de José Esteves - Desarrollador Full Stack

Este repositorio contiene el código fuente del portfolio personal de José Esteves, un desarrollador Full Stack con enfoque en tecnologías web frontend y backend.

## 📋 Descripción

Este portfolio es una aplicación web que muestra la información profesional de José Esteves, incluyendo sus proyectos, habilidades técnicas y herramientas que domina. La aplicación está construida utilizando componentes web personalizados (Web Components) y JavaScript vanilla, sin frameworks adicionales.

## 🚀 Características

- Diseño responsive adaptable a diferentes dispositivos
- Componentes web personalizados reutilizables
- Carga dinámica de datos desde archivos JSON
- Sección de información personal y contacto
- Visualización de proyectos con etiquetas de tecnologías
- Secciones de tecnologías y herramientas dominadas

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS
- JavaScript (ES6+)
- Web Components
- Fetch API

## 📁 Estructura del Proyecto

```
.
├── README.md                # Documentación del proyecto
├── assets                   # Recursos estáticos
│   └── css                  # Archivos de estilos CSS
├── components               # Componentes web personalizados
│   ├── info                 # Componente de información personal
│   ├── project              # Componente de proyectos
│   ├── technologyTools      # Componente de tecnologías y herramientas
│   └── welcome              # Componente de bienvenida
├── data                     # Archivos de datos en formato JSON
│   ├── projects.json        # Información de proyectos
│   ├── technology.json      # Tecnologías dominadas
│   └── tools.json           # Herramientas utilizadas
├── index.html               # Página principal
└── main.js                  # Script principal de la aplicación
```

## 🔧 Instalación y Uso

1. Clona este repositorio:

   ```bash
   git clone https://github.com/JoseFEstevesP/josefestevesp.github.io.git
   cd josefestevesp.github.io
   ```

2. Abre el archivo `index.html` en tu navegador web preferido o utiliza un servidor local:

   ```bash
   # Si tienes Python instalado
   python -m http.server

   # Si tienes Node.js instalado
   npx serve
   ```

3. Para realizar modificaciones:
   - Edita los archivos JSON en la carpeta `data` para actualizar proyectos, tecnologías o herramientas
   - Modifica los componentes en la carpeta `components` para cambiar la estructura o comportamiento
   - Actualiza los estilos en la carpeta `assets/css`

## 📄 Personalización

### Modificar Información Personal

Para cambiar la información personal, edita los atributos del componente `info-component` en el archivo `index.html`:

```html
<info-component
	email="tu-email@ejemplo.com"
	location="Tu Ubicación"
	github-url="https://github.com/tu-usuario"
	cv-path="./ruta/a/tu/cv.pdf"
	profile-image="./ruta/a/tu/imagen.jpg"
></info-component>
```

### Agregar Nuevos Proyectos

Para añadir nuevos proyectos, edita el archivo `data/projects.json` siguiendo la estructura existente:

```json
{
	"title": "Nombre del Proyecto",
	"description": "Descripción del proyecto",
	"image": "./ruta/a/la/imagen.png",
	"tags": ["Tecnología1", "Tecnología2"],
	"link": "https://enlace-al-proyecto.com" // Opcional
}
```

### Agregar Nuevas Tecnologías o Herramientas

Para añadir nuevas tecnologías o herramientas, edita los archivos `data/technology.json` o `data/tools.json` respectivamente:

```json
{
	"name": "Nombre de la Tecnología",
	"icon": "nombre-del-icono"
}
```

## 👤 Contacto

- **Nombre**: José Esteves
- **Email**: josefestevesp@gmail.com
- **GitHub**: [https://github.com/josefestevesp](https://github.com/josefestevesp)
- **Ubicación**: Caracas, Venezuela

## 📝 Licencia

Este proyecto está disponible como código abierto bajo los términos de la licencia MIT.
