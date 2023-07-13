import { Box, Heading, Link, Image, Text } from '@chakra-ui/react';
import styles from './Middle.module.css';

const Middle = () => {
  return (
    <>
      <Box bg="gray.100" p={4} display="flex" alignItems="center" className={styles.middle}>
        <Image
          src="/tae4.png"
          alt="Gimnasio"
          objectFit="contain"
          className={styles.photo1}
        />
        <Box ml={[0, 4]} mt={[4, 0]}>
          <Heading size="md" className={styles.headtitle}>
            Quienes somos ?
          </Heading>
          <Text fontSize={["sm", "md"]} className={styles.descrip}>
            La Federación de Taekwondo de Salta es el organismo rector del taekwondo en la provincia de Salta, Argentina. Su objetivo es promover y regular la práctica del taekwondo en la región, fomentando la participación en competiciones, la formación de árbitros y el reconocimiento de instituciones habilitadas. Con TaekwondoSalta, la federación busca mejorar la gestión interna de registros y brindar acceso público a información relevante relacionada con el taekwondo en Salta.
          </Text>
          <button className={styles.btn}>
            <Link href="/login" className={styles.menuLink}>
              ¡Únete!
            </Link>
          </button>
        </Box>
      </Box>

      <Box bg="gray.100" p={4} display="flex" alignItems="center" className={styles.middle}>
        <Box mr={[0, 4]} mt={[4, 0]}>
          <Heading size="md" className={styles.headtitle}>
            Que enseñamos ?
          </Heading>
          <Text fontSize={["sm", "md"]} className={styles.descrip}>
            Nuestro enfoque se centra en desarrollar habilidades físicas, fortaleza mental y valores como el respeto y la disciplina. Mediante técnicas de autodefensa y ejercicios divertidos, los niños aprenderán a canalizar su energía, mejorar su equilibrio y confianza en sí mismos. ¡Únete a nuestras clases y descubre cómo el Taekwondo puede transformar la vida de tu hijo, brindándole herramientas para crecer y enfrentar los desafíos con determinación!
          </Text>
          <button className={styles.btn}>
            <Link href="/login" className={styles.menuLink}>
              ¡Únete!
            </Link>
          </button>
        </Box>
        <Image
          src="/tae2.png"
          alt="Gimnasio"
          objectFit="contain"
          className={styles.photo1}
        />
      </Box>

      <Box bg="gray.100" p={4} display="flex" alignItems="center" className={styles.middle}>
        <Image
          src="/tae.png"
          alt="Gimnasio"
          boxSize={["50%", "200px"]}
          objectFit="contain"
          className={styles.photo1}
        />
        <Box ml={[0, 4]} mt={[4, 0]}>
          <Heading size="md" className={styles.headtitle}>
            Porque aprender ?
          </Heading>
          <Text fontSize={["sm", "md"]} className={styles.descrip}>
            Aprender Taekwondo fortalecerá tu cuerpo, aumentará tu flexibilidad y mejorará tu resistencia cardiovascular. Además, te ayudará a desarrollar disciplina, autocontrol y confianza en ti mismo, habilidades que son fundamentales para el éxito en todos los aspectos de la vida. El Taekwondo fomenta el respeto, la cortesía y la camaradería, permitiéndote formar parte de una comunidad global de practicantes apasionados. ¡Únete a esta apasionante disciplina y descubre tu verdadero potencial!
          </Text>
          <button className={styles.btn}>
            <Link href="/login" className={styles.menuLink}>
              ¡Únete!
            </Link>
          </button>
        </Box>
      </Box>
    </>
  );
};

export default Middle;

