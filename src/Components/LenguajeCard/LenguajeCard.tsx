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


