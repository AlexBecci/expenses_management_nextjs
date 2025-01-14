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
    /*   return (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
              <LuLoaderCircle size={80} className="animate-spin text-blue-500" />
          </div>
      ) */
    return (
        <div className="flex bg-gradient-to-tr from-black/80 to-gray-800 justify-center items-center h-screen">
            <div className="flex flex-col items-center space-y-4">
                {/* Spinner */}
                <div className="border-t-4 border-cyan-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
                {/* Text */}
                <p className="text-lg text-cyan-500 font-semibold animate-pulse">
                    Cargando, por favor espere...
                </p>
                {/* Progress Bar (Optional) */}
                <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 animate-pulse rounded-full animate-loading-bar"></div>
                </div>
            </div>
        </div>

    )
}


export function LoadingFetch() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-20 flex items-center justify-center z-50">
            {/*  <LuLoaderCircle size={80} className="animate-spin text-blue-500" /> */}
            <div className="flex flex-col items-center space-y-4">
                {/* Spinner */}
                <div className="border-t-4 border-cyan-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
            </div>
        </div>
    )
}