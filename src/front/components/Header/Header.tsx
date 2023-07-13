import { Box, Heading } from "@chakra-ui/react";
import styles from './Header.module.css';

 const Header = () => {
  return (
    <>
    <Box bg="gray.100" p={7} display="flex" alignItems="center" className={styles.header}>
  <img src="/logo.jpg" alt="logo" className={styles.logo}/> 
  
        <Heading size="md" className={styles.headtitle}>
        Federación de Taekwondo de la provincia de Salta
        </Heading>
      
        
    </Box>


    </>

  );
};
 export default Header;