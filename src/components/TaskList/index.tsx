import styles from './styles.module.css';
import TaskItem from 'src/components/TaskItem';
import { useTaskActions, useTaskState } from '@/context/TaskContext.tsx';
import { AnimatePresence, motion } from 'framer-motion';
import TaskInfo from '@/components/TaskInfo';
import Container from '@/components/ui/Container';
import NothingHere from '@/components/NothingHere';
import { LI_TRANSITION, LI_VARIANTS } from '@/constants/motionPresets.ts';

const TaskList = () => {
    const tasks = useTaskState();
    const { getFinishedAmount } = useTaskActions();

    return tasks.length ? (
        <Container>
            <div className={styles.container}>
                <TaskInfo
                    taskCreated={tasks.length}
                    taskCompleted={getFinishedAmount(tasks)}
                />
                <ul className={styles.list}>
                    <AnimatePresence initial={false}>
                        {tasks.map((task) => (
                            <motion.li
                                variants={LI_VARIANTS}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'exit'}
                                transition={LI_TRANSITION}
                                key={task.id}
                            >
                                <TaskItem
                                    key={task.id}
                                    isChecked={task.isFinished}
                                    taskEntity={task}
                                />
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
        </Container>
    ) : (
        <Container>
            <NothingHere />
        </Container>
    );
};

export default TaskList;
