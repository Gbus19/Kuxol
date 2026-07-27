import "./Hero.css";
import PhoneMockup from "../PhoneMockup/PhoneMockup";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-tag">

            EVENT MEMORIES PLATFORM

          </span>

          <h1>

            Todos los recuerdos

            <br />

            de tu evento,

            <br />

            en un solo lugar.

          </h1>

          <p>

            Kuxol permite que todos los invitados
            suban fotografías y videos desde su
            celular mediante un código QR.

            Todo queda organizado automáticamente.

          </p>

          <div className="hero-buttons">

            <button className="btn-primary">

              Crear evento

            </button>

            <button className="btn-secondary">

              Ver demostración

            </button>

          </div>

        </div>

        <div className="hero-right">

          <PhoneMockup />

        </div>

      </div>

    </section>
  );
}

export default Hero;