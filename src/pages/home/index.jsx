import { Hero } from "../../components/hero";
import { PetsList } from "../../components/petsList";
import { useDestaques } from "../../hooks/useDestaques";
import styles from "./home.module.css";

export const Home = ({ pets }) => {
  const destaques = useDestaques(pets, 5);

  return (
    <main className={styles.homeMain}>
      <Hero />

      <section className={styles.emphasisSection}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>
            Conheça alguns dos nossos animais
          </h2>
          <p className={styles.sectionText}>
            Cada um deles tem uma história, talvez a próxima seja com você
          </p>
        </div>

        <div className={styles.listWrapper}>
          <PetsList pets={destaques} />
        </div>
      </section>
    </main>
  );
};