import styles from "./petCard.module.css";
import { IoMdFemale, IoMdMale } from "react-icons/io";

export const PetCard = ({ pet }) => {
  const isMacho = pet.Sexo === "Macho";
  const tempoEspera = (() => {
    if (!pet.Chegada) return "";

    const dataChegada = new Date(`${pet.Chegada}T12:00:00`);

    if (Number.isNaN(dataChegada.getTime())) {
      return pet.Chegada;
    }

    const hoje = new Date();

    let anos = hoje.getFullYear() - dataChegada.getFullYear();
    let meses = hoje.getMonth() - dataChegada.getMonth();

    if (meses < 0) {
      anos--;
      meses += 12;
    }

    if (anos > 0) return `${anos} ano${anos > 1 ? "s" : ""}`;
    if (meses > 0)return `${meses} mês${meses > 1 ? "es" : ""}`;
    
    const dias = Math.floor((hoje - dataChegada) / (1000 * 60 * 60 * 24));

    return `${dias} dia${dias > 1 ? "s" : ""}`;
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
          <span className={styles.ArrivalText}>Esperando há {tempoEspera}</span>
        </div>
      </div>
    </article>
  );
};
