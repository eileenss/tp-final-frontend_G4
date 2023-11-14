import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Libros from './components/libros/Libros';
import LibroDetails from './components/libros/LibroDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/libros" element={<Libros />} />
        <Route path="/libros/:id" element={<LibroDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
