import image from "../../assets/images/contato-pets.webp";
import imageMobile from "../../assets/images/contato-pets-mobile.webp";
import styles from "./contato.module.css";
import { Container } from "../container";

export const Contato = () => {
  return (
    <Container>
      <section className={styles.ContatoSection}>
        <form className={styles.form}>
          <h2 className={`${styles.formTitulo} fontDisplay`}>Entre em Contato</h2>
          <div className={styles.inputGroup}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="nome">
                Nome
              </label>
              <input
                className={styles.input}
                id="nome"
                type="text"
                name="nome"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="email">
              Assunto
            </label>
            <input
              className={styles.input}
              id="assunto"
              type="text"
              name="assunto"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              className={styles.textarea}
              id="mensagem"
              name="mensagem"
              rows="10"
            />
          </div>
          <button className={`${styles.btnSubmit} fontDisplay`} type="submit">
            Enviar
          </button>
        </form>
        <figure className={styles.imageContainer}>
          <picture>
            <source media="(max-width: 1350px)" srcSet={imageMobile} />
            <source srcSet={image} />
            <img className={styles.image} src={image} alt="Pets para contato" />
          </picture>
        </figure>
      </section>
    </Container>
  );
};
