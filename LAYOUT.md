# Especificación de Layout: Juan Martín De Rosa - Portfolio Redesign

Esta guía detalla la estructura, jerarquía y estilos necesarios para replicar el diseño del portfolio "@Juan Martín De Rosa - Portfolio Redesign".

## 1. Identidad Visual (Technical Ether)
- **Modo:** Dark Mode.
- **Paleta Base:** Superficies en negro profundo (#0d0e0f) y gris carbón (#121414).
- **Color de Acento:** Violeta vibrante (#6d54cf) utilizado en gradientes, botones primarios y estados de hover.
- **Tipografía:** Montserrat (Sans-serif). Pesos Bold para encabezados y Medium/Regular para cuerpo.
- **Efectos:** Glassmorphism sutil (transparencia con desenfoque de fondo) en la barra de navegación y tarjetas.

## 2. Estructura de la Página (One-Page)

### A. Navegación (TopNavBar)
- **Posición:** Fija (Sticky) en la parte superior.
- **Estilo:** Fondo translúcido con desenfoque (backdrop-blur). Borde inferior tenue.
- **Elementos:** Nombre a la izquierda, enlaces de navegación centrados (Home, About, Stack, etc.), y botón "Contact Me" destacado a la derecha.

### B. Hero Section
- **Layout:** Dos columnas (60/40).
- **Izquierda:** 
    - Badge "Available for new projects" con punto pulsante.
    - Título principal: "Hola, soy JUAN MARTÍN DE ROSA" (Nombre en violeta).
    - Subtítulo: "Desarrollador Web Full Stack & Automatización".
    - CTAs: Botón primario violeta y botón secundario con outline.
- **Derecha:** Elemento decorativo circular con un icono de código (`</>`) encerrado en anillos concéntricos punteados.

### C. Sobre Mi
- **Layout:** Dos columnas centradas.
- **Izquierda:** Fotografía del desarrollador en un contenedor circular con un fondo degradado violeta.
- **Derecha:** Título "SOBRE MI" en mayúsculas, seguido de texto descriptivo en párrafos limpios y un botón para "Descargar CV".

### D. Stack Tecnológico
- **Layout:** Título a la izquierda con descripción breve.
- **Derecha:** Grid de tarjetas pequeñas para cada tecnología (HTML, JS, React, etc.).
- **Estilo de Tarjeta:** Fondo oscuro, icono centrado, texto debajo, bordes redondeados (8px).
- **Imagen Destacada:** Una imagen de una laptop con código en tonos violetas a la derecha del grid.

### E. Experiencia & Servicios
- **Layout:** Grid de 3 columnas (2 filas).
- **Tarjetas:** Icono en la parte superior izquierda, título en Bold, y descripción breve. Fondo ligeramente más claro que el fondo principal para crear profundidad.

### F. Proyectos Destacados
- **Layout:** Slider/Carrusel.
- **Contenido:** Imagen del proyecto a la izquierda (con mockups) y detalles a la derecha (Tags, Título, Descripción, Botón "Visitar Sitio").
- **Navegación:** Flechas circulares sutiles y puntos indicadores debajo.

### G. Opiniones (Testimonios)
- **Layout:** Grid de 2 columnas.
- **Estilo:** Tarjetas de color gris suave con comillas decorativas. Información del cliente (Avatar, Nombre, Empresa) en la parte inferior de la tarjeta.

### H. Contacto (Trabajemos Juntos)
- **Layout:** Dos columnas.
- **Izquierda:** Información de contacto directa (Teléfono, Email) y enlaces a redes sociales (LinkedIn, GitHub).
- **Derecha:** Formulario con campos (Nombre, Email, Teléfono, Mensaje) en bloques oscuros y botón de envío ancho en violeta.

### I. Footer
- **Layout:** Flexbox horizontal.
- **Contenido:** Nombre a la izquierda, enlaces sociales centrados y copyright a la derecha. Separado por una línea sutil.

## 3. Reglas de Espaciado y Componentes
- **Contenedor Máximo:** 1280px centrado.
- **Padding Lateral:** 2rem (32px) en desktop.
- **Radio de Borde:** 12px para tarjetas grandes, 8px para botones y elementos pequeños.
- **Interacciones:** Todas las tarjetas y botones deben tener una transición de 300ms en hover (ligero cambio de brillo o escala).
