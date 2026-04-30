import { createContext, useState, useEffect } from "react";
import Papa from "papaparse";

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ-1mmwDCCXT0EaVI2gtrcEkG6vo81iqjQbK6vBdQKu8j5KI_h4MwMlZJhydErwxdgDbL-aK2KM0sF/pub?gid=676472305&single=true&output=csv";

  useEffect(() => {
    Papa.parse(URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setPets(results.data);
        setIsLoading(false);
      },
      error: (err) => {
        console.error("Erro ao ler o CSV:", err);
        setPets([]);
        setIsLoading(false);
      },
    });
  }, []); 

  return (
    <PetsContext.Provider value={{ pets, isLoading }}>
      {children}
    </PetsContext.Provider>
  );
};
