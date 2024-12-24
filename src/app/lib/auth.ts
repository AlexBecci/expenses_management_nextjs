import { API_BASE_URL } from "./constants"

export async function checkSession(token: string): Promise<boolean> {
try {
        const response = await fetch(`${API_BASE_URL}/check_session`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, // Enviar token como header si es necesario
            },
            credentials: 'include' as RequestCredentials
        })
        //si la repsuesta esta ok, damos un true de token valido
        return response.ok
    } catch (error) {
        console.error('Erro al verificar la sesion: ', error)
        return false//si ocurre un error(por ejemplo, la api no response)
    }
}