import styles from "./TopBarButton.module.css";

function TopBarButton(props) {
  return (
    <div>
      <div id={styles.button}>
        <div id={styles.icon}>{props.icon}</div>
        <div>{props.text}</div>
      </div>
    </div>
  );
}

export default TopBarButton;
