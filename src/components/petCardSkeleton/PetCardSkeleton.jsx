import styles from "./PetCardSkeleton.module.css";

export const PetCardSkeleton = () => {
  return (
    <article className={styles.PetCard} aria-hidden="true">
      <span className={styles.SexoIcon} />
      <div className={styles.Image} />
      <div className={styles.InfoCard}>
        <div className={styles.InfoContent}>
          <div className={`${styles.SkeletonLine} ${styles.TitleLine}`} />
          <div className={`${styles.SkeletonLine} ${styles.SubtitleLine}`} />
        </div>
      </div>
    </article>
  );
};
