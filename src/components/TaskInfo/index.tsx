import styles from './styles.module.css';

type TaskInfoProps = {
    taskCreated: number;
    taskCompleted: number;
};

const TaskInfo = ({ taskCreated, taskCompleted }: TaskInfoProps) => {
    return (
        <section className={styles.container}>
            <div className={styles.infoContainer}>
                <span className={styles.title}>Tasks created</span>
                <span className={styles.label}>{taskCreated}</span>
            </div>
            <div className={styles.infoContainer}>
                <span className={styles.title}>Completed</span>
                <span className={styles.label}>
                    {taskCompleted} of {taskCreated}
                </span>
            </div>
        </section>
    );
};

export default TaskInfo;
