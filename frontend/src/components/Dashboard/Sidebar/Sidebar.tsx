import "./Sidebar.css";
import logo from "../../../assets/kuxol.png";

import { useAuth } from "../../../context/AuthContext";

import {
    LayoutDashboard,
    CalendarDays,
    PlusCircle,
    Users,
    Image,
    Video,
    Share2,
    BarChart3,
    CreditCard,
    Settings,
    LogOut,
    ChevronRight
} from "lucide-react";

const generalMenu = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        active: true
    },
    {
        title: "Mis Eventos",
        icon: CalendarDays
    },
    {
        title: "Crear Evento",
        icon: PlusCircle
    }
];

const contentMenu = [
    {
        title: "Invitados",
        icon: Users
    },
    {
        title: "Fotografías",
        icon: Image
    },
    {
        title: "Videos",
        icon: Video
    },
    {
        title: "Compartir",
        icon: Share2
    }
];

const adminMenu = [
    {
        title: "Estadísticas",
        icon: BarChart3
    },
    {
        title: "Planes",
        icon: CreditCard
    },
    {
        title: "Configuración",
        icon: Settings
    }
];

export default function Sidebar() {

    const { logout } = useAuth();

    return (

        <aside className="sidebar">

            <div className="sidebar-glow"></div>

            <div className="sidebar-content">

                <header className="sidebar-logo">

                    <img
                        src={logo}
                        alt="Kuxol"
                    />

                    <div>

                        <h2>KUXOL</h2>

                        <span>EVENT PLATFORM</span>

                    </div>

                </header>

                <section className="sidebar-profile">

                    <div className="avatar">

                        <img
                            src={logo}
                            alt="Foto de perfil"
                            className="avatar-image"
                        />

                    </div>

                </section>

                <section className="sidebar-group">

                    <small>GENERAL</small>

                    <nav className="sidebar-menu">

                        {

                            generalMenu.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <a
                                        key={index}
                                        className={item.active ? "active" : ""}
                                    >

                                        <Icon size={20} />

                                        <span>

                                            {item.title}

                                        </span>

                                        {

                                            item.active &&

                                            <ChevronRight
                                                size={18}
                                                className="arrow"
                                            />

                                        }

                                    </a>

                                );

                            })

                        }

                    </nav>

                </section>

                <section className="sidebar-group">

                    <small>CONTENIDO</small>

                    <nav className="sidebar-menu">

                        {

                            contentMenu.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <a key={index}>

                                        <Icon size={20} />

                                        <span>

                                            {item.title}

                                        </span>

                                    </a>

                                );

                            })

                        }

                    </nav>

                </section>

                <section className="sidebar-group">

                    <small>ADMINISTRACIÓN</small>

                    <nav className="sidebar-menu">

                        {

                            adminMenu.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <a key={index}>

                                        <Icon size={20} />

                                        <span>

                                            {item.title}

                                        </span>

                                    </a>

                                );

                            })

                        }

                    </nav>

                </section>

            </div>

            <footer className="sidebar-footer">

                <button onClick={logout}>

                    <LogOut size={18} />

                    <span>

                        Cerrar sesión

                    </span>

                </button>

            </footer>

        </aside>

    );

}