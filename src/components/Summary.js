import styles from "./Summary.module.css";

function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.visit_info}>
        <span className={styles.title} >Termin:</span>
        <span className={styles.text}>piątek, 10 grudnia 2021 <br/>godzina: 10.00</span>
      </div>
      <div className={styles.visit_info}>
        <span className={styles.title} >Cel wizyty:</span>
        <span className={styles.text}>Konsultacje</span>
      </div>
    </div>
  );
}

export default Summary;