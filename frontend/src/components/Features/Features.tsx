import "./Features.css";

import gallery from "../../assets/images/home/gallery.jpg";
import qr from "../../assets/images/home/qr.png";
import album from "../../assets/images/home/album.jpg";

const features = [
    {
        id: "01",
        title: (
            <>
                Un acceso para
                <br />
                todos
            </>
        ),
        description:
            "Comparte un código QR o un enlace privado con tus invitados. Cada persona podrá acceder fácilmente desde su celular para capturar y subir recuerdos del evento en tiempo real, sin registros complicados ni aplicaciones adicionales.",
        image: qr,
        alt: "Acceso mediante código QR",
    },
    {
        id: "02",
        title: "Fotos y videos ilimitados",
        description:
            "Todos pueden subir fotografías y videos al instante sin instalar ninguna aplicación.",
        image: gallery,
        alt: "Galería Kuxol",
        reverse: true,
    },
    {
        id: "03",
        title: "Álbum privado",
        description:
            "Todo queda organizado automáticamente en un solo lugar.",
        image: album,
        alt: "Álbum del evento",
    },
];

export default function Features() {
    return (
        <section className="features section">

            <div className="container">

                <header className="features-header">

                    <span>KUXOL EXPERIENCE</span>

                    <h2>
                        Todo sucede de forma
                        <br />
                        automática.
                    </h2>

                    <p>
                        Desde el acceso al evento mediante un código QR o enlace
                        privado hasta el almacenamiento automático de cada fotografía
                        y video, Kuxol hace que compartir recuerdos sea una experiencia
                        simple, rápida y segura.
                    </p>

                </header>

                <div className="timeline">

                    {features.map((feature) => (

                        <article
                            key={feature.id}
                            className={`step ${feature.reverse ? "reverse" : ""}`}
                        >

                            <div className="step-text">

                                <small>{feature.id}</small>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>

                            </div>

                            <div className="step-image">

                                <img
                                    src={feature.image}
                                    alt={feature.alt}
                                />

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}