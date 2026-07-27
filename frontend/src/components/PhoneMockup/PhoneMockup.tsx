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

                <div className="phone-logo">
                    KUXOL
                </div>

                <h2>
                    Ana & Carlos
                </h2>

                <span className="phone-date">
                    {eventDate}
                </span>

                <div className="phone-stats">

                    <div>
                        <strong>1248</strong>
                        <small>Fotos</small>
                    </div>

                    <div>
                        <strong>312</strong>
                        <small>Videos</small>
                    </div>

                    <div>
                        <strong>186</strong>
                        <small>Invitados</small>
                    </div>

                </div>

                <div className="phone-gallery">

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

            </div>

        </div>

    );

}

export default PhoneMockup;