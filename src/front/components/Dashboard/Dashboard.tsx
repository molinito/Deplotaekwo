import styles from "./Dashboard.module.css";
// import thunder from '../../../../doc/thunder-collection_tknd endpoints'

const Dashboard: React.FC = () => {
    // console.log(thunder.folders)

    return (
        <div className={styles.dashContainer}>
            <div className={styles.dashContent}>
                <img src="/logo2.jpg" alt="logo" className={styles.logoImg} />
                <div className={styles.wrapper}>
                    <div className={styles.closeIcon}>X</div>

                    <form className={styles.search}>
                        <label className={styles.labelSearch}>Buscar...</label>
                        <input className={styles.inputSearch} type="text" placeholder="Buscar" />
                    </form>
                    <div className={styles.dashLinks}>
                        <a href="#" className={styles.link}>Inicio</a>
                        <select className={styles.select}>
                            <option>Acerca de</option>
                            <option>Valores y principios</option>
                            <option>consejo directivo</option>
                            <option>intituciones filiadas</option>
                            <option>Estatuto</option>
                            <option>balances contables</option>
                            <option>portal de tramites</option>
                            <option>valores de graduaciones</option>
                        </select>
                        <select className={styles.select}>
                            <option>Departamentos</option>
                            <option>consejos de maestros</option>
                            <option>educación</option>
                            <option>deporte y mujer</option>
                            <option>arbitraje</option>

                            <option>kyorugi</option>
                            <option>arbitros habilitados</option>

                            <option>poomsae</option>

                            <option>para taekwondo</option>
                            <option>teakwondo sordos</option>
                        </select>
                        <a href="#" className={styles.link}>Teakwondo en los medios</a>
                        <a href="#" className={styles.link}>Noticias</a>
                    </div>
                    <div className={styles.dashLinks}>
                        <a href="#" className={styles.link}>Acceso Directo</a>
                        <a href="#" className={styles.link}>Portal de tramites</a>
                        <a href="#" className={styles.link}>Protocolo reactivación de clases</a>
                    </div>
                    <div className={styles.dashLinks}>
                        <a href="#" className={styles.link}>Reglamentos y estatutos</a>
                        <a href="#" className={styles.link}>reglamento de kyorugy- inglés</a>
                        <a href="#" className={styles.link}>reglamento de poomsae- inglés</a>
                        <a href="#" className={styles.link}>reglamento de kyorugy para taekwondo</a>
                        <a href="#" className={styles.link}>Estatuto world taekwondo</a>
                        <a href="#" className={styles.link}>reglas antidopaje de la wt</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
