import { About } from "../../components/about";
import { Hero } from "../../components/hero";
import { PetsList } from "../../components/petsList";
import { PorQueAdotar } from "../../components/PorQueAdotar";
import { Container } from "../../components/container";
import { useDestaques, useOldestArrivals, usePets } from "../../hooks/usePets";
import styles from "./home.module.css";

export const Home = () => {
  const { pets, isLoading: loading } = usePets();
  const destaques = useDestaques(pets, 5);
  const oldestArrivals = useOldestArrivals(pets, 5);

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
      <section className={styles.emphasisSection}>
        <Container>
          <h2 className={styles.sectionTitle}>
            Adultos também merecem uma chance
          </h2>
          <p className={styles.sectionText}>
            Animais adultos costumam ser menos escolhidos, mas têm muito amor
            para oferecer. Talvez o seu próximo companheiro esteja aqui.
          </p>
        </Container>

        <div className={styles.listWrapper}>
          <PetsList pets={oldestArrivals} loading={loading} />
        </div>
      </section>
    </main>
  );
};
