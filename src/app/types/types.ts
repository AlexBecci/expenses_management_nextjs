
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

//modal
export interface ModalProps {
    onClose: () => void;
    confirm: () => void;
}