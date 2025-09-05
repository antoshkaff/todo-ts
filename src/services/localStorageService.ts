import { LOCALSTORAGE_KEYS } from '@/constants/localStorage.ts';
import type { Task } from '@/types/task.ts';

export class LocalStorageService {
    private static readonly key = LOCALSTORAGE_KEYS.TASKS;

    private static read(): Task[] {
        const raw = localStorage.getItem(this.key);
        if (!raw) return [];

        return JSON.parse(raw) satisfies Task[];
    }

    private static write(tasks: Task[]) {
        localStorage.setItem(this.key, JSON.stringify(tasks));
    }

    static save(current: Task[], task: Task) {
        const next = [...current, task];
        this.write(next);

        return next;
    }

    static getAll(): Task[] {
        return this.read();
    }

    static delete(id: Task['id']) {
        const next = this.read().filter((savedTask) => savedTask.id !== id);
        this.write(next);

        return next;
    }

    static finishTask(id: Task['id']) {
        const list = this.read();
        const updated = list.map((task) =>
            task.id === id ? { ...task, isFinished: !task.isFinished } : task,
        );

        this.write(updated);
        return updated;
    }
}
