import "./Activity.css";

import {

    Upload,
    Images,
    Video,
    Users,
    QrCode

} from "lucide-react";

export default function Activity() {

    const activities = [

        {
            icon:<Images size={18}/>,
            title:"Carlos subió 18 fotografías",
            time:"Hace 2 minutos"
        },

        {
            icon:<Video size={18}/>,
            title:"Ana compartió un video",
            time:"Hace 6 minutos"
        },

        {
            icon:<Users size={18}/>,
            title:"Pedro confirmó asistencia",
            time:"Hace 14 minutos"
        },

        {
            icon:<QrCode size={18}/>,
            title:"Compartiste el código QR",
            time:"Hace 35 minutos"
        },

        {
            icon:<Upload size={18}/>,
            title:"Álbum sincronizado con la nube",
            time:"Hace 1 hora"
        }

    ];

    return(

        <section className="activity">

            <div className="activity-header">

                <small>

                    ACTIVIDAD

                </small>

                <h2>

                    Actividad reciente

                </h2>

            </div>

            <div className="timeline">

                {

                    activities.map((item,index)=>(

                        <div
                            className="timeline-item"
                            key={index}
                        >

                            <div className="timeline-icon">

                                {item.icon}

                            </div>

                            <div className="timeline-content">

                                <h4>

                                    {item.title}

                                </h4>

                                <span>

                                    {item.time}

                                </span>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}