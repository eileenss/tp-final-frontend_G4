import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Libros from './components/libros/Libros';
import RegisterPage from './components/User/RegisterPage';
import LibroDetails from './components/libros/LibroDetails';
import LoginPage from './components/User/LoginPage';
import Home from './components/home/home';
import LoginDisconnect from './components/User/LoginDisconnect';

function App() {
  return (
    <div className="aplicacion">
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/register' element= {<RegisterPage/>} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/libros/:id" element={<LibroDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/disconnect" element={<LoginDisconnect />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
