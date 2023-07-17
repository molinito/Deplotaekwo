import { Box, Heading } from "@chakra-ui/react";
import styles from './Header.module.css';

 const Header = () => {
  return (
    <>
    <Box bg="gray.100" p={7} display="flex" alignItems="center" className={styles.header}>
  <img src="/logo taekwondo1.jpg" alt="logo" className={styles.logo}/> 
  
        <Heading size="md" className={styles.headtitle}>
        Federación Salteña de Taekwondo
        <h6 className={styles.headsubtitle}>Ente Rector Provincial
PJ N° 120/90
Afiliada a la Confederacion Argentina de Taekwondo</h6>
        </Heading>
      
        
    </Box>


    </>

  );
};
 export default Header;