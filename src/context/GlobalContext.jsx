import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);

    return (
        <GlobalContext.Provider value={{ historias, setHistorias }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
