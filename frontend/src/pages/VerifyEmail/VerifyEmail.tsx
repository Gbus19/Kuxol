import "./VerifyEmail.css";
import logo from "../../assets/kuxol.png";
import { Link } from "react-router-dom";

export default function VerifyEmail() {

    return (

        <div className="verify-page">

            <div className="verify-background"></div>

            <div className="verify-card">

                <img
                    src={logo}
                    alt="Kuxol"
                    className="verify-logo"
                />

                <div className="verify-icon">

                    ✉️

                </div>

                <span className="verify-tag">

                    VERIFICA TU CORREO

                </span>

                <h1>

                    Revisa tu
                    <br />
                    correo electrónico

                </h1>

                <p>

                    Hemos enviado un enlace de verificación al correo
                    que registraste. Haz clic en él para activar tu
                    cuenta y comenzar a crear eventos.

                </p>

                <button className="verify-button">

                    Reenviar correo

                </button>

                <div className="verify-footer">

                    ¿Ya verificaste tu correo?

                    <Link to="/login">

                        Iniciar sesión

                    </Link>

                </div>

            </div>

        </div>

    );

}