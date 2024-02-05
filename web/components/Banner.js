import styles from './Banner.module.scss';
import Container from './Container';

export default function Banner({banner}){
    return(
        <div className='noise'> 
        <section className={styles.banner}>
            <Container>
                <h1>{banner.title}</h1>
                <p>Banner</p>
            </Container>
        </section>
        </div>
    )
}