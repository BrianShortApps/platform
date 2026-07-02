import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { PortalContextValue } from "../types";

type PortalProviderProps = {
  value: PortalContextValue;
  children: ReactNode;
};

export const PortalContext = createContext<PortalContextValue | undefined>(
  undefined,
);

export const PortalProvider = ({ value, children }: PortalProviderProps) => {
  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
};

export const usePortal = (): PortalContextValue => {
  const context = useContext(PortalContext);

  if (!context) {
    throw new Error("usePortal must be used inside PortalProvider");
  }

  return context;
};
