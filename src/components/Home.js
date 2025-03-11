import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
  <div className="logo">BarberApp_EE</div>
  <ul className="nav-links">
    <li><a href="/">Inicio</a></li>
    <li><a href="/reservar">Reservar Cita</a></li>
    <li><a href="/barberos">Barberos</a></li>
    <li><a href="/contacto">Contacto</a></li>
  </ul>
</nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a BarberApp_EE</h1>
          <p>Tu estilo, nuestra pasión.</p>
          <a href="/reservar" className="btn-reservar">Reservar Cita</a>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="sobre-nosotros">
        <h2>Sobre Nosotros</h2>
        <p>
          En BarberApp, nos dedicamos a ofrecerte el mejor servicio de barbería con un toque moderno y profesional.
          Nuestros barberos están altamente capacitados para garantizar que salgas con el look que deseas.
        </p>
      </section>

      {/* Galería */}
      <section className="galeria">
        <h2>Galería</h2>
        <div className="imagenes">
          <img src="https://via.placeholder.com/300" alt="Barbería 1" />
          <img src="https://via.placeholder.com/300" alt="Barbería 2" />
          <img src="https://via.placeholder.com/300" alt="Barbería 3" />
        </div>
      </section>

      {/* Barberos */}
      <section className="barberos">
        <h2>Nuestros Barberos</h2>
        <div className="barberos-grid">
          <div className="barbero">
            <img src="https://via.placeholder.com/150" alt="Barbero 1" />
            <h3>ELIO 22</h3>
            <p>Especialista en cortes clásicos.</p>
          </div>
          <div className="barbero">
            <img src="https://via.placeholder.com/150" alt="Barbero 2" />
            <h3>Elian Martínez</h3>
            <p>Experto en estilos modernos.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
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

export default Home;