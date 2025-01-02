'use client'
import { LuLoaderCircle } from "react-icons/lu";

export function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
        </div>
    )
}

export function LoaderHover() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <LuLoaderCircle size={80} className="animate-spin text-blue-500" />
        </div>
    )
}