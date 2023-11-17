import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/User/RegisterPage';
import Libros from "./components/libros/Libros";
import LoginPage from './components/User/LoginPage';

function App() {
  return (
    <div className="aplicacion">
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<h1>Home</h1>} />
        <Route path='/register' element= {<RegisterPage/>} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
