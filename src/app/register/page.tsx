'use client'

import { useState } from "react";
import { API_BASE_URL, backgroundCard } from "@/app/lib/constants";
import { Input } from "../login/components/ui/input";
import { Button } from "../login/components/ui/button";
import { LoadingHover } from "../components/loaders/Loadings";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone_number: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Validación simple
        if (!formData.name || !formData.email || !formData.password || !formData.phone_number) {
            alert("Todos los campos son obligatorios");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password, 
                    name: formData.name,
                    phone_number: parseInt(formData.phone_number),
                }),
                credentials:'include' as RequestCredentials
            });

            if (response.ok) {
                alert("Registro exitoso");
                // Redirigir o limpiar el formulario aquí
                setFormData({ name: "", email: "", password: "", phone_number: "" });
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || "No se pudo registrar"}`);
            }
        } catch (error) {
            console.error("Error en el registro:", error);
            alert("Ocurrió un error al registrar el usuario.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black/80 to-slate-800">
            {loading && <LoadingHover />}
            <div
                className={`px-4 py-6 mt-4 text-left shadow-lg ${backgroundCard} shadow-white/10 border rounded-lg`}
            >
                <h3 className="text-xl text-center">Regístrese para crear una cuenta</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block text-sm" htmlFor="name">
                                Nombre
                            </label>
                            <Input
                                type="text"
                                placeholder="Ingrese su nombre"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm" htmlFor="email">
                                Email
                            </label>
                            <Input
                                type="email"
                                placeholder="Ingrese su email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm" htmlFor="password">
                                Contraseña
                            </label>
                            <Input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm" htmlFor="phone_number">
                                Número de Teléfono
                            </label>
                            <Input
                                type="tel"
                                placeholder="Ingrese su número de teléfono"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600"
                                id="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <Button
                                disabled={loading}
                                type="submit"
                                className="px-6 py-2 mt-4 text-white bg-cyan-600 rounded-lg hover:bg-cyan-900"
                            >
                                {loading ? "Cargando..." : "Registrar"}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
