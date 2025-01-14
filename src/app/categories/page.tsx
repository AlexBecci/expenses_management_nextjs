'use client'

import { ContainerMain } from "../hooks/ContainerMain"
import { Category, ModalProps } from "../types/types";
import { useEffect, useState } from "react";
import { BsSearch, BsTrash2 } from "react-icons/bs";
import { BiEdit, BiPlus } from "react-icons/bi";
import { Subtitle, Title } from "../components/header/Texts";
import { ButtonComponent } from "../components/buttons/Button";
import { fetchCategories, getUserIdByCookie } from "../api/get";
import { IoClose } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";


export default function CategoryPage() {
    //categorias hardcodeadas
    const [categories, setCategories] = useState<Category[]>([]);
    const user_id = getUserIdByCookie();
    const [loading, setLoading] = useState<boolean>(false)

    //funcion que me trae las categorias
    async function getCategories(user_id: number) {
        try {
            setLoading(true)
            const data = await fetchCategories(user_id);
            setCategories(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (user_id) {
            getCategories(user_id)
        }
        else {
            console.error('User ID is missing')
        }
    }, [user_id])
    return (
        <ContainerMain >
            <Title title='Gestión de Categorías' />
            <div className="mt-4">
                <h1 className="text-base  text-white"></h1>
                <Subtitle subtitle="Gestione aquí las categorías de sus productos" />
                {/* INPUT */}
                <div className="flex flex-col md:flex-row gap-4 my-6">
                    {/*    <div className="relative flex-1">
                        <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search categories..."
                            className="pl-10 pr-4 py-2 w-full border text-black border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div> */}
                    <div className="relative">
                        <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            placeholder="Buscar categorías..."
                            className="pl-10 w-full rounded-md border bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus-visible:ring-blue-400"
                        />
                    </div>
                    {/* BUTTON */}

                    <ButtonComponent text="Crear categoría" className="" icon={<BiPlus />} click={() => console.log('')} />
                </div>
                {/* CARDS CATEGORIES*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 rounded-md h-[500px] overflow-y-auto">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-200 p-6 rounded-md  shadow-sm border  hover:shadow-md "
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-base  text-gray-200">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Tipo <span className={`${category.type === 'expense' ? 'text-red-500' : category.type === 'income' ? 'text-green-500' : ''}`}> {category.type === 'expense' ? 'Gasto' : category.type === 'income' ? 'Ingreso' : 'No hay valor'}</span>
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        /*  onClick={() => handleEdit(category)} */
                                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-700/50  transition-colors duration-200"
                                    >
                                        <BiEdit className="h-5 w-5" />
                                    </button>
                                    <button
                                        /*   onClick={() => handleDelete(category)} */
                                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-700/50  transition-colors duration-200"
                                    >
                                        <BsTrash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            {/*                     <p className="text-gray-400 text-sm">{category.description}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </ContainerMain>
    )
}


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