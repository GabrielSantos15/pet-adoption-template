import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import Papa from "papaparse";
import { PetsList } from "./components/petsList";
import { useDestaques } from "./hooks/useDestaques";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ-1mmwDCCXT0EaVI2gtrcEkG6vo81iqjQbK6vBdQKu8j5KI_h4MwMlZJhydErwxdgDbL-aK2KM0sF/pub?gid=676472305&single=true&output=csv";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    Papa.parse(URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results.data);
        setPets(results.data);
      },
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Home pets={pets}></Home>
    </>
  );
}

export default App;
