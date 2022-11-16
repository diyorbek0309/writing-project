import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./Navbar/Nav";
import { routes } from "./routes";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import Result from "./pages/Result";
import Help from "./pages/Help";
import Comp from "./pages/competition";

function App() {
  let [isLight, setIsLight] = useState(true);

  const toggleLight = () => {
    setIsLight(true);
    console.log("dfgdz", isLight);
  };

  const toggleDark = () => {
    setIsLight(false);
    console.log("dfgdz", isLight);
  };

  return (
    <div className="App">
      <Nav toggleLight={toggleLight} toggleDark={toggleDark} />
      <Routes>
        <Route path="/" element={<Home isLight={isLight} />} />
        <Route path="result" element={<Modal />} />
        <Route path="history" element={<Result />} />
        <Route path="competition" element={<Comp />} />
        <Route path="help" element={<Help />} />
        {/* {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))} */}
      </Routes>
    </div>
    
  );
}

export default App;
