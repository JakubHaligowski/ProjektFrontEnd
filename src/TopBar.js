import { ReactComponent as NotificationsIcon } from "./icons/notifications_icon.svg";
import { ReactComponent as SettingsIcon } from "./icons/settings_icon.svg";
import { ReactComponent as Logo } from "./icons/Logo.svg";
import TopBarButton from "./TopBarButton";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div id={styles.container}>
      <div id={styles.logo}>
        <Logo />
      </div>
      <div id={styles.buttons_container}>
        <TopBarButton icon={<NotificationsIcon />} text="Powiadomienia" />
        <TopBarButton icon={<SettingsIcon />} text="Ustawienia" />
      </div>
    </div>
  );
}

export default TopBar;
