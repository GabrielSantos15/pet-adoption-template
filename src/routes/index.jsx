import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Home } from '../pages/home';
import { Pets } from '../pages/pets';
import Header from '../components/header';
import { PetDetails } from '../pages/petDetails';

function RouterContent() {
  const location = useLocation();
  const isPetDetailsRoute = location.pathname.startsWith('/pet/');
  const hasHero = location.pathname === '/' || location.pathname === '/pets';

  return (
    <>
      <Header isPetDetailsRoute={isPetDetailsRoute} hasHero={hasHero} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pet/:id" element={<PetDetails />} />
      </Routes>
    </>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  );
}