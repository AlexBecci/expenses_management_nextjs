import { NextResponse } from "next/server";
import { checkSession } from "./app/lib/auth";

export async function middleware(req: any) {
    //obtener el token de las cookies(se puede usar `cookie()`para obtener en el servidor)
    const cookies = req.cookies;
    const token = cookies.get('authToken')
    console.log(token)
    //si no hay token redirigir 
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url)) //redirigir a /login para que inicie sesion pq no tiene token
    }

    //llamar a checksession y guardar el booleano
    const isValidSession = await checkSession(token);
    //si la validadionc es false redirigir a /login
    if (!isValidSession) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    //si la sesion continua con la solicitud
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/about', '/home']
}
/* export const config = {
    matcher: '/:path*', // Coincide con cualquier ruta
}; */



/* 
import { NextResponse } from "next/server";
import { checkSession } from "./app/lib/auth";

export async function middleware(req: any) {
    try {
        // Obtener las cookies
        const cookies = req.cookies;
        const token = cookies.get('authToken');

        console.log(`[Middleware] Token recibido: ${token}`);

        // Si no hay token, redirigir a /login
        if (!token) {
            if (req.nextUrl.pathname === '/login') {
                return NextResponse.next(); // Permitir el acceso a /login
            }
            return NextResponse.redirect(new URL('/login', req.url));
        }

        // Verificar si el token es válido
        const isValidSession = await checkSession(token);

        // Si el token no es válido, redirigir a /login
        if (!isValidSession) {
            return NextResponse.redirect(new URL('/login', req.url));
        }

        // Continuar con la solicitud si todo es válido
        return NextResponse.next();
    } catch (error) {
        console.error("[Middleware] Error en la autenticación:", error);

        // Redirigir a /login en caso de error inesperado
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

// Configuración para especificar las rutas protegidas
export const config = {
    matcher: [
        '/',         // Página de inicio
        '/about',    // Página de información
        '/home',     // Página de usuario
        '/dashboard', // Agrega aquí otras rutas protegidas si es necesario
    ],
};


*/