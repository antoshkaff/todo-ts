import styles from './styles.module.css';
import { clsx } from 'clsx';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariants = 'accent' | 'transparent';
type ButtonProps = {
    children: ReactNode;
    variant: ButtonVariants;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
    return (
        <button
            className={clsx(styles.button, styles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
