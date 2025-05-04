import { RouterProvider } from "react-router-dom";
import Router from "./navigation/Router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
