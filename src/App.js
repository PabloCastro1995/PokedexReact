import Main from "./Componentes/Main/Main.jsx";
import Tarjeta from "./Componentes/Tarjeta/Tarjeta.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="tarjeta/:nombre" element={<Tarjeta />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
