import { getTokenInSession, getUserIdByCookie } from "@/app/api/get";
import { ButtonComponent } from "@/app/components/buttons/Button";
import { Loader, LoaderHover, LoadingFetch } from "@/app/components/loaders/Loadings";
import { API_BASE_URL } from "@/app/lib/constants";
import { getCurrentDate, getCurrentMonthYear } from "@/app/lib/utils";
import { ModalProps } from "@/app/types/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";


// Tipos para los datos del formulario
interface TransactionDTO {
    amount: number;
    type: string;
    description: string;
    period: string
    category_id: number
    user_id: number
    date: string
}
export function Modal({ confirm, onClose }: ModalProps) {
    //constantes importadas desde la libreria de react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<TransactionDTO>()
    //loading para mostrar hover para el fetch
    const [loading, setLoading] = useState<boolean>(false)
    // Enviar datos del formulario
    const onSubmit: SubmitHandler<TransactionDTO> = async (body) => {
        //obtenemos el token
        const token = getTokenInSession();
        const user_id = getUserIdByCookie()
        console.log("Datos enviados:", body);
        const period = getCurrentMonthYear();
        const date = getCurrentDate();
        console.log(period)
        const bodyParse: TransactionDTO = {
            amount: body.amount,
            category_id: body.category_id,
            date,
            description: body.description,
            period,
            type: body.type,
            user_id
        }
        setLoading(true)
        try {
            const response = await fetch(`${API_BASE_URL}/transactions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                credentials: 'include' as RequestCredentials, // Esto permite que las cookies se envíen con la solicitud
                body: JSON.stringify(bodyParse)
            })
            const data = await response.json();
            if (!response.ok) {
                toast.error(`${data.message}`);
                throw new Error(data.message || 'Algo salio mal')
            }
            toast.success(data.message)
            confirm()
        } catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            {loading && (
                <LoadingFetch />
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 border border-white/59 rounded-lg w-full max-w-md p-6">
                {/* Título y Descripción */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg text-gray-100">Agregar Transacción</h2>
                        <IoClose
                            onClick={onClose}
                            size={20}
                            className="border rounded-full cursor-pointer hover:border-2 border-white/50"
                        />
                    </div>
                    <p className="text-gray-400 text-sm">Ingrese los detalles de la nueva transacción</p>
                </div>
                <div className="space-y-6">
                    {/* Monto */}
                    <div>
                        <label htmlFor="amount" className="block text-gray-200 text-sm">
                            Monto
                        </label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="0.00"
                            min={0}
                            {...register("amount", { required: "El monto es obligatorio", valueAsNumber: true })}
                            className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                        {errors.amount && (
                            <span className="text-red-500 text-xs">{errors.amount.message}</span>
                        )}
                    </div>
                    {/* Tipo */}
                    <div>
                        <label htmlFor="type" className="block text-gray-200 text-sm">
                            Tipo
                        </label>
                        <select
                            id="type"
                            {...register("type", { required: "El tipo es obligatorio" })}
                            className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
                        >
                            <option value="">Seleccionar tipo</option>
                            <option value="income">Ingreso</option>
                            <option value="expense">Gasto</option>
                        </select>
                        {errors.type && (
                            <span className="text-red-500 text-xs">{errors.type.message}</span>
                        )}
                    </div>
                    {/* Categoría */}
                    <div>
                        <label htmlFor="category" className="block text-gray-200 text-sm">
                            Categoría
                        </label>
                        <select
                            id="category"
                            {...register("category_id", { required: "La categoría es obligatoria" })}
                            className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
                        >
                            <option value="">Seleccionar categoría</option>
                            <option value={1}>Salario</option>
                            <option value={2}>Alimentación</option>
                            <option value={3}>Transporte</option>
                            <option value={4}>Servicios</option>
                        </select>
                        {errors.category_id && (
                            <span className="text-red-500 text-xs">{errors.category_id.message}</span>
                        )}
                    </div>
                    {/* Descripción */}
                    <div>
                        <label htmlFor="description" className="block text-gray-200 text-sm">
                            Descripción
                        </label>
                        <input
                            id="description"
                            type="text"
                            autoComplete="off"
                            placeholder="Descripción de la transacción"
                            {...register("description", { required: "La descripción es obligatoria" })}
                            className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                        {errors.description && (
                            <span className="text-red-500 text-xs">{errors.description.message}</span>
                        )}
                    </div>
                </div>
                {/* Botón de guardar */}
                <div className="mt-6 flex justify-end">
                    <ButtonComponent className="w-1/2" text="Guardar Transacción" />
                </div>
            </form>
        </div>
    )
}