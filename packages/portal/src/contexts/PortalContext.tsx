import { createContext, useContext } from "react";
import type { PortalContextValue } from "../types";

export const PortalContext = createContext<PortalContextValue | undefined>(
  undefined,
);

export const usePortal = (): PortalContextValue => {
  const context = useContext(PortalContext);

  if (!context) {
    throw new Error("usePortal must be used inside PortalContext.Provider");
  }

  return context;
};
