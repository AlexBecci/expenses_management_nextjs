'use client'

import { useTranslation } from "react-i18next";
import { ContainerMain } from "../hooks/ContainerMain"

export default function CategoryPage() {
    const { t } = useTranslation();

    return (
        <ContainerMain >
            <h1 className="text-3xl font-semibold text-gray-800">{t('categories.title')}</h1>
            <div className="mt-8">

            </div>
        </ContainerMain>
    )
}