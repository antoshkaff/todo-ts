import styles from './styles.module.css';
import clipboard from '@/assets/clipboard.svg';

const NothingHere = () => {
    return (
        <div className={styles.container}>
            <img className={styles.icon} src={clipboard} alt="Clipboard" />
            <div className={styles.contentContainer}>
                <span className={styles.title}>
                    You don't have any registered tasks yet.
                </span>
                <span className={styles.content}>
                    Create tasks and organize your to-do items.
                </span>
            </div>
        </div>
    );
};

export default NothingHere;
