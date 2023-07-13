import { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import styles from './Carousel.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = ['/tae10.jpg', '/tae11.jpg', '/tae12.jpg'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia el valor para ajustar el intervalo de desplazamiento automático
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <Box className={styles.carousel}>
            <button className={styles.prevButton} onClick={prevSlide}>
                <ChevronLeftIcon />
            </button>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Carousel Image ${index}`}
                    className={`${styles.carouselImage} ${
                        index === currentIndex ? styles.active : styles.hidden
                    }`}
                />
            ))}
            <button className={styles.nextButton} onClick={nextSlide}>
                <ChevronRightIcon />
            </button>
        </Box>
    );
};

export default Carousel;
