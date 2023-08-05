import { Route, Routes } from "react-router-dom";
import { routes } from "./menuRoutes";
import Layout from "../components/layout/Navbar";
import Notfound from "../components/pages/Notfound";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRouter;
