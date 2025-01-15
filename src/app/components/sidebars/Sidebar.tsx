import { backgroundColorButton } from '@/app/lib/constants';
import Link from 'next/link'
import { useState } from 'react';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { FaHome, FaUsers, FaTag, FaCreditCard, FaChartBar } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie'
import { ButtonComponent, styleButton } from '../buttons/Button';
import { LoadingFetch } from '../loaders/Loadings';
import { toast } from 'react-toastify';
const menuItems = [
    { name: 'Inicio', icon: FaHome, href: '/home', active: false },
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
    //constante que maneja un hover de loadign
    const [loading, setLoading] = useState<boolean>(false)
    //obtenes el router de la libreria de next
    const router = useRouter()
    function handleLogout() {
        //logout
        setLoading(true)
        setTimeout(() => {
            try {
                Cookies.remove('authToken')
                router.push('/login')
                toast.success('Se deslogueo el usuario correctamente')
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }, 1000);
    }
    return (
        <div className="fixed z-10 top-0 left-0 w-64 bg-slate-800 h-screen border-r border-slate-600 shadow-md shadow-black/35 flex flex-col">
            {loading && (
                <LoadingFetch />
            )}
            {/* Header */}
            <div className="p-6 border-b border-slate-600">
                <h1 className="text-lg font-bold text-white">Administrador Financiero</h1>
            </div>
            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto">
                <ul className="space-y-1 px-3 py-2">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all ${item.active
                                    ? 'bg-slate-600 text-cyan-400'
                                    : 'text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Footer */}
            <div className="p-4 border-t border-slate-600">
                <ButtonComponent text='Cerrar Sesión' className='' click={handleLogout} icon={<RiLogoutCircleRLine />} />
            </div>
        </div>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    //constante que maneja un hover de loadign
    const [loading, setLoading] = useState<boolean>(false)
    //obtenes el router de la libreria de next
    const router = useRouter()
    function handleLogout() {
        //logout
        setLoading(true)
        setTimeout(() => {
            try {
                Cookies.remove('authToken')
                router.push('/login')

            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }, 1000);
    }

    return (
        <div className="relative">
            {loading && (
                <LoadingFetch />
            )}
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
                    <div className="p-4 border-b border-slate-600 flex items-center justify-between">
                        <h1 className="text-lg font-bold text-gray-100">Menu</h1>
                        <div className='w-1/2 ml-auto'>
                            <button
                                onClick={() => setIsOpen(false)}
                                className={`${styleButton} `}
                            >
                                Cerrar Menu
                            </button>
                        </div>
                    </div>
                    <nav className="flex flex-col bg-slate-900/50 space-y-2 px-4 py-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-4 px-4 py-3 rounded-lg text-sm transition-all ${item.active
                                    ? "bg-slate-600 text-cyan-400"
                                    : "hover:bg-slate-800 hover:text-cyan-400"
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </nav>
                    <div className="p-4 border-t border-slate-600">
                        <ButtonComponent text='Cerrar Sesión' className='' click={handleLogout} icon={<RiLogoutCircleRLine />} />
                    </div>
                </div>
            )}
        </div>
    );
}
