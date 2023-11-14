import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/User/RegisterPage';

function App() {
  return (
    <div className="aplicacion">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<h1>Home</h1>} />
          <Route path='/register' element= {<RegisterPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
