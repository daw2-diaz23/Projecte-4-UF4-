import React from "react";
import CardItem from "./Card";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";

const Cards = () => {
  const cardData = [
    {
      title: "Viaje a Tailandia",
      date: "Junio de 2023",
      description: "Exploración de las playas paradisíacas y la bulliciosa vida urbana de Bangkok. Una combinación perfecta entre relajación y aventura.",
      imageUrl: "https://www.hola.com/imagenes/viajes/2014043070965/fotogaleria-maravillas-tailandia-imagenes/0-268-357/a_Ko-Hong-a.jpg"
    },
    {
      title: "Viaje a Italia",
      date: "Abril de 2024",
      description: "Un viaje culinario y cultural por las ciudades más emblemáticas de Italia. Desde las ruinas romanas hasta las delicias gastronómicas, cada momento fue una delicia para los sentidos.",
      imageUrl: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/11/22/lago-kawaguchiko.jpeg"
    },
    {
      title: "Viaje a Japón",
      date: "Noviembre de 2022",
      description: "Sumergirse en la mezcla única de tradición y modernidad de Japón. Desde los tranquilos templos hasta las bulliciosas calles de Tokio, cada momento era una aventura.",
      imageUrl: "https://img.pixers.pics/pho_wat(s3:700/FO/68/57/99/72/700_FO68579972_50fb992e443238899170fb869acf9619.jpg,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/cortinas-transparentes-paisaje-de-italia-serie-aldea-manarola-y-cinque-terre-cinque-terre.jpg.jpg"
    },
    {
      title: "Viaje a Perú",
      date: "Septiembre de 2023",
      description: "Un viaje épico por las antiguas ruinas de Machu Picchu y la bulliciosa ciudad de Cusco. Descubrimos la rica historia y la impresionante belleza natural de este país sudamericano.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs43W89Xxm4lmXdoqXD02yDzlehKP6caOrxA&s"
    },
    {
      title: "Viaje a Kenia",
      date: "Marzo de 2024",
      description: "Un safari inolvidable por las vastas llanuras de Masai Mara y Amboseli. Nos maravillamos con la diversidad de la vida salvaje y la belleza natural de Kenia.",
      imageUrl: "https://www.kiwakatravel.com/wp-content/uploads/2023/03/wildebeests-g4636007e3_1280-1024x682.jpg"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Mis historias</h2>
      <div className="max-w-[1200px] gap-4 grid grid-cols-12">
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            title={card.title}
            date={card.date}
            description={card.description}
            imageUrl={card.imageUrl}
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
