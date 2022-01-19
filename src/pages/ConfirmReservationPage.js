import { Link } from "react-router-dom";

import styles from "./ConfirmReservationPage.module.css";
import TopBar from "../components/TopBar";
import UniWindow from "../components/UniWindow";
import ChosenDoctor from "../components/ChosenDoctor";
import Summary from "../components/Summary";
import BackButton from "../components/BackButton";
import AcceptButton from "../components/AcceptButton";
import Payments from "../components/Payments";

function ConfirmReservationPage() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.background}>
        <UniWindow id={styles.doctor} label="Wybrany lekarz">
          <ChosenDoctor />
        </UniWindow>
        <UniWindow id={styles.payment} label="Płatność">
          <Payments />
        </UniWindow>
        <UniWindow id={styles.summary} label="Podsumowanie wizyty">
          <Summary />
        </UniWindow>
        <UniWindow id={styles.another_visits} label="Inne wizyty"></UniWindow>

        <div id={styles.buttons}>
          <Link to="/new" style={{ textDecoration: "none" }}>
            <BackButton />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <AcceptButton text="Potwierdzam" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmReservationPage;
