export const API_BASE_URL = process.env.API_BASE_URL || 'http://127.0.0.1:3000/api'

import { BsChevronDoubleDown, BsChevronDoubleUp, BsClipboard, BsClipboard2Pulse } from "react-icons/bs";
//constante de data para las card en el home
export const cardData = [
    {
        Icon: BsClipboard,
        title: "Balance Total",
        color: undefined,
        colorIcon: "text-blue-500",
        subColor: "text-green-400",
    },
    {
        Icon: BsChevronDoubleUp,
        title: "Ingresos Mensuales",
        color: "text-green-400",
        colorIcon: "text-green-500",
        subColor: "text-green-500",
    },
    {
        Icon: BsChevronDoubleDown,
        title: "Gastos Mensuales",
        color: "text-red-400",
        colorIcon: "text-red-500",
        subColor: "text-red-500",
    },
    {
        Icon: BsClipboard2Pulse,
        title: "Ahorro",
        color: "text-purple-400",
        colorIcon: "text-purple-500",
        subColor: "text-purple-500",
    },
];

export const backgroundColorButton: string = 'bg-gradient-to-tl from-cyan-800 to-cyan-500'

export const backgroundCard:string='bg-gray-900'