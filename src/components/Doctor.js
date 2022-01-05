import styles from "./Doctor.module.css";
import { Link } from "react-router-dom";

import { ReactComponent as Arrow1 } from "../icons/Arrow1.svg";
import { ReactComponent as Star } from "../icons/Star.svg";
import doc1 from "../img/doc1.png";

function Doctor(props) {
  return (
    <div className={styles.container}>
      <div id={styles.image}>
        <img src={doc1} alt="Doctor" id={styles.picture} />
      </div>
      <div id={styles.info}>
        <span id={styles.title}>lek. {props.name}</span>
        <span>{props.specialization}</span>
        <div>
          <span>najbliższy termin: </span>
          <span id={styles.date}>{props.date}</span>
        </div>
      </div>
      <div>
        <div>
          <span id={styles.opinions}>przeglądaj opinie</span> <Star />{" "}
          <span id={styles.raiting}>{props.raiting}</span>
        </div>
        <Link to="/new"  style={{ textDecoration: 'none' }}>
          <div id={styles.button}>
            Umów wizytę
            <Arrow1 />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Doctor;
