import styles from "./MainPage.module.css";
import TopBar from "../components/TopBar";
import OptionsPanel from "../components/OptionsPanel";
import MainPanel from "../components/MainPanel";
import Window from "../components/Window";
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
          <Window
            className={styles.window}
            title="Nadchodzące wizyty"
            content={
              <UpcomingVisit
                name="Jacek Soplica"
                date="Pojutrze"
                purpose="Szczepienie"
              />
            }
          />
          <Window title="Czat online" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
