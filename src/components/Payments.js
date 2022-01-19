import styles from "./Payments.module.css";

function Payments() {
  return (
    <div className={styles.container}>
      <div className={styles.visit_info}>
        <span className={styles.title}>Razem:</span>
        <span className={styles.text}>60zł</span>
      </div>
      <div className={styles.visit_info}>
        <span className={styles.title}>Sposób płatność:</span>
        <span className={styles.text}>Płatne w przychodni</span>
      </div>
    </div>
  );
}

export default Payments;