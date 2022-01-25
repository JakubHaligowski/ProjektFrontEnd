import { useContext } from "react";
import { VisitContext } from "../store/visit";
import styles from "./Summary.module.css";

function Summary() {
  const {
    visitState: {
      type: { purpose },
      hour,
      date,
    },
  } = useContext(VisitContext);

  let formatter = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.container}>
      <div className={styles.visit_info}>
        <span className={styles.title}>Termin:</span>
        <span className={styles.text}>
          {formatter.format(date)}
          <br />
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
