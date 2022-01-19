import styles from "./MainPage.module.css";
import TopBar from "../components/TopBar";
import OptionsPanel from "../components/OptionsPanel";
import MainPanel from "../components/MainPanel";
import SmallWindow from "../components/SmallWindow";
import UpcomingVisit from "../components/UpcomingVisit";

function MainPage() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.background}>
        <div id={styles.main_window}>
          <OptionsPanel />
          <MainPanel />
        </div>

        <div id={styles.small_windows}>
          <SmallWindow className={styles.window} title="Nadchodzące wizyty">
            <UpcomingVisit
              name="Jacek Soplica"
              date="Pojutrze"
              purpose="Szczepienie"
            />
          </SmallWindow>

          <SmallWindow title="Czat online" >
            <div>Tu chyba jednak social media będą</div>
          </SmallWindow>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
