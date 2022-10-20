import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Navbar/Nav";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
