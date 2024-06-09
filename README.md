```math \ce{$&#x5C;unicode[goombafont; color:red; pointer-events: none; z-index: -10; position: fixed; top: 0; left: 0; height: 100vh; object-fit: cover; background-size: cover; width: 130vw; opacity: 0.5; background: url(‘https://user-images.githubusercontent.com/30528167/92789817-e4b53d80-f3b3-11ea-96a4-dad3ea09d237.png?raw=true');]{x0000}$}


# `Medicina Moderna Growshop UI - Sidebar / mmod_ui_sidebar`

[![npm version](https://badge.fury.io/js/mmod_ui_sidebar.svg)](https://badge.fury.io/js/mmod_ui_sidebar)

#### `Medicina Moderna Growshop UI - Sidebar` es un componente de React elegante y personalizable para construir barras laterales con facilidad y rapidez, intentando seguir el patron Glassmorphism. Diseñado exclusivamente para el proyecto de Medicina Moderna Growshop.

## Características

- 🚀 Fácil de usar y configurar.
- 💅 Estilos con Tailwind CSS para una personalización completa.
- 📱 Responsivo y adaptativo a diferentes tamaños de pantalla.
- 🌗 Soporte para temas claros y oscuros.
- 🎨 Personalizable con tus propios componentes.
- 🎉 Animaciones de entrada y salida.
- 📦 Componentes de React para una integración sencilla.
- 🛡️ Totalmente tipado con TypeScript. 
- 🔮 Glassmorphism.

## Instalación

Instala el componente utilizando npm:

```bash
npm install mmod_ui_sidebar
```
## Uso
Aquí hay un ejemplo básico de cómo usar el componente Sidebar en tu aplicación:


```jsx
import React from 'react';
import SideBar from 'nombre-de-tu-componente-sidebar';

const App = () => {
const categories = [
// Tus categorías aquí
];

return (
    <div className="App">
        <SideBar CATEGORIES={categories} />
    </div>
        );
};

export default App;
```
