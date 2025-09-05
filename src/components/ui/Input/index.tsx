import styles from './styles.module.css';
import type {
    ChangeEventHandler,
    ComponentProps,
    InputHTMLAttributes,
} from 'react';
import { clsx } from 'clsx';

type InputProps = {
    value: ComponentProps<'input'>['value'];
    onChange: ChangeEventHandler<HTMLInputElement>;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ value, onChange, className, ...props }: InputProps) => {
    return (
        <input
            {...props}
            value={value}
            onChange={onChange}
            className={clsx(styles.input, className)}
        />
    );
};

export default Input;
