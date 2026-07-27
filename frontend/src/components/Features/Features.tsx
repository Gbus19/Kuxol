import "./Features.css";
import gallery from "../../assets/images/home/gallery.jpg";
import qr from "../../assets/images/home/qr.png";
import album from "../../assets/images/home/album.jpg";

export default function Features() {
  return (
    <section className="features">

      <div className="features-header">

        <span>
          KUXOL EXPERIENCE
        </span>

        <h2>

          Todo sucede de forma
          <br />
          automática.

        </h2>

        <p>

          Desde el acceso al evento mediante un código QR o enlace privado hasta el almacenamiento automático de cada fotografía y video, 
          Kuxol hace que compartir recuerdos sea una experiencia simple, rápida y segura.

        </p>

      </div>

      <div className="timeline">

        <div className="step">

          <div className="step-text">

            <small>01</small>

            <h3>
               Un acceso para
               <br />
                todos
            </h3>

            <p>

              Comparte un código QR o un enlace privado con tus invitados.
              Cada persona podrá acceder fácilmente desde su celular para
              capturar y subir recuerdos del evento en tiempo real, sin
              registros complicados ni aplicaciones adicionales.

            </p>

          </div>

          <div className="step-image">

    <img
        src={qr}
        alt="Acceso mediante código QR"
    />

</div>

        </div>

        <div className="step reverse">

          <div className="step-image">

    <img
        src={gallery}
        alt="Galería Kuxol"
    />

</div>

          <div className="step-text">

            <small>02</small>

            <h3>
              Fotos y videos ilimitados
            </h3>

            <p>

              Todos pueden subir fotografías y videos
              al instante sin instalar ninguna aplicación.

            </p>

          </div>

        </div>

        <div className="step">

          <div className="step-text">

            <small>03</small>

            <h3>
              Álbum privado
            </h3>

            <p>

              Todo queda organizado automáticamente
              en un solo lugar.

            </p>

          </div>

          <div className="step-image">

    <img
        src={album}
        alt="Álbum del evento"
    />

</div>

        </div>

      </div>

    </section>
  );
}