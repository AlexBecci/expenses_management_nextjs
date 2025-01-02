import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_BASE_URL } from "./app/lib/constants";

export async function middleware(req: NextRequest) {
    console.log('Middleware ejecutándose para:', req.nextUrl.pathname);

    const token = req.cookies.get('authToken')?.value;
    console.log('Token:', token);

    if (!token) {
        console.error('No se encontró token, redirigiendo a /login');
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
        const response = await fetch(`${API_BASE_URL}/check_session`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log('Respuesta del backend:', data);
            return NextResponse.next();
        }

        console.error('Sesión no válida, redirigiendo a /login');
        return NextResponse.redirect(new URL('/login', req.url));
    } catch (error) {
        console.error('Error verificando la sesión:', error);
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

/* 
// Configuración para aplicar el middleware en todas las rutas
export const config = {
    matcher: '/:path*', // Aplica el middleware a todas las rutas
}; */

export const config = {
    matcher: [
        '/home',   // Aplica el middleware a /home
        '/about',  // Aplica el middleware a /about
        '/dashboard', // Puedes agregar más rutas específicas aquí
    ],
};