import styles from './styles.module.css';
import type { ReactNode } from 'react';

type ContainerProps = { children: ReactNode };

const Container = ({ children }: ContainerProps) => {
    return <div className={styles.container}>{children}</div>;
};

export default Container;
