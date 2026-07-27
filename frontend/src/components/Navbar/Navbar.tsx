import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/kuxol.png";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header className="navbar">

            <div className="container navbar-container">

                <div className="logo">

                    <img
                        src={logo}
                        alt="Kuxol"
                        className="kuxol-image"
                    />

                </div>

                <nav className={menuOpen ? "nav active" : "nav"}>

                    <a href="#">Inicio</a>

                    <a href="#">Cómo funciona</a>

                    <a href="#">Galería</a>

                    <a href="#">Planes</a>

                    <a href="#">Contacto</a>

                </nav>

                <div className="navbar-buttons">

                    <Link
                        to="/login"
                        className="btn btn-secondary"
                    >
                        Iniciar sesión
                    </Link>

                    <button
                        className="btn btn-primary"
                    >
                        Crear evento
                    </button>

                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    ☰

                </button>

            </div>

        </header>

    );

}

export default Navbar;