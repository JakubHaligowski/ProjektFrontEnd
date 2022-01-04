import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div id={styles.search_bar}>
      <input
        type="text"
        id="header-search"
        placeholder="Wyszukaj lekarza"
        name="s"
      />
    </div>
  );
}

export default SearchBar;
