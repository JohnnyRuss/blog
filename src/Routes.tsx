import AppRoutes from "@/config/routes";
import { Routes as ReactRouter, Route } from "react-router-dom";

type RoutesT = {};

const Routes: React.FC<RoutesT> = () => {
  return (
    <ReactRouter>
      {AppRoutes.map((route) => (
        <Route key={route.title} path={route.path} element={route.element}>
          {route.children.length > 0 ? (
            <Route
              key={route.title}
              path={route.path}
              element={route.element}
            />
          ) : (
            <></>
          )}
        </Route>
      ))}
    </ReactRouter>
  );
};

export default Routes;
