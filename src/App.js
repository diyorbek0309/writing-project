import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/result" index element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
