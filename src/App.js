import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Libros from './components/libros/Libros';
import RegisterPage from './components/User/RegisterPage';
import Libros from "./components/libros/Libros";
import LibroDetails from './components/libros/LibroDetails';
import LoginPage from './components/User/LoginPage';
import Home from './components/home/home';

function App() {
  return (
    <div className="aplicacion">
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<h1>Home</h1>} />
        <Route path='/register' element= {<RegisterPage/>} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/libros/:id" element={<LibroDetails />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
