import { createContext, useState, useEffect, useMemo } from "react";
import Papa from "papaparse";

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ-1mmwDCCXT0EaVI2gtrcEkG6vo81iqjQbK6vBdQKu8j5KI_h4MwMlZJhydErwxdgDbL-aK2KM0sF/pub?gid=676472305&single=true&output=csv";

  useEffect(() => {
    Papa.parse(URL, {
      download: true,
      header: true,
      skipEmptyLines: "greedy",
      complete: (results) => {
        const petsComId = results.data.map((pet, index) => {
          const nomeLimpo = pet.Nome
            ? pet.Nome.toLowerCase()
                .normalize("NFD") 
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "") 
            : "pet"; 
          return {
            ...pet,
            id: `${nomeLimpo}-${index + 1}`,
          };
        });

        setPets(petsComId);
        setIsLoading(false);
      },
      error: (err) => {
        console.error("Erro ao ler o CSV:", err);
        setError("Não foi possível carregar a lista de pets. Tente novamente mais tarde.");
        setIsLoading(false);
      },
    });
  }, []);

  const contextValue = useMemo(
    () => ({ pets, isLoading, error }),
    [pets, isLoading, error]
  );

  return (
    <PetsContext.Provider value={contextValue}>
      {children}
    </PetsContext.Provider>
  );
};