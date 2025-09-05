import {
    createContext,
    type ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import type { Task } from '@/types/task.ts';
import { LocalStorageService } from '@/services/localStorageService.ts';

type AddTaskFn = (task: Task) => void;
type DeleteTaskFn = (id: Task['id']) => void;
type FinishTaskFn = (id: Task['id']) => void;
type GetFinishedAmountFn = (tasks: Task[]) => number;

type TaskActionsContextType = {
    addTask: AddTaskFn;
    deleteTask: DeleteTaskFn;
    finishTask: FinishTaskFn;
    getFinishedAmount: GetFinishedAmountFn;
};

const TaskStateContext = createContext<Task[] | null>(null);
const TaskActionsContext = createContext<TaskActionsContextType | null>(null);

type TaskProviderProps = { children: ReactNode };

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>(LocalStorageService.getAll());

    const addTask: AddTaskFn = useCallback((task) => {
        setTasks((prev) => LocalStorageService.save(prev, task));
    }, []);

    const deleteTask: DeleteTaskFn = useCallback((id) => {
        setTasks(LocalStorageService.delete(id));
    }, []);

    const finishTask: FinishTaskFn = useCallback((id) => {
        setTasks(LocalStorageService.finishTask(id));
    }, []);

    const getFinishedAmount: GetFinishedAmountFn = useCallback((tasks) => {
        return tasks.reduce((acc, task) => {
            if (task.isFinished) {
                return acc + 1;
            }
            return acc;
        }, 0);
    }, []);

    const actions = useMemo<TaskActionsContextType>(
        () => ({ addTask, deleteTask, finishTask, getFinishedAmount }),
        [addTask, deleteTask, finishTask, getFinishedAmount],
    );

    return (
        <TaskActionsContext.Provider value={actions}>
            <TaskStateContext.Provider value={tasks}>
                {children}
            </TaskStateContext.Provider>
        </TaskActionsContext.Provider>
    );
};

export const useTaskState = () => {
    const v = useContext(TaskStateContext);
    if (!v) throw new Error('useTaskState must be used within <TaskProvider>');
    return v;
};

export const useTaskActions = () => {
    const v = useContext(TaskActionsContext);
    if (!v)
        throw new Error('useTaskActions must be used within <TaskProvider>');
    return v;
};
