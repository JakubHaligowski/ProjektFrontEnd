import { useState, useEffect } from "react";
import { data } from "../utility/data.js";
import { ReactComponent as Arrow1 } from "../icons/Arrow1.svg";
import styles from "./ChooseHour.module.css";

function ChooseHour() {
  const [page, setPage] = useState(1);
  const [pageRange, setPageRange] = useState({ start: 0, end: 9 });

  useEffect(() => {
    const start = page * 12 - 12;
    const end = page * 12;

    setPageRange({ start, end });
  }, [page]);

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <button
          className={styles.left_arrow}
          disabled={page < 2}
          onClick={() => setPage(page - 1)}
        >
          <Arrow1 className={styles.arrow1} />
        </button>
        <div className={styles.main}>
          {data.map((t, index) => {
            return index >= pageRange.start && index < pageRange.end ? (
              <button
                className={styles.button_general}
                disabled={t.taken}
                key={index}
              >
                {t.time}
              </button>
            ) : null;
          })}
        </div>
        <button
          className={styles.right_arrow}
          disabled={page * 9 >= data.length}
          onClick={() => setPage(page + 1)}
        >
          <Arrow1 className={styles.arrow2} />
        </button>
      </div>
    </div>
  );
}

export default ChooseHour;
