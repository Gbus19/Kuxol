import "./Dashboard.css";

import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Header from "../../components/Dashboard/Header/Header";
import Welcome from "../../components/Dashboard/Welcome/Welcome";
import Stats from "../../components/Dashboard/Stats/Stats";
import Events from "../../components/Dashboard/Events/Events";
import Activity from "../../components/Dashboard/Activity/Activity";
import Calendar from "../../components/Dashboard/Calendar/Calendar";
import QuickActions from "../../components/Dashboard/QuickActions/QuickActions";

export default function Dashboard() {

    return (

        <div className="dashboard">

            <Sidebar />

            <main className="dashboard-content">

                <Header />

                <Welcome />

                <Stats />

                <div className="dashboard-grid">

                    <Events />

                    <Calendar />

                </div>

                <div className="dashboard-grid">

                    <Activity />

                    <QuickActions />

                </div>

            </main>

        </div>

    );

}