import { RedirectLoginOptions, useAuth0 } from '@auth0/auth0-react';
import {
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Link
} from '@chakra-ui/react';
import styles from './Login.module.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Center className={styles.Login}>
            <Container className={styles.loginContainer}>
                <Heading className={styles.loginTitle}>Login</Heading>
                <form className={styles.loginForm}>
                    <Stack spacing={6}>
                        <FormControl>
                            <FormLabel className={styles.loginFormLabel}>
                                Username
                            </FormLabel>
                            <Input
                                type="text"
                                className={styles.loginFormInput}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel className={styles.loginFormLabel}>
                                Password
                            </FormLabel>
                            <Input
                                type="password"
                                className={styles.loginFormInput}
                            />
                        </FormControl>
                        <Link href="/dashboard">
                            <Button
                                colorScheme="green"
                                className={styles.loginFormButton}
                            >
                                Iniciar Sesión
                            </Button>
                        </Link>
                        <div
                            className={styles.loginFormDivider}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <div
                                className={styles.loginFormDividerLine}
                                style={{ flex: 1 }}
                            >
                                ______________________
                            </div>
                            <div
                                className={styles.loginFormDividerText}
                                style={{ margin: '0 1rem' }}
                            >
                                o
                            </div>
                            <div
                                className={styles.loginFormDividerLine}
                                style={{ flex: 1 }}
                            >
                                _______________________
                            </div>
                        </div>
                        <Button
                            colorScheme="red"
                            className={styles.loginFormButton}
                            onClick={() =>
                                loginWithRedirect({
                                    connection: 'google-oauth2'
                                } as RedirectLoginOptions)
                            }
                        >
                            Sign In with Google
                        </Button>
                        <Link href="/" className={styles.loginLink}>
                            Volver a página de inicio
                        </Link>
                    </Stack>
                </form>
            </Container>
        </Center>
    );
};

export default Login;






