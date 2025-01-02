import Link from 'next/link'
import { FaHome, FaUsers, FaTag, FaCreditCard, FaMoneyBillWave as FaBanknotes, FaClock, FaChartBar } from 'react-icons/fa';

const menuItems = [
    { name: 'Dashboard', icon: FaHome, href: '/', active: true },
    { name: 'Users', icon: FaUsers, href: '/users' },
    { name: 'Categories', icon: FaTag, href: '/categories' },
    { name: 'Transactions', icon: FaCreditCard, href: '/transactions' },
    { name: 'Debts', icon: FaBanknotes, href: '/debts' },
    { name: 'Debt Payments', icon: FaClock, href: '/debt-payments' },
    { name: 'Salary History', icon: FaChartBar, href: '/salary-history' },
    { name: 'Budget', icon: FaChartBar, href: '/budget' },
]

export function Sidebar() {
    return (
        <div className="hidden sm:flex sm:flex-col w-64 bg-white h-screen border-r">
            <div className="p-6">
                <h1 className="text-xl font-bold">Financial Manager</h1>
            </div>
            <nav className="flex-1">
                <ul className="space-y-1 px-3">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`flex items-center px-3 py-2 rounded-lg text-sm ${item.active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

