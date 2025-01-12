import { backgroundColorButton } from "@/app/lib/constants";
import { AiOutlinePlus } from "react-icons/ai";

interface ButtonProps {
    click?: () => void
    className?:string
    text: string
    icon?: React.ReactNode; // Prop para aceptar un icono
}
export function ButtonComponent({ click,className, text, icon }: ButtonProps) {
    return (
        <button
            onClick={click}
            className={`w-full flex  items-center justify-center gap-2 text-xs  ${backgroundColorButton} border border-gray-600/60 text-white py-2 rounded-md hover:bg-blue-600 ${className}`}
        >
            {icon && <span className="text-lg">{icon}</span>} {/* Renderiza el icono si existe */}
            {text}
        </button>
    )
}