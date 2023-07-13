import { Box, Heading, Text } from '@chakra-ui/react';
import styles from './About.module.css';

const About = () => {
  return (
    <Box className={styles.aboutContainer} p={4}>
      <Heading as="h2" size="xl" mb={4} className={styles.aboutTitle}>
        Acerca de Nosotros
      </Heading>
      <Text fontSize="lg" mb={4} className={styles.aboutText}>
        ¡Bienvenido a nuestra academia de taekwondo! Nos apasiona enseñar artes marciales y promover la condición física,
        la disciplina mental y las habilidades de autodefensa.
      </Text>
      <Text fontSize="lg" mb={4} className={styles.aboutText}>
        Nuestros instructores experimentados se dedican a brindar entrenamiento de taekwondo de alta calidad para estudiantes de todas las edades y niveles de habilidad. Ya seas principiante o practicante avanzado, tenemos clases adaptadas a tus necesidades.
      </Text>
      <Text fontSize="lg" mb={4} className={styles.aboutText}>
        En nuestra academia, priorizamos el desarrollo del respeto, la disciplina y la perseverancia en nuestros estudiantes. Creemos que el taekwondo no es solo un deporte, sino una forma de vida que inculca valores importantes y forja el carácter.
      </Text>
      <Text fontSize="lg" mb={4} className={styles.aboutText}>
        Únete a nosotros hoy mismo y embarcate en un emocionante viaje de mejora personal, condición física y crecimiento personal.
      </Text>
    </Box>
  );
};

export default About;
