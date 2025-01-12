'use client'
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Loader } from "../components/loaders/Loadings";

interface AuthContextType {
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get("authToken");
      /*   console.log(token) */
        setIsAuthenticated(!!token);
    }, []);
    if (isAuthenticated === null) return <Loader />; // Mientras verifica autenticación

    return (
        <AuthContext.Provider value={{ isAuthenticated }
        }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};