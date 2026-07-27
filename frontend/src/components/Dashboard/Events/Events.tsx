import "./Events.css";

import {
    Calendar,
    Images,
    Video,
    Users,
    QrCode,
    Share2,
    ArrowRight
} from "lucide-react";

export default function Events() {

    const events = [

        {
            id: 1,
            name: "Ana & David",
            date: "24 Mayo 2027",
            place: "Ciudad Juárez",
            photos: "1,248",
            videos: "312",
            guests: "186",
            storage: 74,
            live: true,
            cover:
                "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1400&auto=format&fit=crop"
        },

        {
            id: 2,
            name: "XV Sofía",
            date: "12 Agosto 2027",
            place: "Chihuahua",
            photos: "865",
            videos: "102",
            guests: "145",
            storage: 41,
            live: false,
            cover:
                "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop"
        }

    ];

    return (

        <section className="events">

            <div className="events-header">

                <div>

                    <small>

                        EVENTOS

                    </small>

                    <h2>

                        Tus eventos

                    </h2>

                </div>

                <button>

                    Ver todos

                </button>

            </div>

            {

                events.map((event) => (

                    <div
                        className="event-card"
                        key={event.id}
                    >

                        <div
                            className="event-cover"
                            style={{
                                backgroundImage: `url(${event.cover})`
                            }}
                        >

                            <div className="event-overlay"></div>

                        </div>

                        <div className="event-info">

                            <div className="event-top">

                                <div>

                                    <h3>

                                        {event.name}

                                    </h3>

                                    <p>

                                        <Calendar size={18} />

                                        {event.date}

                                    </p>

                                    <p className="event-place">

                                        📍 {event.place}

                                    </p>

                                </div>

                                <span className="status">

                                    Activo

                                </span>

                            </div>

                            <div className="event-stats">

                                <div>

                                    <Images size={18} />

                                    {event.photos}

                                </div>

                                <div>

                                    <Video size={18} />

                                    {event.videos}

                                </div>

                                <div>

                                    <Users size={18} />

                                    {event.guests}

                                </div>

                            </div>

                            <div className="storage">

                                <div className="storage-header">

                                    <span>

                                        Almacenamiento utilizado

                                    </span>

                                    <strong>

                                        {event.storage}%

                                    </strong>

                                </div>

                                <div className="storage-bar">

                                    <div
                                        className="storage-fill"
                                        style={{
                                            width: `${event.storage}%`
                                        }}
                                    ></div>

                                </div>

                            </div>

                            <div className="live-row">

                                {

                                    event.live && (

                                        <div className="live-badge">

                                            <span></span>

                                            EN VIVO

                                        </div>

                                    )

                                }

                            </div>

                            <div className="event-actions">

                                <button>

                                    <QrCode size={18} />

                                    QR

                                </button>

                                <button>

                                    <Share2 size={18} />

                                    Compartir

                                </button>

                                <button className="manage">

                                    Administrar

                                    <ArrowRight size={18} />

                                </button>

                            </div>

                        </div>

                    </div>

                ))

            }

        </section>

    );

}