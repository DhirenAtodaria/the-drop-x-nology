import React from "react";
import styles from "./Main.module.scss";
import ReleaseArchive from "../../components/Main/ReleaseArchive";
import FanDashboard from "../../containers/FanDashboard";



function Main() {
    return (
        <section className={styles.Main}>
            {/* Components to go in here */}
            <FanDashboard />
            {/* <ReleaseArchive /> */}
            
        </section>
    );
}

export default Main;
