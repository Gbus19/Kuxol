import "./ForgotPassword.css";
import logo from "../../assets/kuxol.png";
import { Link } from "react-router-dom";

export default function ForgotPassword() {

    return (

        <div className="forgot-page">

            <div className="forgot-background"></div>

            <div className="forgot-card">

                <img
                    src={logo}
                    alt="Kuxol"
                    className="forgot-logo"
                />

                <span className="forgot-tag">

                    RECUPERAR CUENTA

                </span>

                <h1>

                    ¿Olvidaste tu
                    <br />
                    contraseña?

                </h1>

                <p>

                    Ingresa el correo electrónico asociado a tu cuenta.
                    Si existe una cuenta registrada, recibirás un enlace
                    para restablecer tu contraseña.

                </p>

                <form>

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                    />

                    <button>

                        Enviar enlace

                    </button>

                </form>

                <div className="back-login">

                    <Link to="/login">

                        ← Volver al inicio de sesión

                    </Link>

                </div>

            </div>

        </div>

    );

}