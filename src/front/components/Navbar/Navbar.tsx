import React from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';
import styles from './Navbar.module.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Box className={styles.navbar}>
            <Box bg="gray.100" className={styles.box}>
                <Flex align="center">
                    <Box p="7">
                        <img
                            src="/logo1.jpg"
                            alt="logo"
                            className={styles.logo}
                        />
                    </Box>
                    <Box p="2">
                        <Link href="/">Inicio</Link>
                    </Box>
                    <Spacer />
                    <Box p="2">
                        <Link href="/about">Acerca de</Link>
                    </Box>
                    <Spacer />
                    <Box p="2">
                        <Link href="/contact">Contacto</Link>
                    </Box>
                    <Spacer />
                    <div
                        className={`${styles.menuButton} ${
                            isMenuOpen ? styles.menuButtonActive : ''
                        }`}
                        onClick={handleMenuToggle}
                    >
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </div>
                    <Box>
                        <img
                            src="/logo2.jpg"
                            alt="logo"
                            className={styles.logo}
                        />
                    </Box>
                </Flex>
            </Box>
            {isMenuOpen && (
                <Box className={styles.menuLinks}>
                    <Link href="/login" className={styles.menuLink}>
                        Login
                    </Link>
                    <Link href="/dashboard" className={styles.menuLink}>
                        Dashboard
                    </Link>
                    <Link href="/profile" className={styles.menuLink}>
                        Profile
                    </Link>
                </Box>
            )}
        </Box>
    );
}

export default Navbar;
