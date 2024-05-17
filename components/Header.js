// components/Header.js
const Header = ({ title }) => (
  <header>
    <div className="container">
      <h1>{title}</h1>
      <p>Ingénieur Système</p>
      <nav>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#testimonials">Témoignages</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
