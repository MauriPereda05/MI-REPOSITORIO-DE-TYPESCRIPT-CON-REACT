
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
