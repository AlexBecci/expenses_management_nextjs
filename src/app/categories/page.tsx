'use client'

import { useTranslation } from "react-i18next";
import { ContainerMain } from "../hooks/ContainerMain"
import { Category } from "../types/types";
import { useState } from "react";
import { BsSearch, BsTrash2 } from "react-icons/bs";
import { BiEdit, BiPlus } from "react-icons/bi";


export default function CategoryPage() {
    const { t } = useTranslation();
    //categorias hardcodeadas
    const [categories, setCategories] = useState<Category[]>([
        {
            id: 1,
            name: "Electronics",
            description: "Electronic devices and accessories",
            createdAt: "2024-02-20",
        },
        {
            id: 2,
            name: "Books",
            description: "Physical and digital books",
            createdAt: "2024-02-20",
        },
    ]);
    return (
        <ContainerMain >
            {/* <h1 className="text-3xl  text-gray-800">{t('categories.title')}</h1> */}
            <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Gestión de Categorías</h1>
            <div className="mt-4">

                <h1 className="text-base  text-white">Gestione aquí las categorías de sus productos</h1>
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
                            className="pl-10 w-full border bg-gray-800/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus-visible:ring-blue-400"
                        />
                    </div>
                    {/* BUTTON */}
                    <button
                        /*   onClick={() => setIsModalOpen(true)} */
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-300  transition-all duration-200 text-gray-800   "
                    >
                        <BiPlus className="h-6 w-6" />
                        <span>Crear categoría</span>
                    </button>
                </div>
                {/* CARDS CATEGORIES*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 ">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-200 p-6  shadow-sm border  hover:shadow-md "
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-base  text-gray-200">
                                        {category.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Created on {category.createdAt}
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
                            <p className="text-gray-400 text-sm">{category.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </ContainerMain>
    )
}