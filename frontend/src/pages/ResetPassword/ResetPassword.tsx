import "./ResetPassword.css";
import logo from "../../assets/kuxol.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ResetPassword() {

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirm, setShowConfirm] = useState(false);

    return (

        <div className="reset-page">

            <div className="reset-background"></div>

            <div className="reset-card">

                <img
                    src={logo}
                    alt="Kuxol"
                    className="reset-logo"
                />

                <span className="reset-tag">

                    NUEVA CONTRASEÑA

                </span>

                <h1>

                    Crea una nueva
                    <br />
                    contraseña

                </h1>

                <p>

                    Tu nueva contraseña debe ser diferente
                    de las utilizadas anteriormente.

                </p>

                <form>

                    <div className="password-box">

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Nueva contraseña"
                        />

                        <button
                            type="button"
                            className="eye-button"
                            onClick={() => setShowPassword(!showPassword)}
                        >

                            {showPassword ? "Ocultar" : "Mostrar"}

                        </button>

                    </div>

                    <div className="strength">

                        <div className="strength-bar"></div>

                        <span>

                            Seguridad media

                        </span>

                    </div>

                    <div className="password-box">

                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirmar contraseña"
                        />

                        <button
                            type="button"
                            className="eye-button"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >

                            {showConfirm ? "Ocultar" : "Mostrar"}

                        </button>

                    </div>

                    <button>

                        Guardar contraseña

                    </button>

                </form>

                <div className="back-login">

                    <Link to="/login">

                        Volver al inicio de sesión

                    </Link>

                </div>

            </div>

        </div>

    );

}