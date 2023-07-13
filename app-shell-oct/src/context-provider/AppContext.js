import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [modules, setModules] = useState([]);
    return (
        <AppContext.Provider
            value={{
                modules, setModules
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;