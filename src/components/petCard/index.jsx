import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./petCard.module.css";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { tempoEspera } from "../../hooks/usePets";
import dogDefault from "../../assets/images/dog-default.webp";

export const PetCard = ({ pet }) => {
  const [hasImageError, setHasImageError] = useState(false);
  const isMacho = pet.Sexo === "Macho";

  useEffect(() => {
    setHasImageError(false);
  }, [pet.Foto]);

  const tempo = tempoEspera(pet);

  return (
    <Link to={`/pet/${pet.id}`} className={styles.PetLink}>
      <article className={styles.PetCard}>
        <span
          className={`${styles.SexoIcon} ${
            isMacho ? styles.SexoIconMacho : styles.SexoIconFemea
          }`}
        >
          {isMacho ? <IoMdMale /> : <IoMdFemale />}
        </span>
        <div className={styles.MediaFrame}>
          {pet.Foto ? (
            <img
              src={hasImageError ? dogDefault : pet.Foto}
              alt={pet.Nome}
              onError={() => setHasImageError(true)}
            />
          ) : (
            <div className={styles.ImagePlaceholder} aria-hidden="true" />
          )}
        </div>
        <div className={styles.InfoCard}>
          <div className={styles.InfoContent}>
            <h1>{pet.Nome}</h1>
            <span className={styles.ArrivalText}>Esperando há {tempo}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
