import styles from "./MainPage.module.css";
import TopBar from "../components/TopBar";
import OptionsPanel from "../components/OptionsPanel";
import MainPanel from "../components/MainPanel";
import SmallWindow from "../components/SmallWindow";
import UpcomingVisit from "../components/UpcomingVisit";
import Socials from "../components/Socials";
import { ReactComponent as NfzIcon } from "../icons/NFZ_icon.svg";


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
          <SmallWindow className={styles.window_upcoming} title="Nadchodzące wizyty">
            <UpcomingVisit
              name="Jacek Soplica"
              date="Pojutrze"
              purpose="Szczepienie"
            />
          </SmallWindow>

          <SmallWindow id={styles.window_socials} title="Znajdź nas na:" >
            <Socials/>
          </SmallWindow>

          <SmallWindow id={styles.window_nfz} title="Chuj wi co tu">
            <NfzIcon />
          </SmallWindow>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
