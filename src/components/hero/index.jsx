import styles from "./hero.module.css";
import dogBanner from "../../assets/images/home-banner-dog.webp";

export const Hero = () => {
  return (
    <section id="heroSection" className={styles.heroSection}>
      <article className={styles.heroContent}>
        <h1 className={styles.heroTitle}>OngPet</h1>
        <h2 className={styles.heroSubtitle}>Dê uma segunda chance para um pet</h2>
      </article>
      <figure className={styles.heroFigure}>
        <img className={styles.heroImage} src={dogBanner} alt="Cachorro levantando a pata" />
      </figure>
      <svg className={styles.svgHero} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path className={styles.svgPath} fillOpacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,245.3C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
    </section>
  );
};
