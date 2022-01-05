import styles from "./ChosenDoctor.module.css";
import doc1 from "../img/doc1.png";
import { ReactComponent as Star } from "../icons/Star.svg";

function ChosenDoctor(props) {
  return (
    <div className={styles.container}>
      <div id={styles.image}>
        <img src={doc1} alt="Doctor" id={styles.picture} />
      </div>
      <div id={styles.info}>
        <span id={styles.title}>lek. {props.name}</span>
        <span>{props.specialization}</span>

        <div>
          <span id={styles.opinions}>przeglądaj opinie</span> <Star />{" "}
          <span id={styles.raiting}>{props.raiting}</span>
        </div>

      </div>
    </div>
  );
}

export default ChosenDoctor;
