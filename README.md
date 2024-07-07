# TYPESCRIPT CON REACT: INFORMACION DE UN DESARROLLADOR FRONTEND Y BACKEND 

El código muestra una aplicación React que utiliza componentes como DeveloperCard y LenguajeCard para mostrar información de desarrolladores frontend y backend. Se define una estructura de datos persona con detalles sobre cada desarrollador, incluyendo nombre, imagen y descripción, junto con los lenguajes que dominan, cada uno con nombre, imagen y descripción específica. La app renderiza esta información para crear tarjetas visuales de cada desarrollador y sus lenguajes asociados, facilitando una vista clara y organizada en la interfaz de usuario.

```typescript
import './App.css';
import { DeveloperCard } from './Components/DeveloperCard/DeveloperCard';
import { LenguajeCard } from './Components/LenguajeCard/LenguajeCard';

interface Lenguaje {
  nombre: string;
  descripcion: string;
  image: string; 
}

interface Frontend {
  id: number;
  name: string;
  imagen: string;
  descripcion: string;
  lenguajes: Lenguaje[];
}

const persona: Frontend[] = [
  {
    id: 1,
    name: 'Desarrollador Frontend',
    imagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRejHXnM9Awz_dSjJVnv5H96z1GjpltE1Fxy8V3SLSEAGfT-cLh',
    descripcion: 'Un desarrollador front-end es un profesional encargado de crear la parte visible y accesible de un sitio web o aplicación. Utiliza tecnologías como HTML, CSS y JavaScript para diseñar y desarrollar la interfaz de usuario con la que los usuarios interactúan directamente en sus navegadores. Su objetivo es asegurarse de que la experiencia del usuario sea intuitiva, atractiva y funcional, trabajando estrechamente con diseñadores y desarrolladores back-end para integrar la lógica del negocio.',
    lenguajes: [
      {
        nombre: 'HTML',
        descripcion: 'HTML (HyperText Markup Language) es el lenguaje estándar utilizado para crear y estructurar contenido en la web. Consiste en etiquetas que definen el significado y la estructura del contenido, como encabezados, párrafos, imágenes y enlaces.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s'
      },
      {
        nombre: 'CSS',
        descripcion: 'CSS (Cascading Style Sheets) es un lenguaje utilizado para definir el estilo visual y la presentación de páginas web escritas en HTML y XHTML. Permite controlar aspectos como el color, la tipografía, el espaciado, el diseño y otros aspectos visuales de los elementos HTML.',
        image: 'https://lineadecodigo.com/wp-content/uploads/2014/04/css.png'
      },
      {
        nombre: 'JavaScript',
        descripcion: 'JavaScript es un lenguaje de programación que se utiliza principalmente en el desarrollo web para crear interactividad en páginas y aplicaciones.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s'
      }
    ]
  },
  {
    id: 2,
    name: 'Desarrollador Backend',
    imagen: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXP3slM5iEqrUQLH8xiFuTXRGEAv6B6-BV8_jmbx3FGWbyrqbE',
    descripcion: 'Un desarrollador backend es un profesional que se enfoca en la parte no visible de las aplicaciones web o móviles. Trabaja con tecnologías y bases de datos que procesan datos, lógica de negocio y seguridad, asegurando que las aplicaciones funcionen eficientemente y de manera segura.',
    lenguajes: [
      {
        nombre: 'Java',
        descripcion: 'Java es un lenguaje de programación popular y versátil que se utiliza en una amplia gama de aplicaciones, desde aplicaciones web hasta dispositivos móviles y sistemas embebidos. Es conocido por su portabilidad, seguridad y robustez.',
        image: 'https://dungeonofbits.com/images/java-logo.png'
      },
      {
        nombre: 'Python',
        descripcion: 'Python es un lenguaje de programación interpretado y de alto nivel, conocido por su simplicidad y legibilidad. Es ampliamente utilizado en diversas áreas como desarrollo web, análisis de datos, inteligencia artificial.',
        image: 'https://files.prepinsta.com/wp-content/uploads/2020/07/python-removebg-preview.webp'
      },
      {
        nombre: 'PHP',
        descripcion: 'PHP es un lenguaje de programación diseñado específicamente para el desarrollo web del lado del servidor. Es muy popular y ampliamente utilizado en la creación de sitios web dinámicos y aplicaciones web. PHP permite incrustar código directamente dentro de documentos HTML, lo que facilita la creación de páginas web interactivas y dinámicas.',
        image: 'https://cdn.freebiesupply.com/logos/large/2x/php-1-logo-black-and-white.png'
      }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <h1>React al Corazón: Desarrollo Frontend y Backend</h1>
      {persona.map((developer) => (
        <div key={developer.id} className="developer-container">
          <DeveloperCard
            name={developer.name}
            imagen={developer.imagen}
            descripcion={developer.descripcion}
          />
          <LenguajeCard lenguajes={developer.lenguajes} />
        </div>
      ))}
    </div>
  );
}

export default App;
```

# Componentes 

El código proporcionado muestra una aplicación React que está diseñada para mostrar información detallada sobre desarrolladores frontend y backend. Se utiliza la estructura de datos persona, que contiene dos objetos correspondientes a desarrolladores frontend y backend. Cada objeto incluye un id, name (nombre), imagen (URL de la imagen del desarrollador) y descripcion (descripción del desarrollador). Además, cada desarrollador tiene una lista de lenguajes (lenguajes) que dominan, donde cada lenguaje está representado por nombre, descripcion y image (URL de la imagen del lenguaje).

```typescript

//DeveloperCard

import './Card.css';

interface DeveloperCardProps {
  name: string;
  imagen: string;
  descripcion: string;
}

export function DeveloperCard({ name, imagen, descripcion }: DeveloperCardProps) {
  return (
  <div className='container'>
    <div className="card" style={{ width: '25rem' }}>
      <img src={imagen} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  </div>
  );
}

// CardLenguaje

import './CardLenguaje.css';

interface Lenguaje {
  nombre: string;
  descripcion: string;
  image: string; 
}

interface LenguajeCardProps {
  lenguajes: Lenguaje[];
}

export function LenguajeCard({ lenguajes }: LenguajeCardProps) {
  return (
    <>
      {lenguajes.map((lenguaje, index) => (
        <div key={index} className="carta" style={{ height: '30rem'}}>
          <div className="card-body">
            <h5 className="card-title">{lenguaje.nombre}</h5>
            <img src={lenguaje.image} className="card-image" />
            <p className="card-text">{lenguaje.descripcion}</p>
          </div>
        </div>
      ))}
    </>
  );
}
```

## Authors

- [@Mauricio Pereda Ruiz](https://github.com/MauriPereda05)