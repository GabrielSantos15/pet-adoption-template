import { useEffect, useState } from "react";
import Papa from "papaparse";
import { AppRouter } from "./routes";
import { PetsProvider } from "./context/PetsContext";

function App() {
  return (
    <PetsProvider>
      <AppRouter />
    </PetsProvider>
  );
}

export default App;
