import { useContext } from "react";
import { VisitContext } from "../store/visit";
import styles from "./Summary.module.css";
import moment from "moment";

function Summary() {
  const {
    visitState: {
      type: { purpose },
      hour,
      date,
    },
  } = useContext(VisitContext);

  return (
    <div className={styles.container}>
      <div className={styles.visit_info}>
        <span className={styles.title}>Termin:</span>
        <span className={styles.text}>
          {moment(date).format("MM/DD/YYYY")} <br />
          godzina: {hour}
        </span>
      </div>
      <div className={styles.visit_info}>
        <span className={styles.title}>Cel wizyty:</span>
        <span className={styles.text}>{purpose}</span>
      </div>
    </div>
  );
}

export default Summary;
