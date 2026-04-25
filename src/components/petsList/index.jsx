import { PetCard } from "../petCard";
import { useRef } from "react";
import styles from "./petList.module.css";

export const PetsList = ({ pets }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={styles.petsList}>
      <div
        ref={scrollRef}
        className={styles.carousel}
      >
        {pets.map((pet, index) => (
          <div key={index} className={styles.carouselItem}>
            <PetCard pet={pet} />
          </div>
        ))}
      </div>

      {/* Botões */}

      <div className={styles.controls}>
        <button
          onClick={() => scroll("left")}
          aria-label="Rolar para a esquerda"
          className={styles.controlButtonPrimary}
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Rolar para a direita"
          className={styles.controlButtonSecondary}
        >
          →
        </button>
      </div>
    </div>
  );
};
