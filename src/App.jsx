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
  const destaques = useDestaques(pets, 5);

  return (
    <>
      {/* <Header></Header> */}
      <Home></Home>
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">Conheça alguns dos nossos animais</h2>
      <p  className="text-[clamp(1rem,2vw,1.2rem)] text-gray-600 mt-2">Cada um deles tem uma história, talvez a próxima seja com você</p>
      <PetsList pets={destaques}></PetsList>
    </>
  );
}

export default App;
