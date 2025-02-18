import { createContext } from "react";

export const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  let data = {};
  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
