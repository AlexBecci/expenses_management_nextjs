'use client'
import { AiOutlinePlus } from "react-icons/ai";
import { ButtonComponent } from "../components/buttons/Button";
import { Subtitle, Title } from "../components/header/Texts";
import { ContainerMain } from "../hooks/ContainerMain";
import { cardData } from "../lib/constants";
import { useState } from "react";
import { Modal } from "./components/Modal";
import { CardHome } from './components/Card'
import { List } from "./components/List";

export default function HomePage() {
  //constante de modal
  const [modal, setModal] = useState<boolean>(false)

  return (
    <ContainerMain>
      <Title title='Inicio' />
      <div className="mt-4">
        <Subtitle subtitle="Bienvenido a tu panel de control financiero" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 my-2">
          {cardData.map(({ Icon, title, color, colorIcon, subColor, value }, index) => (
            <CardHome
              value={value}
              key={index}
              Icon={Icon}
              title={title}
              color={color}
              colorIcon={colorIcon}
              subColor={subColor}
            />
          ))}
        </div>
        <div className="my-4 lg:w-1/3 lg:ml-auto">
          {/* Botón con ícono de "+" */}
          <ButtonComponent
            click={() => setModal(true)}
            text="Agregar nueva transacción"
            icon={<AiOutlinePlus />}
          />
        </div>
        {/* LIST TRANSACCIONS BY USER */}
        <List />
      </div>
      {/* COMPONENTES DE MODAL */}
      {modal && (
        <Modal confirm={() => setModal(false)} onClose={() => setModal(false)} />
      )}
    </ContainerMain>
  );
}





