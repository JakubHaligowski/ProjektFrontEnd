import styles from './Window.module.css'

function Window(props) {
    return (
        <div id={styles.window}>
           <div id={styles.title}><span id={styles.text_title}>{props.title}</span></div>
           <div id={styles.content}>{props.content}</div> 
        </div>
    );
}

export default Window;