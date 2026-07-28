import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/kuxol.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="container navbar-container">

                <Link
                    to="/"
                    className="logo"
                    onClick={closeMenu}
                >
                    <img
                        src={logo}
                        alt="Kuxol"
                        className="kuxol-image"
                    />
                </Link>

                <nav className={`nav ${menuOpen ? "active" : ""}`}>

                    <a href="#" onClick={closeMenu}>
                        Inicio
                    </a>

                    <a href="#" onClick={closeMenu}>
                        Cómo funciona
                    </a>

                    <a href="#" onClick={closeMenu}>
                        Galería
                    </a>

                    <a href="#" onClick={closeMenu}>
                        Planes
                    </a>

                    <a href="#" onClick={closeMenu}>
                        Contacto
                    </a>

                    <div className="navbar-buttons mobile-buttons">

                        <Link
                            to="/login"
                            className="btn btn-secondary"
                            onClick={closeMenu}
                        >
                            Iniciar sesión
                        </Link>

                        <button
                            className="btn btn-primary"
                            onClick={closeMenu}
                        >
                            Crear evento
                        </button>

                    </div>

                </nav>

                <div className="navbar-buttons desktop-buttons">

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
                    aria-label="Abrir menú"
                    aria-expanded={menuOpen}
                >
                    ☰
                </button>

            </div>
        </header>
    );
}

export default Navbar;