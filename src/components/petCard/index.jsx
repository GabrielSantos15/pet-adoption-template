import styles from "./petCard.module.css"

export const PetCard = ({ pet }) => {
  return (
    <article className={styles.PetCard}>
      <img width={300} src={pet.Foto} alt="" />
      <h1>{pet.Nome}</h1>
    </article>
  );
};