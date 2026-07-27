import "./Login.css";
import logo from "../../assets/kuxol.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { login } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function Login() {

  const navigate = useNavigate();

  const { login: loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      const result = await login({
        email,
        password,
      });

      if (!result.success) {
        alert(result.message);
        return;
      }

      localStorage.setItem(
        "token",
        result.token
      );

      localStorage.setItem(
        "refreshToken",
        result.refreshToken
      );

      loginUser({
        id: result.user.id,
        firstName: result.user.firstName,
        lastName: result.user.lastName,
        email: result.user.email,
        plan: result.user.plan,
      });

      navigate("/dashboard");

    } catch (error: any) {

      alert(
        error.response?.data?.message ??
        "Error al iniciar sesión."
      );

    }

  };

  return (

    <div className="login-page">

      <div className="login-background"></div>

      <div className="login-card">

        <img
          src={logo}
          alt="Kuxol"
          className="login-logo"
        />

        <span className="login-tag">
          Bienvenido de nuevo
        </span>

        <h1>Iniciar sesión</h1>

        <p>
          Accede a tu cuenta para administrar tus eventos,
          invitados y recuerdos.
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <div className="input-group">

            <label>Contraseña</label>

            <input
              type="password"
              placeholder="••••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          <div className="login-options">

            <label className="remember">

              <input type="checkbox" />

              Recordarme

            </label>

            <Link to="/forgot-password">

              ¿Olvidaste tu contraseña?

            </Link>

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Iniciar sesión
          </button>

        </form>

        <div className="login-divider">

          <span></span>

          <p>o</p>

          <span></span>

        </div>

        <button className="google-button">

          Continuar con Google

        </button>

        <div className="register-link">

          ¿Aún no tienes cuenta?{" "}

          <Link to="/register">

            Crear una cuenta

          </Link>

        </div>

      </div>

    </div>

  );

}