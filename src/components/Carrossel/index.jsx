import { PetCard } from "../petCard";
import { useRef } from "react";
import styles from "./petList.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PetCardSkeleton } from "../petCardSkeleton/PetCardSkeleton";

export const Carrossel = ({ pets, loading }) => {
  const scrollRef = useRef(null);
  const skeletonCount = 5;

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
        {loading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <div key={index} className={styles.carouselItem}>
                <PetCardSkeleton />
              </div>
            ))
          : pets.map((pet, index) => (
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
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Rolar para a direita"
          className={styles.controlButtonSecondary}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
