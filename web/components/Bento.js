import styles from './Bento.module.scss';
import Container from './Container';

export default function Bento({bento}){
    return(
        <section className={styles.bento}> 
            <Container>
                <h2>{bento.title}</h2>
                <p>Bento</p>
            </Container>
        </section>
    )
}