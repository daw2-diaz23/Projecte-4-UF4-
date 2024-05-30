import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);
    const [dataHistòria, setDataHistòria] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistorias = async () => {
            try {
                const response = await fetch('http://localhost:3000/historias');
                console.log('Response status:', response.status); // Verifica la respuesta
                if (!response.ok) {
                    throw new Error('Error al cargar las historias');
                }
                const data = await response.json();
                console.log('Data fetched:', data); // Verifica los datos recibidos
                setHistorias(data || []); // Asegura que siempre se establezca un array
            } catch (err) {
                setError(err.message);
                setHistorias([]);  // Asegura que historias sea un arreglo
            } finally {
                setLoading(false);
            }
        };

        fetchHistorias();
    }, []);

    const agregarHistoria = (historia) => {
        setHistorias(prev => [...prev, { ...historia, id: Date.now() }]);
    };

    const editarHistoria = (id, historiaActualizada) => {
        setHistorias(prev => prev.map(hist => hist.id === id ? historiaActualizada : hist));
    };

    return (
        <GlobalContext.Provider value={{ historias, agregarHistoria, editarHistoria, dataHistòria, setDataHistòria, loading, error }}>
            {children}
        </GlobalContext.Provider>
    );
};
