// src/context/PageContext.jsx
import { createContext, useContext } from "react";

export const PageContext = createContext();

export function usePages() {
    return useContext(PageContext);
}
