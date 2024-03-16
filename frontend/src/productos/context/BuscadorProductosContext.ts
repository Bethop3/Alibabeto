import { createContext } from "react";
import { ContextUseBuscadorProductos } from "../hooks/useBuscadorProductos";

export const BuscadorProductosContext = createContext<ContextUseBuscadorProductos | undefined>(undefined);
