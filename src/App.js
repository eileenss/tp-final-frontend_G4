import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Libros from './components/libros/Libros';
import RegisterPage from './components/User/RegisterPage';
import LibroDetails from './components/libros/LibroDetails';
import Home from './components/home/home';

function App() {
  return (
    <div className="aplicacion">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/libros/:id" element={<LibroDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
