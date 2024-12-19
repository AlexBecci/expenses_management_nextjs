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
