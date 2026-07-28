import "./PhoneMockup.css";

function PhoneMockup() {

    const today = new Date();

    const eventDate = today.toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <div className="phone">

            <div className="phone-screen">

                <div className="phone-notch"></div>

                <header className="phone-header">

                    <div className="phone-logo">
                        KUXOL
                    </div>

                    <h2>
                        Ana & Carlos
                    </h2>

                    <span className="phone-date">
                        {eventDate}
                    </span>

                </header>

                <section className="phone-stats">

                    <div className="phone-stat">

                        <strong>1,248</strong>

                        <small>Fotos</small>

                    </div>

                    <div className="phone-stat">

                        <strong>312</strong>

                        <small>Videos</small>

                    </div>

                    <div className="phone-stat">

                        <strong>186</strong>

                        <small>Invitados</small>

                    </div>

                </section>

                <section className="phone-gallery">

                    <div className="gallery-item"></div>
                    <div className="gallery-item"></div>
                    <div className="gallery-item"></div>
                    <div className="gallery-item"></div>
                    <div className="gallery-item"></div>
                    <div className="gallery-item"></div>

                </section>

            </div>

        </div>

    );

}

export default PhoneMockup;