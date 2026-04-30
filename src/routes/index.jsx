import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Pets } from '../pages/pets';
import Header from '../components/header';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  );
}