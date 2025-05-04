import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
