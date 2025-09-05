import styles from './styles.module.css';
import React, { useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BASE_TRANSITION, MARKER_VARIANTS } from '@/constants/motionPresets.ts';

type CheckboxProps = {
    isChecked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = ({ isChecked, onChange }: CheckboxProps) => {
    const id = useId();

    return (
        <label className={styles.root} htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                className={styles.input}
                onChange={onChange}
                checked={isChecked}
            />
            <span className={styles.box} aria-hidden="true">
                <AnimatePresence initial={false}>
                    {isChecked && (
                        <motion.svg
                            variants={MARKER_VARIANTS}
                            initial={'initial'}
                            animate={'animate'}
                            exit={'exit'}
                            transition={BASE_TRANSITION}
                            width="10"
                            height="7"
                            viewBox="0 0 10 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.43059 0.342123L4.09865 4.67406L1.61618 2.19159L0.780273 3.0275L4.09865 6.34587L9.26649 1.17803L8.43059 0.342123Z"
                                fill="#F2F2F2"
                            />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </span>
        </label>
    );
};

export default Checkbox;
