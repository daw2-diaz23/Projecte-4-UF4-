import React, { useState, useEffect } from "react";
import CardItem from "./Card";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import historiasData from '../bd.json'; // Importar el archivo JSON

const Cards = () => {
  const [historias, setHistorias] = useState([]);

  useEffect(() => {
    // Simular la carga de datos desde el archivo JSON
    setHistorias(historiasData.historias);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Mis historias</h2>
      <div className="max-w-[1200px] gap-4 grid grid-cols-12">
        {historias.map((historia) => (
          <CardItem
            key={historia.id}
            title={historia.titulo}
            date={historia.fecha}
            description={historia.experiencia}
            imageUrl={historia.imagen}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Button auto icon={<Plus className="w-4 h-4" />}>
          Añadir Historia
        </Button>
      </div>
    </div>
  );
};

export default Cards;
