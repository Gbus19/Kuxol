import "./Welcome.css";
import { useAuth } from "../../../context/AuthContext";

function formatName(name: string) {

    return name
        .toLocaleLowerCase("es-MX")
        .split(" ")
        .filter(Boolean)
        .map(word =>
            word.charAt(0).toLocaleUpperCase("es-MX") +
            word.slice(1)
        )
        .join(" ");

}

export default function Welcome() {

    const { user } = useAuth();

    const firstName = formatName(user?.firstName ?? "Usuario");

    // TODO: Reemplazar cuando exista el endpoint
    const nextEvent = null;

    return (

        <section className="welcome">

            <div className="welcome-background"></div>

            <div className="container">

                <div className="welcome-content">

                    <div className="welcome-left">

                        <span className="welcome-badge">
                            PANEL DE CONTROL
                        </span>

                        <h2>
                            Bienvenido, {firstName}
                        </h2>

                        <p>
                            Administra cada uno de tus eventos desde una sola
                            plataforma. Gestiona invitados, códigos QR,
                            fotografías, videos y todo el contenido compartido
                            por tus asistentes.
                        </p>

                        <div className="welcome-buttons">

                            <button className="btn btn-primary">
                                Crear evento
                            </button>

                        </div>

                    </div>

                    {nextEvent && (

                        <aside className="welcome-right">

                            {/* Próximo evento */}

                        </aside>

                    )}

                </div>

            </div>

        </section>

    );

}