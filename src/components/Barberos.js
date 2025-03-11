import React from 'react';
import './Barberos.css';

const barberos = [
  {
    id: 1,
    nombre: 'elian TLM',
    foto: 'https://via.placeholder.com/150',
    descripcion: 'Especialista en cortes clásicos y barbas bien cuidadas.',
  },
  {
    id: 2,
    nombre: 'ELIO 22',
    foto: 'https://via.placeholder.com/150',
    descripcion: 'Experto en estilos modernos y tendencias actuales.',
  },
  {
    id: 3,
    nombre: 'Elian Martínez',
    foto: 'https://via.placeholder.com/150',
    descripcion: 'Maestro en cortes de cabello para niños y adultos.',
  },
];

function Barberos() {
  return (
    <div className="barberos-container">
      <h2>Nuestros Barberos</h2>
      <div className="barberos-grid">
        {barberos.map(barbero => (
          <div key={barbero.id} className="barbero-card">
            <div className="barbero-imagen">
              <img src={barbero.foto} alt={barbero.nombre} />
            </div>
            <div className="barbero-descripcion">
              <h3>{barbero.nombre}</h3>
              <p>{barbero.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <section className="contacto">
        <h2>Contacto</h2>
        <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        <p>Teléfono: +57 3013590755</p>
        <p>Email: info@barberappee.com</p>
        <div className="redes-sociales">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 BarberApp. Todos los derechos reservados.</p>
      </footer>
    </div>
    
  );
}

export default Barberos;