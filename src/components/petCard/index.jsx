import styles from "./petCard.module.css";
import { IoMdFemale, IoMdMale } from "react-icons/io";

export const PetCard = ({ pet }) => {
  const isMacho = pet.Sexo === "Macho";
  const chegadaFormatada = (() => {
    if (!pet.Chegada) return "";

    const dataChegada = new Date(`${pet.Chegada}T12:00:00`);

    if (Number.isNaN(dataChegada.getTime())) {
      return pet.Chegada;
    }

    const texto = new Intl.DateTimeFormat("pt-BR", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(dataChegada);

    return texto.replace(" de ", ", ");
  })();

  return (
    <article className={styles.PetCard}>
      <span
        className={`${styles.SexoIcon} ${
          isMacho ? styles.SexoIconMacho : styles.SexoIconFemea
        }`}
      >
        {isMacho ? <IoMdMale /> : <IoMdFemale />}
      </span>
      <img src={pet.Foto} alt={pet.Nome} />
      <div className={styles.InfoCard}>
        <div className={styles.InfoContent}>
          <h1>{pet.Nome}</h1>
          <span className={styles.ArrivalText}>Chegou em {chegadaFormatada}</span>
        </div>
      </div>
    </article>
  );
};
