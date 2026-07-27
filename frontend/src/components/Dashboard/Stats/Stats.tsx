import "./Stats.css";

import {

    Images,
    Video,
    Users,
    CalendarDays

} from "lucide-react";

export default function Stats() {

    const stats = [

        {
            icon: <Images size={34} />,
            title: "Fotografías",
            value: "24,856",
            growth: "+18%"
        },

        {
            icon: <Video size={34} />,
            title: "Videos",
            value: "4,281",
            growth: "+12%"
        },

        {
            icon: <Users size={34} />,
            title: "Invitados",
            value: "3,462",
            growth: "+9%"
        },

        {
            icon: <CalendarDays size={34} />,
            title: "Eventos",
            value: "86",
            growth: "+24%"
        }

    ];

    return (

        <section className="stats">

            {

                stats.map((item,index)=>(

                    <div
                        className="stat-card"
                        key={index}
                    >

                        <div className="stat-icon">

                            {item.icon}

                        </div>

                        <span>

                            {item.title}

                        </span>

                        <h2>

                            {item.value}

                        </h2>

                        <small>

                            {item.growth} este mes

                        </small>

                        <div className="progress">

                            <div className="progress-fill"></div>

                        </div>

                    </div>

                ))

            }

        </section>

    );

}