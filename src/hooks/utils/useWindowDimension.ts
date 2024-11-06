import { useState, useEffect } from "react";

export default function useWindowDimension() {
  const [width, setWidth] = useState(window.innerWidth);

  const onWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return { width };
}
