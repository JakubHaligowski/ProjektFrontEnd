import { useState } from "react";
import styles from "./VisitDetails.module.css";
import VisitDetailsButton from "./VisitDetailsButton";

const buttons = [
  { id: 1, purpose: "Wizyta kontrolna", price: "80zł" },
  { id: 2, purpose: "Choroba", price: "120zł" },
  { id: 3, purpose: "Wypisanie recepty", price: "30zł" },
  { id: 4, purpose: "Konsulatacje", price: "80zł" },
  { id: 5, purpose: "Szczepienie", price: "100zł" },
];

function VisitDetails() {
  const [selected, setSeletced] = useState(1);

  function onSelectHaldler(id) {
    setSeletced(id);
    console.log(selected);
  }

  return (
    <div className={styles.container}>
      {buttons.map((button) => (
        <VisitDetailsButton
          selected={button.id === selected}
          purpose={button.purpose}
          price={button.price}
          onClick={() => onSelectHaldler(button.id)}
        />
      ))}
    </div>
  );
}

export default VisitDetails;
