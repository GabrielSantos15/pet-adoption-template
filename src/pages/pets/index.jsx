import { Container } from "../../components/container";
import { PetCard } from "../../components/petCard";
import { PetCardSkeleton } from "../../components/petCardSkeleton/PetCardSkeleton";
import { usePets } from "../../hooks/usePets";
import styles from "./Pets.module.css";
import catImage from "../../assets/images/adopted-banner-cat.webp";

export const Pets = () => {
  const { pets, isLoading } = usePets();
  return (
    <main>
      <section className={styles.hero}>
        <h1 className="fontDisplay">Adote</h1>
        <img
          src={catImage}
          alt="Rosto de um gato branco olhando atentamente para a frente, representando os animais adotados"
          loading="lazy"
        />
      </section>
      <section>
        <Container className={styles.petsGrid}>
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <div key={index}>
                  <PetCardSkeleton />
                </div>
              ))
            : pets.map((pet, index) => (
                <div key={index}>
                  <PetCard pet={pet} />
                </div>
              ))}
        </Container>
      </section>
    </main>
  );
};
