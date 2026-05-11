import { useEffect } from "react";
import figureAdopted from "../../assets/images/foto.jpg";
import figureAdopted2 from "../../assets/images/foto2.jpg";
import { Container } from "../container";
import styles from "./about.module.css";

export const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.location.hash === "#aboutSection") {
        const element = document.getElementById("aboutSection");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Faz scroll quando a página carrega com o hash
    handleScroll();

    // Faz scroll quando o hash muda enquanto já está na página
    window.addEventListener("hashchange", handleScroll);
    return () => window.removeEventListener("hashchange", handleScroll);
  }, []);

  return (
    <section id="aboutSection" className={styles.AboutSection}>
      <Container direction="row" className={styles.Content}>
        <article className={styles.Wrapper}>
          <p>
            Somos uma ONG dedicada ao resgate e cuidado de animais em situação
            de abandono. Trabalhamos para garantir que cada pet receba carinho,
            proteção e uma nova chance.
          </p>
          <p>
            Muitos deles já passaram por situações difíceis e ainda aguardam por
            um lar. Ao adotar, você não só ganha um companheiro fiel, mas também
            transforma uma vida
          </p>
        </article>
        <figure className={styles.FigureConteiner}>
          <img width={500} src={figureAdopted} alt="" />
          <img width={500} src={figureAdopted2} alt="" />
        </figure>
      </Container>
    </section>
  );
};
