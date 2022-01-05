import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Portal = {
  children: ReactNode | ReactNode[];
  id?: string;
};

export const Portal = ({ children, id }: Portal) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (mounted && document.querySelector(id || "#portal"))
    return (createPortal as any)(
      children,
      document.querySelector(id || "#portal")
    );
  return null;
};
