import "./LiveCard.css";

import {
    Camera,
    Video,
    Users,
    Circle,
    Calendar
} from "lucide-react";

type LiveCardProps = {
    title?: string;
    date?: string;
    status?: string;
    photos?: number;
    videos?: number;
    guests?: number;
    onOpen?: () => void;
};

export default function LiveCard({

    title = "Boda de David & María",
    date = "26 Octubre 2026",
    status = "En vivo",
    photos = 1248,
    videos = 312,
    guests = 186,
    onOpen

}: LiveCardProps) {

    return (

        <div className="live-card">

            <div className="live-header">

                <div className="live-state">

                    <Circle
                        size={10}
                        fill="currentColor"
                        strokeWidth={0}
                    />

                    <span>{status}</span>

                </div>

            </div>

            <h2>{title}</h2>

            <div className="live-date">

                <Calendar size={18} />

                <span>{date}</span>

            </div>

            <div className="divider"></div>

            <div className="row">

                <div className="row-label">

                    <Camera size={18} />

                    <span>Fotos</span>

                </div>

                <strong>{photos.toLocaleString()}</strong>

            </div>

            <div className="row">

                <div className="row-label">

                    <Video size={18} />

                    <span>Videos</span>

                </div>

                <strong>{videos.toLocaleString()}</strong>

            </div>

            <div className="row">

                <div className="row-label">

                    <Users size={18} />

                    <span>Invitados</span>

                </div>

                <strong>{guests.toLocaleString()}</strong>

            </div>

            <div className="divider"></div>

            <button
                className="btn btn-primary btn-full"
                onClick={onOpen}
            >

                Abrir álbum

            </button>

        </div>

    );

}