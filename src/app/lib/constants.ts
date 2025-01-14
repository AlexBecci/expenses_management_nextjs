export const API_BASE_URL = process.env.API_BASE_URL || 'http://127.0.0.1:2000/api'

import { BsChevronDoubleDown, BsChevronDoubleUp, BsClipboard, BsClipboard2Pulse } from "react-icons/bs";
//constante de data para las card en el home
export const cardData = [
    {
        Icon: BsClipboard,
        title: "Balance Total",
        value: '20000',
        color: undefined,
        colorIcon: "text-blue-500",
        subColor: "text-green-400",
    },
    {
        Icon: BsChevronDoubleUp,
        value: '20000',
        title: "Ingresos Mensuales",
        color: "text-green-400",
        colorIcon: "text-green-500",
        subColor: "text-green-500",
    },
    {
        Icon: BsChevronDoubleDown,
        value: '20000',
        title: "Gastos Mensuales",
        color: "text-red-400",
        colorIcon: "text-red-500",
        subColor: "text-red-500",
    },
    {
        Icon: BsClipboard2Pulse,
        value: '20000',
        title: "Ahorro",
        color: "text-purple-400",
        colorIcon: "text-purple-500",
        subColor: "text-purple-500",

    },
];

export const backgroundColorButton: string = 'bg-gradient-to-tl from-cyan-800 to-cyan-500 hover:bg-gradient-to-tl hover:from-cyan-900 hover:to-cyan-600'

export const backgroundCard: string = 'bg-gray-900'