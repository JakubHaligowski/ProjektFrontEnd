import styles from "./ConfirmReservationPage.module.css";
import TopBar from "../components/TopBar";
import UniWindow from "../components/UniWindow";
import ChosenDoctor from "../components/ChosenDoctor";
import BackButton from "../components/BackButton";
import AcceptButton from "../components/AcceptButton";

function ConfirmReservationPage() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.background}>
        <UniWindow
          id={styles.doctor}
          label="Wybrany lekarz"
          content={
            <ChosenDoctor
              name="Andrzej Mądry"
              specialization="Pediatra"
              raiting="3.9"
            />
          }
        />
        <UniWindow id={styles.payment}  label="Płatność"/>
        <UniWindow id={styles.summary} label="Podsumowanie wizyty"/>
        <UniWindow id={styles.another_visits} label="Inne wizyty"/>
        <div id={styles.buttons}>
          <BackButton />
          <AcceptButton text="Potwierdzam"/>
        </div>
      </div>
    </div>
  );
}

export default ConfirmReservationPage;
