import styles from "./NewReservationPage.module.css";
import TopBar from "../components/TopBar";
import UniWindow from "../components/UniWindow";
import ChosenDoctor from "../components/ChosenDoctor";
import VisitDetails from "../components/VisitDetails";
import BackButton from "../components/BackButton";
import AcceptButton from "../components/AcceptButton";
import ChooseHour from "../components/ChooseHour";
import { Link } from "react-router-dom";

function NewReservationPage() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.background}>
        <UniWindow id={styles.doctor} label="Wybrany lekarz">
          <ChosenDoctor
            name="Andrzej Mądry"
            specialization="Pediatra"
            raiting="3.9"
          />
        </UniWindow>

        <UniWindow id={styles.visit_details} label="Cel wizyty">
          <VisitDetails />
        </UniWindow>

        <UniWindow id={styles.calendar} label="Wybierz termin wizyty">
          <div>Tu trzeba wstwić komponent z kalendarzem</div>
        </UniWindow>

        <UniWindow id={styles.time} label="Wybierz godzinę wizyty">
          <ChooseHour/>
        </UniWindow>

        <div id={styles.buttons}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <BackButton />
          </Link>
          <Link to="/confirm" style={{ textDecoration: "none" }}>
            <AcceptButton text="Umów wizyte" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewReservationPage;
