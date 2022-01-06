import styles from './BackButton.module.css'
import { ReactComponent as Arrow2} from '../icons/Arrow2.svg'

function BackButton() {
    return (
        <div className={styles.button}>
        <Arrow2 />
        <span className={styles.button_text}>Powrót</span>
        </div>
    );

}

export default BackButton;