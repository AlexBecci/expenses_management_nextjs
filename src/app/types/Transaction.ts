export interface TransactionDto {
    id: number;
    amount: string; // Podrías considerar usar `number` si la cantidad se tratará matemáticamente
    category_id: number;
    date: string; // Si deseas trabajar con fechas como objetos `Date`, puedes cambiar a `Date`
    description: string;
    period: string;
    type: 'expense' | 'income'; // Usa un tipo literal si los valores son predefinidos
    user_id: number;
    category_name:string
}