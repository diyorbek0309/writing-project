import Modal from "./components/Modal";
import Home from "./pages/Home";
import Result from "./pages/Result";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "result", element: <Modal /> },
  { path: "history", element: <Result /> },
  { path: "competition", element: <Modal /> },
  { path: "help", element: <Modal /> },
];
