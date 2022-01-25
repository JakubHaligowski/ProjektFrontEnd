import { ReactComponent as FacebookIcon } from "../icons/facebook_icon.svg";
import { ReactComponent as YouTubeIcon } from "../icons/youtube_icon.svg";
import { ReactComponent as InstagramIcon } from "../icons/instagram_icon.svg";

import styles from "./Socials.module.css"

function Socials() {
  return (
    <div id={styles.container}>
      <FacebookIcon />
      <YouTubeIcon />
      <InstagramIcon/>
    </div>
  );
}

export default Socials;
