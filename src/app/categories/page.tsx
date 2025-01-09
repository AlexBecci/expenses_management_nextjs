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
            <h1 className="text-3xl  text-white">Gestión de Categorías</h1>
            <div className="mt-4">
                <h1 className="text-base  text-white">Gestione aquí las categorías de sus productos</h1>
                {/* INPUT */}
                <div className="flex flex-col md:flex-row gap-4 my-6">
                    <div className="relative flex-1">
                        <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search categories..."
                            className="pl-10 pr-4 py-2 w-full border text-black border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        /*   value={searchTerm} */
                        /*  onChange={(e) => setSearchTerm(e.target.value)} */
                        />
                    </div>
                    {/* BUTTON */}
                    <button
                        /*   onClick={() => setIsModalOpen(true)} */
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 transition-colors duration-200"
                    >
                        <BiPlus className="h-5 w-5" />
                        <span>Crear categoría</span>
                    </button>
                </div>
                {/* CARDS CATEGORIES*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white p-6  shadow-sm border border-red-500 hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-base  text-gray-900">
                                        {category.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Created on {category.createdAt}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        /*  onClick={() => handleEdit(category)} */
                                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50  transition-colors duration-200"
                                    >
                                        <BiEdit className="h-5 w-5" />
                                    </button>
                                    <button
                                        /*   onClick={() => handleDelete(category)} */
                                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50  transition-colors duration-200"
                                    >
                                        <BsTrash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ContainerMain>
    )
}