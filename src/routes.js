import Modal from "./components/Modal";
import Result from "./pages/Result";
import Help from "./pages/Help";
import Comp from "./pages/competition"
import Home from "./pages/Home";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "result", element: <Modal /> },
  { path: "history", element: <Result /> },
  { path: "competition", element: <Comp /> },
  { path: "help", element: <Help /> },
];
