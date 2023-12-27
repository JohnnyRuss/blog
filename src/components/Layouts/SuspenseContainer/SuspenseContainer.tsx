import { Suspense } from "react";

type SuspenseContainerT = {
  children: React.ReactNode;
};

const SuspenseContainer: React.FC<SuspenseContainerT> = ({ children }) => {
  return <Suspense fallback={<>Loading...</>}>{children}</Suspense>;
};

export default SuspenseContainer;
