import "./Navbar.css";

function Navbar() {

    return (

        <header className="navbar">

            <div className="nav-container">

                <h2>

                    KUXOL

                </h2>

                <nav>

                    <a href="#">Inicio</a>

                    <a href="#">Cómo funciona</a>

                    <a href="#">Planes</a>

                    <a href="#">Contacto</a>

                </nav>

                <button>

                    Iniciar sesión

                </button>

            </div>

        </header>

    );

}

export default Navbar;