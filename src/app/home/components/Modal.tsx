import { ButtonComponent } from "@/app/components/buttons/Button";
import { ModalProps } from "@/app/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";


// Tipos para los datos del formulario
interface FormValues {
    amount: number;
    type: string;
    category: string;
    description: string;
}
export function Modal({ confirm, onClose }: ModalProps) {
    //constantes importadas desde la libreria de react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

    // Enviar datos del formulario
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Datos enviados:", data);
        /* confirm(); */
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
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
                            {...register("category", { required: "La categoría es obligatoria" })}
                            className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
                        >
                            <option value="">Seleccionar categoría</option>
                            <option value="salary">Salario</option>
                            <option value="food">Alimentación</option>
                            <option value="transport">Transporte</option>
                            <option value="utilities">Servicios</option>
                        </select>
                        {errors.category && (
                            <span className="text-red-500 text-xs">{errors.category.message}</span>
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