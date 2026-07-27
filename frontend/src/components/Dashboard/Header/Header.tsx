import "./Header.css";
import { motion } from "framer-motion";

import {
    Bell,
    Search,
    Plus,
    CalendarPlus,
    ChevronDown
} from "lucide-react";

import { useAuth } from "../../../context/AuthContext";

function formatName(name: string): string {

    return name
        .trim()
        .toLocaleLowerCase("es-MX")
        .replace(/\b\p{L}/gu, letter =>
            letter.toLocaleUpperCase("es-MX")
        );

}

export default function Header() {

    const { user } = useAuth();

    const firstName = formatName(user?.firstName ?? "Usuario");
    const lastName = formatName(user?.lastName ?? "");

    const fullName =
        `${firstName} ${lastName}`.trim();

    const initials =
        `${firstName.charAt(0)}${lastName.charAt(0)}`
            .toUpperCase();

    return (

        <motion.header

            className="header"

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: .45 }}

        >

            <div className="header-center">

                <Search size={20} />

                <input

                    type="text"

                    placeholder="Buscar eventos, invitados, fotografías o videos..."

                />

            </div>

            <div className="header-right">

                <button className="header-action">

                    <CalendarPlus size={20} />

                </button>

                <button className="header-action">

                    <Bell size={20} />

                    <div className="notification-dot"></div>

                </button>

                <button className="new-event">

                    <Plus size={20} />

                    Nuevo Evento

                </button>

                <div className="header-user">

                    <div className="user-photo">

                        {initials}

                    </div>

                    <div>

                        <h4>

                            {fullName}

                        </h4>

                        <small>

                            Plan {user?.plan ?? "Free"}

                        </small>

                    </div>

                    <ChevronDown size={18} />

                </div>

            </div>

        </motion.header>

    );

}