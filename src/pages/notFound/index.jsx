import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import styles from "./notFound.module.css";
import imagem from "../../assets/images/notfound.webp";
import { Container } from "../../components/container";

export const NotFound = () => {
  return (
    <main className={styles.page}>
      <img className={styles.image} src={imagem} alt="" />
        <article className={styles.content}>
          <h1 className="fontDisplay">Página não encontrada (404)</h1>
          <p>
            Desculpe, a página que você está procurando não existe ou foi
            removida.
          </p>
            <Button to="/" className={styles.button}>Ir para Pagina inicial</Button>
        </article>
    </main>
  );
};
