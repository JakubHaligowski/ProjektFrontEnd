import { ReactComponent as FacebookIcon } from "../icons/facebook_icon.svg";
import { ReactComponent as YouTubeIcon } from "../icons/youtube_icon.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagram_icon.svg";
import { ReactComponent as NfzIcon } from "../icons/NFZ_icon.svg";

import styles from "./Socials.module.css";

function Socials() {
  return (
    <div id={styles.container}>
      <span className={styles.text}>Zajdź na nas na:</span>
      <div id={styles.socials_icons}>
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <span className={styles.text}>Nw co tu:XD</span>
      <NfzIcon id={styles.nfz}/>
    </div>
  );
}

export default Socials;
