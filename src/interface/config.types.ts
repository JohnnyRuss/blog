type RouteT = {
  path: string;
  title: string;
  element: React.ReactNode;
  children: Array<RouteT>;
};

type DecodedUserT = {
  _id: string;
  email: string;
  exp: number;
  iat: number;
};

export type { RouteT, DecodedUserT };
