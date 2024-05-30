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

    const agregarHistoria = async (historia) => {
        try {
            const response = await fetch('http://localhost:3000/historias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(historia)
            });
            if (!response.ok) {
                throw new Error('Error al agregar la historia');
            }
            const nuevaHistoria = await response.json();
            setHistorias(prev => [...prev, nuevaHistoria]);
        } catch (err) {
            setError(err.message);
        }
    };

    const editarHistoria = (id, historiaActualizada) => {
        setHistorias(prev => prev.map(hist => hist.id === id ? historiaActualizada : hist));
    };

    const borrarHistoria = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/historias/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al borrar la historia');
            }
            setHistorias(prev => prev.filter(hist => hist.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <GlobalContext.Provider value={{ historias, agregarHistoria, editarHistoria, borrarHistoria, dataHistòria, setDataHistòria, loading, error }}>
            {children}
        </GlobalContext.Provider>
    );
};
