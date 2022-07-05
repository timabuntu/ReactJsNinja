import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { UseState } from './pages/UseState';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/usestate' element={<UseState />} />
    </Routes>
  );
}
