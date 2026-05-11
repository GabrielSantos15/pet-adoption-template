import figureAdopted from "../../assets/images/adopted.jpg";
import { Button } from "../Button";
import { Container } from "../container";
import styles from "./porQueAdotar.module.css";

export const PorQueAdotar = () => {
  return (
    <section className={styles.porQueSection}>
      <Container>
        <h2 className={`${styles.title} fontDisplay`}>Por que adotar?</h2>
        <div className={styles.content}>
          <article className={styles.textContainer}>
            <p>Muitos dos nossos animais já passaram por situações difíceis e aguardam ansiosos por um lar. Ao adotar, você não apenas dá uma nova chance a um deles, mas também transforma sua própria vida com amor incondicional e lealdade</p>
          </article>
          <figure className={styles.figureContainer}>
            <img src={figureAdopted} alt="Cachorro adotado" />
          </figure>
          <ul className={styles.list}>
            <li className={styles.listItem}>Você salva uma vida</li>
            <li className={styles.listItem}>Ganha um companheiro fiel</li>
            <li className={styles.listItem}>Ajuda a reduzir o abandono</li>
            <li className={styles.listItem}>Recebe amor todos os dias</li>
            <Button to="/pets">Quero Adotar</Button>
          </ul>
        </div>
      </Container>
    </section>
  );
};
