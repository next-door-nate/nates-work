import styles from './InfoGrid.module.scss';
import Container from './Container';

export default function InfoGrid({infogrid}){
    return(
        <section className={styles.infogrid}>
            <Container>
                <h2>{infogrid.title}</h2>
                <p>InfoGrid</p>
            </Container>
        </section>
    )
}