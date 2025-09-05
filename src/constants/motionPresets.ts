import type { Transition, Variants } from 'framer-motion';

export const BASE_TRANSITION: Transition = { duration: 0.2 };

export const LI_VARIANTS: Variants = {
    initial: { opacity: 0, rotate: `-5deg`, x: '-15%' },
    animate: { opacity: 1, rotate: `0deg`, x: 0 },
    exit: { opacity: 0, rotate: `5deg`, x: '15%' },
};

export const LI_TRANSITION: Transition = { duration: 0.3, ease: 'easeInOut' };

export const LINE_VARIANTS: Variants = {
    initial: { width: 0 },
    animate: { width: `calc(100% + 8px)` },
    exit: { width: 0 },
};

export const MARKER_VARIANTS: Variants = {
    initial: { scale: 0.1 },
    animate: { scale: 1 },
    exit: { scale: 0.1 },
};
