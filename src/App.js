import { BrowserRouter, Route, Routes } from "react-router-dom";
import Libros from "./components/libros/Libros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/libros" element={<Libros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
