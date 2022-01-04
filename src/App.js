import styles from "./App.module.css";
import TopBar from "./TopBar";
import OptionsPanel from "./OptionsPanel";
import MainPanel from "./MainPanel";
import Window from "./Window";
import UpcomingVisit from "./UpcomingVisit";

function App() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.background}>
        <div id={styles.main_window}>
          <OptionsPanel />
          <MainPanel />
        </div>
        <div>
          <Window
            title="Nadchodzące wizyty"
            content={
              <UpcomingVisit
                name="Jacek Soplica"
                date="Pojutrze"
                purpose="Szczepienie"
              />
            }
          />
          <br></br>
          <Window title="Czat online" />
        </div>
      </div>
    </div>
  );
}

export default App;
