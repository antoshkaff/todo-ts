import styles from './styles.module.css';
import rocketSrc from '@/assets/rocket.svg';

const Logo = () => {
    return (
        <div className={styles.container}>
            <img src={rocketSrc} alt="Logo" />
            <span className={styles.logo}>
                to<span>do</span>
            </span>
        </div>
    );
};

export default Logo;
