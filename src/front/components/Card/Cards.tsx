import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

interface CardProps {
    title: string;
    description: string;
    link: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, className }) => {
    return (
        <Box className={`${styles.card} ${className}`}>
            {' '}
            {/* Combina las clases para aplicar estilos */}
            <Box className={styles.cardContent}>
                <Heading as="h2" size="md">
                    {title}
                </Heading>
                <Text>{description}</Text>
            </Box>
            <Flex justifyContent="flex-end">
                <Link to={link}>
                    <Button colorScheme="blue" className={styles.button}>
                        Seguir...
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
};

const CardList: React.FC = () => {
    return (
        <>
            <h1 className={styles.title}>
                ¿Qué quieres saber? Contenido opcional{' '}
            </h1>
            <h3 className={styles.subtitle}>
                El taekwondo es un arte marcial coreano que se caracteriza por
                la variedad y espectacularidad de sus técnicas de patada. Es un
                deporte olímpico desde el año 2000. La Federación Internacional
                de Taekwon-Do (ITF) es una federación de asociaciones miembro
                que enseñan Taekwon-Do según lo define el Fundador, General Choi
                Hong Hi. La ITF se formó en 1966 y tiene asociaciones miembro en
                más de 120 países de todo el mundo. Tiene su sede en España y se
                rige por un Consejo de Administración elegido que incluye al
                Presidente, al Secretario General, al Tesorero, a tres
                Vicepresidentes y a cinco Miembros en general. La ITF existe
                para crecer y apoyar a sus miembros, y proporcionar
                certificación, competencias, cursos y otros servicios para
                mejorar la amplitud y la calidad del Taekwon-Do a nivel mundial.
            </h3>
            <br />
            <h2 className={styles.subtitle}>
                En esta sección encontrarás información sobre nuestros alumnos,
                árbitros y escuela de taekwondo.
            </h2>

            <div className={styles.cardContainer}>
                <Card
                    className={styles.card1}
                    title="Alumnos"
                    description="Los alumnos de taekwondo son disciplinados, ágiles, fuertes, resistentes, valientes..."
                    link="/alumnos"
                />
                <Card
                    className={styles.card2}
                    title="Árbitros"
                    description="Todos nuestros árbitros son imparciales, justos, conocedores de las reglas, observadores, autoritarios, responsables..."
                    link="/arbitros"
                />
                <Card
                    className={styles.card3}
                    title="Escuelas"
                    description="Nuestras escuelas de taekwondo son espacios de aprendizaje, disciplina, camaradería, superación, respeto, y formación integral..."
                    link="/escuelas"
                />
            </div>
        </>
    );
};

export default CardList;
