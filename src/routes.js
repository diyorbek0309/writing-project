import Modal from "./components/Modal";
import Home from "./Home";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "result", element: <Modal /> },
  { path: "online-comp", element: <Modal /> },
  { path: "competition", element: <Modal /> },
  { path: "help", element: <Modal /> },
];
