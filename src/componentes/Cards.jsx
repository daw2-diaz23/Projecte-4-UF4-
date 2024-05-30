import React, { useContext, useState } from "react";
import CardItem from "./Card";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { GlobalContext } from "../context/GlobalContext";
import ModalForm from "./ModalForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Cards = () => {
  const { historias, setDataHistòria, agregarHistoria, editarHistoria, borrarHistoria, dataHistòria } = useContext(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MySwal = withReactContent(Swal);

  const handleEdit = (historia) => {
    setDataHistòria(historia);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    MySwal.fire({
      title: 'Estas Seguro ?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("ID de la historia a borrar:", id);
        await borrarHistoria(id);
        MySwal.fire(
          'Borrado!',
          'La histora esta eliminada.',
          'success'
        );
      }
    });
  };

  const handleClose = () => {
    setDataHistòria(null);
    setIsModalOpen(false);
  };

  const handleSave = (data) => {
    if (data.id) {
      editarHistoria(data.id, data);
    } else {
      agregarHistoria(data);
    }
    handleClose();
  };

  const onOpen = () => {
    setDataHistòria(null); // Restablece dataHistòria para un nuevo formulario
    setIsModalOpen(true);
  };

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
            onEdit={() => handleEdit(historia)}
            onDelete={() => handleDelete(historia.id)}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Button auto icon={<Plus className="w-4 h-4" />} onClick={onOpen}>
          Añadir Historia
        </Button>
      </div>
      {isModalOpen && (
        <ModalForm
          isOpen={isModalOpen}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Cards;
