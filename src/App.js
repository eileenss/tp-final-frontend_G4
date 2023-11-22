import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Libros from './components/libros/Libros';
import RegisterPage from './components/User/RegisterPage';
import LibroDetails from './components/libros/LibroDetails';
import LoginPage from './components/User/LoginPage';
import Home from './components/home/home';
import LoginDisconnect from './components/User/LoginDisconnect';
import AddLibro from './components/libros/AddLibro';
import UpdateLibro from './components/libros/UpdateLibro';
import DeleteLibro from './components/libros/DeleteLibro';

function App() {
  return (
    <div className="aplicacion">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/libros/:id" element={<LibroDetails />} />
          <Route path="/libros/addLibro" element={<AddLibro />} />
          <Route path="/libros/updateLibro/:id" element={<UpdateLibro />} />
          <Route path="/libros/deleteLibro/:id" element={<DeleteLibro />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/disconnect" element={<LoginDisconnect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
