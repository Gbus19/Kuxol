import { useState } from "react";
import "./Register.css";
import logo from "../../assets/kuxol.png";
import { register } from "../../services/authService";

export default function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      setLoading(true);

      await register({
        firstName,
        lastName,
        email,
        password,
      });

      alert("Cuenta creada correctamente.");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error: any) {
      alert(error?.response?.data?.message || "Error al crear la cuenta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-background"></div>

      <div className="register-card">

        <div className="register-left">

          <img
            src={logo}
            alt="Kuxol"
            className="register-logo"
          />

          <span className="register-tag">
            CREA TU CUENTA
          </span>

          <h1>
            Comienza
            <br />
            hoy mismo.
          </h1>

          <p>
            Crea tu cuenta y administra todos tus eventos,
            invitados, fotografías y videos desde un solo lugar.
          </p>

          <div className="register-stats">

            <div className="stat-box">
              <h2>25K+</h2>
              <span>Fotografías</span>
            </div>

            <div className="stat-box">
              <h2>850+</h2>
              <span>Eventos</span>
            </div>

            <div className="stat-box">
              <h2>99.9%</h2>
              <span>Disponibilidad</span>
            </div>

          </div>

        </div>

        <div className="register-right">

          <h2>Crear cuenta</h2>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <label className="terms">
              <input type="checkbox" />
              Acepto los términos y condiciones
            </label>

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Creando cuenta..." : "Crear cuenta"}
            </button>

          </form>

          <div className="login-link">

            ¿Ya tienes cuenta?

            <a href="/login">
              Inicia sesión
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}