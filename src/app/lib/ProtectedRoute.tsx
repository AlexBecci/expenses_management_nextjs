'use client'
import { useEffect, useState } from "react";
import { useAuth } from "./auth";
import { LoaderHover } from "../components/loaders/Loadings";

const ProtectedRoute = ({ children, excludedRoutes }: { children: React.ReactNode, excludedRoutes: string[] }) => {
    const { isAuthenticated } = useAuth();
    const [currentPath, setCurrentPath] = useState<string>('');

    useEffect(() => {
        // Solo ejecuta este código en el cliente
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname); // Obtener la ruta actual
        }
    }, []);

    useEffect(() => {
        if (!isAuthenticated && currentPath && !excludedRoutes.includes(currentPath)) {
            console.log(isAuthenticated, currentPath)
            window.location.href = "/login"; // Redirige a login si no está autenticado
        }
    }, [isAuthenticated, currentPath, excludedRoutes]);

    // Mientras obtenemos la ruta actual, no renderizamos nada
    if (!currentPath) return (
        <LoaderHover />
    );

    // Si no está autenticado y la ruta no está excluida, no renderizar nada
    if (!isAuthenticated && !excludedRoutes.includes(currentPath)) {
        return null; // Puedes mostrar un loader si lo prefieres
    }

    return <>{children}</>;
};

export default ProtectedRoute;