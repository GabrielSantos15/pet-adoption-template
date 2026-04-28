import { About } from "../../components/about";
import { Hero } from "../../components/hero";
import { PetsList } from "../../components/petsList";
import { PorQueAdotar } from "../../components/PorQueAdotar";
import { Container } from "../../components/container";
import { useDestaques } from "../../hooks/useDestaques";
import styles from "./home.module.css";

export const Home = ({ pets, loading }) => {
  const destaques = useDestaques(pets, 5);

  //  Estrutura planejada
  //Hero (impacto + CTA)
  // ↓
  //  Destaques (5 pets)
  // ↓
  //  Por que adotar
  // ↓
  // Sobre a ONG (confiança)
  // ↓
  // Adultos precisam de um lar
  // ↓
  //  Como adotar / Contato
  return (
    <main className={styles.homeMain}>
      <Hero />

      <section className={styles.emphasisSection}>
        <Container>
          <h2 className={styles.sectionTitle}>
            Conheça alguns dos nossos animais
          </h2>
          <p className={styles.sectionText}>
            Cada um deles tem uma história, talvez a próxima seja com você
          </p>
        </Container>

        <div className={styles.listWrapper}>
          <PetsList pets={destaques} loading={loading} />
        </div>
      </section>
      <PorQueAdotar></PorQueAdotar>
      <About></About>
    </main>
  );
};
