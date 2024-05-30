import React, { createContext, useState, useEffect } from 'react';
import historiasData from '../bd.json'; // Importar el archivo JSON

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);
    const [dataHistòria, setDataHistòria] = useState(null);

    useEffect(() => {
        // Cargar los datos de bd.json al montar el componente
        setHistorias(historiasData.historias);
    }, []);

    const agregarHistoria = (historia) => {
        setHistorias(prev => [...prev, { ...historia, id: Date.now() }]);
    };

    const editarHistoria = (id, historiaActualizada) => {
        setHistorias(prev => prev.map(hist => hist.id === id ? historiaActualizada : hist));
    };

    return (
        <GlobalContext.Provider value={{ historias, agregarHistoria, editarHistoria, dataHistòria, setDataHistòria }}>
            {children}
        </GlobalContext.Provider>
    );
};
