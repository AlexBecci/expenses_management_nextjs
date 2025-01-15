//DTO

/* export interface Category {
    id: number;
    name: string;
    description: string;
    createdAt: string;
} */

//interface para las cateogrias
export interface Category {
    id: number;
    name: string;
    type: 'income' | 'expense'
    user_id: number;
}

//interface donde se almacena el tipo de estructura q maneja la tabla de transacciones
export interface Transaction {
    id: number
    user_id: number
    date: string
    amount: string
    type: string
    description: string
    category_id: number
    pediod: string
}
//interface para los datos del usuario
export interface User{
    id:number;
    name:string;
    email:string;
    initial_salary:string;
    current_salary:string;
    creation_date:string;
    updated_at:string;
    phone_number:string;
}

//modal
export interface ModalProps {
    onClose: () => void;
    confirm: () => void;
}

///interface para la traida de datos del usuario
