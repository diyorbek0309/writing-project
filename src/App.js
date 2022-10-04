import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
