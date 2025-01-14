interface Transaction {
    id: string
    avatar: string
    name: string
    description: string
    amount: number
}

const transactions: Transaction[] = [
    {
        id: '1',
        avatar: 'OM',
        name: 'Olivia Martin',
        description: 'Payment for groceries',
        amount: -150.00,
    },
    {
        id: '2',
        avatar: 'JL',
        name: 'Jackson Lee',
        description: 'Salary deposit',
        amount: 4500.00,
    },
    {
        id: '3',
        avatar: 'IN',
        name: 'Isabella Nguyen',
        description: 'Monthly rent payment',
        amount: -1200.00,
    },
]

export function RecentTransactions() {
    return (
        <div className="bg-slate-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg text-gray-200 font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-4">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-100 text-black flex items-center justify-center text-sm font-medium">
                                {transaction.avatar}
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">{transaction.name}</p>
                                <p className="text-sm text-gray-500">{transaction.description}</p>
                            </div>
                        </div>
                        <span
                            className={`text-sm font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                                }`}
                        >
                            {transaction.amount >= 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

