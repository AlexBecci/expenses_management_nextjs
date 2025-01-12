'use client'

import Link from "next/link"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { API_BASE_URL, backgroundCard } from "@/app/lib/constants"
//importamos router con next
import { useRouter } from "next/navigation"
//libreira de la cookie
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { LoaderHover } from "@/app/components/loaders/Loadings"

export default function Card() {
    //constante q activa el hover con el loader
    //constante que almacena la data a enviar 
    const [formData, setFormData] = useState({ email: '', password: '' })
    //constante que genera el loading dpara la solicitud a la api
    const [loading, setLoading] = useState<boolean>(false)
    //guardamos el hook para navegar
    const router = useRouter();

    //funcion que cambia los valores para enviar
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }))
    }
    //logout
/*     async function logout1() {
        Cookies.remove('authToken')
        router.push('/login')
    } */


    //funcion que envia la data
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        console.log(formData)
        try {
            const res = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // Esto permite que las cookies se envíen con la solicitud
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (!res.ok) {
                toast.error(`${data.message}`);
                throw new Error(data.message || 'Algo salio mal')
            }
            console.log('RESPUESTA DEL SERVIDOR', data.message)
            toast.success(data.message)
            //aca se le redirige el token
            Cookies.set('authToken', data.token, { expires: 7, secure: true })
            //redirigir al usuario /example
            router.push('/home')

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black/80 to-slate-800">
            {loading && (
                <LoaderHover />
            )}
            <div className={`px-8 py-6 mt-4 text-left shadow-lg ${backgroundCard} shadow-white/10 border rounded-lg`}>
              {/*   <button onClick={logout1}>LOGOUT</button> */}
                <h3 className="text-xl  text-center">Inicie sesión en su cuenta</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block text-sm" htmlFor="email">Email</label>
                            <Input
                                type="email"
                                placeholder="Ingrese su  email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm" htmlFor="password">Password</label>
                            <Input
                                type="password"
                                placeholder="Ingrese su password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <Button disabled={loading} type="submit" className="px-6 py-2 mt-4 text-white bg-cyan-600 rounded-lg hover:bg-cyan-900">{loading ? 'Cargando...' : 'Enviar'}</Button>
                            {/* <Link href="/forgotPassword" className="text-sm text-blue-600 hover:underline">Forgot password?</Link> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}