import styles from './styles.module.css';
import Logo from '@/components/Logo';
import CreateTaskForm from '@/components/CreateTaskForm';
import Container from '@/components/ui/Container';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Logo />
                <CreateTaskForm />
            </Container>
        </header>
    );
};

export default Header;
