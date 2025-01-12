'use client'
import { AiOutlinePlus } from "react-icons/ai";
import { ButtonComponent } from "../components/buttons/Button";
import { Subtitle, Title } from "../components/header/Texts";
import { ContainerMain } from "../hooks/ContainerMain";
import { cardData } from "../lib/constants";
import { useState } from "react";
import { IoClose } from "react-icons/io5";




export default function HomePage() {
  //constante de modal
  const [modal, setModal] = useState<boolean>(false)

  return (
    <ContainerMain>
      <Title title='Inicio' />
      <div className="mt-4">
        <Subtitle subtitle="Bienvenido a tu panel de control financiero" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 my-2">
          {cardData.map(({ Icon, title, color, colorIcon, subColor }, index) => (
            <Card
              key={index}
              Icon={Icon}
              title={title}
              color={color}
              colorIcon={colorIcon}
              subColor={subColor}
            />
          ))}
        </div>
        <div className="my-4">
          {/* Botón con ícono de "+" */}
          <ButtonComponent
            click={() => setModal(true)}
            text="Agregar nueva transacción"
            icon={<AiOutlinePlus />}
          />
        </div>
      </div>
      {/* COMPONENTES DE MODAL */}
      {modal && (
        <Modal confirm={() => setModal(false)} onClose={() => setModal(false)} />
      )}
    </ContainerMain>
  );
}


//modal
interface ModalProps {
  onClose: () => void;
  confirm: () => void;
}
export function Modal({ confirm, onClose }: ModalProps) {
  function sendData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('enviando')
    confirm()
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <form onSubmit={sendData} className="bg-gray-900 border border-white/59 rounded-lg w-full max-w-md p-6">
        {/* Título y Descripción */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg  text-gray-100">Agregar Transacción</h2>
            <IoClose onClick={onClose} size={20} className=" border rounded-full border-white/50" />
          </div>
          <p className="text-gray-400 text-sm">Ingrese los detalles de la nueva transacción</p>
        </div>
        <div className="space-y-6">
          {/* Monto */}
          <div>
            <label htmlFor="amount" className="block text-gray-200 text-sm">Monto</label>
            <input
              id="amount"
              type="number"
              placeholder="0.00"
              min={0}
              className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          {/* Tipo */}
          <div>
            <label htmlFor="type" className="block text-gray-200 text-sm">Tipo</label>
            <select
              id="type"
              className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Seleccionar tipo</option>
              <option value="income">Ingreso</option>
              <option value="expense">Gasto</option>
            </select>
          </div>
          {/* Categoría */}
          <div>
            <label htmlFor="category" className="block text-gray-200 text-sm">Categoría</label>
            <select
              id="category"
              required
              className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Seleccionar categoría</option>
              <option value="salary">Salario</option>
              <option value="food">Alimentación</option>
              <option value="transport">Transporte</option>
              <option value="utilities">Servicios</option>
            </select>
          </div>
          {/* Descripción */}
          <div>
            <label htmlFor="description" className="block text-gray-200 text-sm">Descripción</label>
            <input
              id="description"
              type="text"
              required
              placeholder="Descripción de la transacción"
              className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
        {/* Botón de guardar */}
        <div className="mt-6 flex justify-end">
          <ButtonComponent  className="w-1/2" text="Guardar Transacción" />
        </div>
      </form>
    </div>
  )
}
interface CardProps {
  title: string
  color?: string
  subColor: string
  colorIcon: string
  Icon: React.ElementType; // Tipo para un componente React
}
const Card = ({ title, color, subColor, colorIcon, Icon }: CardProps) => {
  return (
    < div className="bg-gray-800/50 border rounded-lg border-gray-200/20" >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm  text-gray-400">{title}</p>
            <h3 className={`text-lg ${color} `}>$24,500.00</h3>
            <p className={`text-xs ${subColor}  mt-1`}>+2.5% vs. mes anterior</p>
          </div>
          <div className="p-3 bg-blue-500/10 rounded-full">
            <Icon className={`w-6 h-6 ${colorIcon}`} />
          </div>
        </div>
      </div>
    </div >
  )
}


