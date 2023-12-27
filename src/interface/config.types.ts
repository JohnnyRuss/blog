type RouteT = {
  path: string;
  title: string;
  element: React.ReactNode;
  children: Array<RouteT>;
};

export type { RouteT };
