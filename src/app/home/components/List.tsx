import { fetchTransactions, getUserIdByCookie } from "@/app/api/get";
import { Title } from "@/app/components/header/Texts";
import { Transaction } from "@/app/types/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export function List() {
    
    const [transactions, setTransactions] = useState<Transaction[]>([])

    const user_id = getUserIdByCookie()

    async function getTransactions(user_id: number) {
        try {
            const data = await fetchTransactions(user_id);
            console.log(data)
            setTransactions(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (user_id) {
            getTransactions(user_id)
        } else {
            toast.error('No hay Token asociado')
        }
    }, [user_id])

    return (
        <div className="mt-6 rounded-lg ">
            <Title title="Últimas Transacciones" />
            <div className="space-y-3 mt-4">
                {transactions.map((transaction) => {
                    const date = new Date(transaction.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                    return (
                        <div
                            key={transaction.id}
                            className="flex items-center justify-between rounded-lg bg-gray-800 p-4 hover:bg-gray-700 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`flex text-2xl h-10 w-10 items-center justify-center rounded-full ${transaction.type === 'income' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                                        }`}
                                >
                                    {transaction.type === 'income' ? '↑' : '↓'}
                                </div>
                                <div>
                                    <p className="text-gray-200 text-base">{transaction.description}</p>
                                    <p className="text-sm text-gray-400">{date}</p>
                                </div>
                            </div>
                            <p
                                className={`text-base  ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                                    }`}
                            >
                                {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}