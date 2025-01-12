import { backgroundColorButton } from '@/app/lib/constants';
import Link from 'next/link'
import { useState } from 'react';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsClipboardDataFill } from 'react-icons/bs';
import { FaHome, FaUsers, FaTag, FaCreditCard, FaMoneyBillWave as FaBanknotes, FaClock, FaChartBar } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';

const menuItems = [
    { name: 'Inicio', icon: FaHome, href: '/', active: false },
    { name: 'Dashboard', icon: FaChartBar, href: '/dashboard', active: false },
    { name: 'Usuario', icon: FaUsers, href: '/user' },
    { name: 'Categorias', icon: FaTag, href: '/categories' },
    { name: 'Transacciones', icon: FaCreditCard, href: '/transactions' },
    /*  { name: 'Debts', icon: FaBanknotes, href: '/debts' }, */
    /*   { name: 'Debt Payments', icon: FaClock, href: '/debt-payments' }, */
    { name: 'Historial Salarial', icon: BiMoneyWithdraw, href: '/salary-history' },
    /*     { name: 'Budget', icon: FaChartBar, href: '/budget' }, */
] 

export function Sidebar() {
    return (
        <div className="hidden z-10 sm:flex sm:flex-col w-64 bg-white h-screen border-r">
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

export function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="relative">
            {/* Navbar Header */}
            <div className="flex justify-between items-center bg-slate-800 px-4 py-3 shadow-md shadow-black/35">
                <h1 className="text-white font-bold text-lg">Administrador Financiero</h1>
                <HiBars3
                    onClick={() => setIsOpen(!isOpen)}
                    size={32}
                    color="white"
                    className="cursor-pointer"
                />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-0 left-0 w-full bg-slate-800 text-white transition-transform duration-300 z-10">
                    <div className="p-4 border-b border-slate-600">
                        <h1 className="text-lg font-bold text-gray-100">Menu</h1>
                    </div>
                    <nav className="flex flex-col bg-slate-900/50 space-y-2 px-4 py-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-4 px-4 py-3 rounded-lg text-sm transition-all ${item.active
                                        ? "bg-slate-600 text-blue-400"
                                        : "hover:bg-slate-800 hover:text-blue-400"
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </nav>
                    <div className="p-4 border-t border-slate-600">
                        <button
                            onClick={() => setIsOpen(false)}
                            className={`w-full text-sm font-medium ${backgroundColorButton}  border border-gray-600/60 text-white py-2 rounded-md hover:bg-blue-600`}
                        >
                            Cerrar Menu
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
