import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="home">

      <Navbar />

      <section className="hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <span className="tag">
            EVENT PLATFORM
          </span>

          <h1>
            Todos los recuerdos
            <br />
            de tu evento,
            <br />
            en un solo lugar.
          </h1>

          <p>
            Kuxol permite que todos los invitados suban
            fotografías y videos desde su celular mediante un
            código QR. Todo queda organizado automáticamente.
          </p>

          <div className="buttons">

            <button className="primary">
              Crear evento
            </button>

            <button className="secondary">
              Ver demostración
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;