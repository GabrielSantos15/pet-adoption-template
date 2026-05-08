import { useParams } from "react-router-dom";
import { tempoEspera, usePets } from "../../hooks/usePets";
import styles from "./petDetails.module.css";
import { Container } from "../../components/container";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { IoPawSharp } from "react-icons/io5";
import { ShareButton } from "../../components/shareButton";
import dogDefault from "../../assets/images/dog-default.webp";
import { useState } from "react";
import { PetDetailsSkeleton } from "./skeleton";

const METAS = ["Porte", "Idade", "Temperamento"];

const StateScreen = ({ message }) => (
  <main className={styles.Page}>
    <h1 className={styles.StateTitle}>{message}</h1>
  </main>
);

export const PetDetails = () => {
  const [hasImageError, setHasImageError] = useState(false);
  const { id } = useParams();
  const { pets, isLoading } = usePets();

  if (isLoading) {
    return <PetDetailsSkeleton />;
  }

  const pet = pets.find((currentPet) => String(currentPet.id) === id);

  if (!pet) {
    return <StateScreen message="Animal não encontrado" />;
  }

  const isMale = pet.Sexo === "Macho";
  const tempo = tempoEspera(pet);

  return (
    <main className={styles.Page}>
      <section className={styles.Card}>
        <figure className={styles.Media}>
          <img
            className={styles.Image}
            src={hasImageError ? dogDefault : pet.Foto}
             onError={() => setHasImageError(true)}
            alt={pet.Nome}
          />
        </figure>

        <article className={styles.Content}>
          <Container>
            <div>
              <div className={styles.Header}>
                <h1 className={styles.Title}>{pet.Nome}</h1>
                <span className={styles.GenderIcon}>
                  {isMale ? <IoMdMale /> : <IoMdFemale />}
                </span>
              </div>
              <p className={styles.ArrivalInfo}>Esperando há {tempo}</p>
            </div>

            <div className={styles.MetasContainer}>
              {METAS.map((meta) => (
                <span key={meta} className={styles.Meta}>
                  <h3>{meta}</h3>
                  <p>{pet[meta]}</p>
                </span>
              ))}
            </div>

            <div className={styles.DescriptionContainer}>
              <h3>Sobre o {pet.Nome}</h3>
              <p className={styles.Description}>{pet.Descrição}</p>
            </div>

            <div className={styles.ActionsContainer}>
              <ShareButton pet={pet} />
              <a href="" target="_blank" className={styles.adoptLink}>
                <span className={styles.Icon}>
                  <IoPawSharp />
                </span>
                Contato
              </a>
            </div>
          </Container>
        </article>
      </section>
    </main>
  );
};
