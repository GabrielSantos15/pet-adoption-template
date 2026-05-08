import { Container } from "../../components/container";
import styles from "./skeleton.module.css";

export const PetDetailsSkeleton = () => {
  return (
    <main className={styles.Page} aria-hidden="true">
      <section className={styles.Card}>
        <div className={styles.Media} />

        <article className={styles.Content}>
          <Container>
            <div>
              <div className={styles.Header} />
              <div className={styles.ArrivalInfo} />
            </div>

            <div className={styles.MetaGroup}>
              <div className={styles.MetaCard}>
                <div className={styles.MetaLabel} />
                <div className={styles.MetaValue} />
              </div>
              <div className={styles.MetaCard}>
                <div className={styles.MetaLabel} />
                <div className={styles.MetaValue} />
              </div>
              <div className={styles.MetaCard}>
                <div className={styles.MetaLabel} />
                <div className={styles.MetaValue} />
              </div>
            </div>

            <div className={styles.DescriptionBox}>
              <div className={styles.DescriptionTitle} />
              <div className={styles.DescriptionLine} />
              <div className={`${styles.DescriptionLine} ${styles.DescriptionLineShort}`} />
            </div>

            <div className={styles.ActionsContainer}>
              <div className={styles.ButtonLine} />
              <div className={styles.ButtonContent}>
                <div className={styles.IconLine} />
                <div className={styles.ShareLine} />
              </div>
            </div>
          </Container>
        </article>
      </section>
    </main>
  );
};