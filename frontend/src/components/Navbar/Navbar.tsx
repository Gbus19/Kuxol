import "./Navbar.css";
import logo from "../../assets/kuxol.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <div className="logo">

  <img
    src={logo}
    alt="Kuxol"
    className="kuxol-image"
  />

</div>

        <nav>

          <a href="#">Inicio</a>

          <a href="#">Cómo funciona</a>

          <a href="#">Galería</a>

          <a href="#">Planes</a>

          <a href="#">Contacto</a>

        </nav>

        <div className="navbar-buttons">

          <Link
    to="/login"
    className="login"
>

    Iniciar sesión

</Link>

          <button className="register">

            Crear evento

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;