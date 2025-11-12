import { createContext, useContext } from "react";

// Create the Context
export const AppContext = createContext();

// Custom hook for easy use
export const useAppContext = () => useContext(AppContext);