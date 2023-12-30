import AppRoutes from "@/config/routes";
import { Routes as ReactRouter, Route } from "react-router-dom";

type RoutesT = {};

const Routes: React.FC<RoutesT> = () => {
  return (
    <ReactRouter>
      {AppRoutes.map((route) => (
        <Route key={route.title} path={route.path} element={route.element}>
          {route.children.length > 0 ? (
            route.children.map((childRoute) => (
              <Route
                key={childRoute.title}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))
          ) : (
            <></>
          )}
        </Route>
      ))}
    </ReactRouter>
  );
};

export default Routes;
