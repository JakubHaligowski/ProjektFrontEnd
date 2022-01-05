import styles from "./NewReservationPage.module.css";
import TopBar from "../components/TopBar";
import UniWindow from "../components/UniWindow";
import ChosenDoctor from "../components/ChosenDoctor";
import VisitDetails from "../components/VisitDetails";
import VisitDetailsButton from "../components/VisitDetailsButton";

function NewReservationPage() {
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
        <UniWindow
          id={styles.visit_details}
          label="Cel wizyty"
          content={<VisitDetails />}
        />
        <UniWindow
          id={styles.calendar}
          label="Wybierz termin wizyty"
          content="Tu trzeba wstawić jebany kalendarz"
        />

        <UniWindow
          id={styles.time}
          label="Wybierz godzinę wizyty"
          content="Tu trzeba wstawić jebany wybór godziny"
        />
      </div>
    </div>
  );
}

export default NewReservationPage;
