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

            <div className="welcome-content">

                <div className="welcome-left">

                    

                    <h2>

                       Bienvenido, {firstName}

                    </h2>

                    <p>

                        Administra cada uno de tus eventos desde una sola plataforma.
                        Gestiona invitados, códigos QR, fotografías, videos y el
                        contenido compartido por tus asistentes con una experiencia
                        rápida, organizada y segura.

                    </p>

                    <div className="welcome-buttons">

                        <button className="primary-btn">

                            Crear evento

                        </button>

                    </div>

                </div>

                {

                    nextEvent && (

                        <div className="welcome-right">

                            {/* Próximo evento */}

                        </div>

                    )

                }

            </div>

        </section>

    );

}