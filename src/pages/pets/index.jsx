import { Container } from "../../components/container";
import { PetCard } from "../../components/petCard";
import { PetCardSkeleton } from "../../components/petCardSkeleton/PetCardSkeleton";
import { usePets } from "../../hooks/usePets";
import { useMemo, useState } from "react";
import styles from "./Pets.module.css";
import catImage from "../../assets/images/adopted-banner-cat.webp";
import Filters from "../../components/Filters";

const initialFilters = {
  order: "recent",
  category: "all",
  sex: "all",
  age: "all",
  size: "all",
  temperament: "all",
  status: "all",
};

const normalize = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase();

const getUniqueValues = (pets, field) =>
  [...new Set(pets.map((pet) => pet[field]).filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b), "pt-BR")
  );

export const Pets = () => {
  const { pets, isLoading } = usePets();
  const [filters, setFilters] = useState(initialFilters);

  const filterOptions = useMemo(
    () => ({
      categories: getUniqueValues(pets, "Categoria"),
      sex: getUniqueValues(pets, "Sexo"),
      age: getUniqueValues(pets, "Idade"),
      size: getUniqueValues(pets, "Porte"),
      temperament: getUniqueValues(pets, "Temperamento"),
    }),
    [pets]
  );

  const filteredPets = useMemo(() => {
    const filtered = [...pets].filter((pet) => {
      const isAdopted = Boolean(normalize(pet.Adotado));

      if (filters.status === "available" && isAdopted) return false;
      if (filters.status === "adopted" && !isAdopted) return false;
      if (filters.category !== "all" && pet.Categoria !== filters.category) return false;
      if (filters.sex !== "all" && pet.Sexo !== filters.sex) return false;
      if (filters.age !== "all" && pet.Idade !== filters.age) return false;
      if (filters.size !== "all" && pet.Porte !== filters.size) return false;
      if (filters.temperament !== "all" && pet.Temperamento !== filters.temperament) return false;

      return true;
    });

    filtered.sort((a, b) => {
      if (filters.order === "name-asc") {
        return String(a.Nome).localeCompare(String(b.Nome), "pt-BR");
      }

      if (filters.order === "name-desc") {
        return String(b.Nome).localeCompare(String(a.Nome), "pt-BR");
      }

      const dateA = new Date(`${a.Chegada}T12:00:00`).getTime();
      const dateB = new Date(`${b.Chegada}T12:00:00`).getTime();

      return filters.order === "oldest" ? dateA - dateB : dateB - dateA;
    });

    return filtered;
  }, [pets, filters]);

  const clearFilters = () => setFilters(initialFilters);

  return (
    <main>
      <section className={styles.hero}>
        <h1 className="fontDisplay">Adote</h1>
        <img
          src={catImage}
          alt="Rosto de um gato branco olhando atentamente para a frente, representando os animais adotados"
          loading="lazy"
        />
      </section>
      <section>
        <Filters
          filters={filters}
          onChange={setFilters}
          clearFilters={clearFilters}
          options={filterOptions}
        />
        <Container className={styles.petsGrid}>
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <div key={index}>
                  <PetCardSkeleton />
                </div>
              ))
            : filteredPets.length > 0
            ? filteredPets.map((pet) => (
                <div key={pet.id}>
                  <PetCard pet={pet} />
                </div>
              ))
            : null}
        </Container>
        {!isLoading && filteredPets.length === 0 && (
          <Container>
            <p>Nenhum pet encontrado com os filtros atuais.</p>
          </Container>
        )}
      </section>
    </main>
  );
};
