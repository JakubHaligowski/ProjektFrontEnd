import styles from "./MainPanel.module.css";
import SearchBar from "./SearchBar";
import Doctor from "./Doctor";

const doctors = [
  {
    id: 1,
    name: "Jacek Soplica",
    specialization: "Pediatra",
    date: "31.12",
    raiting: "3.9",
  },
  {
    id: 2,
    name: "Andrzej Mądry",
    specialization: "Lekarz rodzinny",
    date: "Jutro",
    raiting: "2.9",
  },
  {
    id: 3,
    name: "Anna Skóra",
    specialization: "Lekarz rodzinny",
    date: "21.06",
    raiting: "4.9",
  },
  {
    id: 4,
    name: "Anna Skóra",
    specialization: "Lekarz rodzinny",
    date: "21.06",
    raiting: "4.9",
  },
  
];

function MainPanel() {
  return (
    <div className={styles.main_panel}>
      <SearchBar />
      <div>
        <h1 className={styles.title}>Ostatnie wyszukiwania</h1>
      </div>
      <div className={styles.doctors}>
        {doctors.map((doctor) => (
          <Doctor
            name={doctor.name}
            date={doctor.date}
            raiting={doctor.raiting}
            specialization={doctor.specialization}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPanel;
