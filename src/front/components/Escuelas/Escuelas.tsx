import { Link } from '@chakra-ui/react';
import styles from './Escuelas.module.css';

const Arbitros = () => {
    return (
        <div>
            <h1>Escuelas
                Aqui va contenido a definir por el cliente
            </h1>
            <Link href="/" className={styles.loginLink}>
                Volver a página de inicio
            </Link>
        </div>
    );
};

export default Arbitros;