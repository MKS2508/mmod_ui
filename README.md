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
