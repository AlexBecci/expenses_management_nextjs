import { toast } from "react-toastify";
import { API_BASE_URL } from "../lib/constants";
import { Category, Transaction } from "../types/types";
import Cookies from 'js-cookie';

//function qu eme trae las caterias
export async function fetchCategories(user_id: number): Promise<Category[]> {
    if (!user_id || typeof user_id !== 'number') {
        console.error("Invalid user_id provided");
        return [];
    }
    const token = Cookies.get('authToken');
    try {
        const res = await fetch(`${API_BASE_URL}/categories/${user_id}`, {
            credentials: 'include' as RequestCredentials,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        if (!res.ok) {
            console.error(`Error fetching categories: ${res.status} ${res.statusText}`);
            return [];
        }
        const data = await res.json();
        // Validación de datos antes de retornarlos
        /*  if (!Array.isArray(data)) {
             console.error("Unexpected data format received from the API");
             return [];
         } */
        return data as Category[];
    } catch (error) {
        console.error(error)
        return []
    }
}

//funciton que me trae las transacciones
export async function fetchTransactions(user_id: number): Promise<Transaction[]> {
    if (!user_id || typeof user_id !== 'number') {
        console.error("Invalid user_id provided");
        return [];
    }
    //obtenemos el token
    const token = getTokenInSession();
    try {
        const res = await fetch(`${API_BASE_URL}/transactions/?user_id=${user_id}`, {
            credentials: 'include' as RequestCredentials,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        if (!res.ok) {
            console.error(`Error fetching categories: ${res.status} ${res.statusText}`);
            toast.error('No autorizado')
            return [];
        }
        const data = await res.json();
        // Validación de datos antes de retornarlos
        /* if (!Array.isArray(data)) {
            console.error("Unexpected data format received from the API");
            return [];
        } */
        return data as Transaction[];
    } catch (error) {
        console.error(error)
        return []
    }
}
//function que me trae los datos del usuario mediante user_id
/* export function fetchUser(user_id: number):Promise<User> {
    if (!user_id || typeof user_id !== 'number') {
        console.error("Invalid user_id provided");
        return [];
    }
}
 */

//function que me trae el user_id
export function getUserIdByCookie(): number {
    console.log(Cookies.get('user_id'))
    // Leer el user_id de la cookie
    const user_id = Cookies.get('user_id') ? parseInt(Cookies.get('user_id') || '0', 10) : null;
    console.log('USER_ID', user_id)

    return Number(user_id)
}

//function que me trae el token
export function getTokenInSession(): string {
    const token = Cookies.get('authToken');
    if (token) {
        return token
    }
    return ''
}