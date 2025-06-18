import { createContext } from "react";
import { ContextUseProductoPorId } from "../hooks/useProductoPorId";

export const DetalleProductoContext = createContext<ContextUseProductoPorId | undefined>(undefined);
