'use client'

import { Sidebar, Navbar } from "../components/sidebars/Sidebar"
import { useDeviceType } from "./useDeviceType"

interface ContainerMainProps {
    children: React.ReactNode
}
export function ContainerMain({ children }: ContainerMainProps) {
    const { isDesktop, isMobile, isTablet } = useDeviceType()
    return (
        <div className="sm:flex h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Sidebar para desktop o Navbar para mobile */}
            {isMobile ? (
                <Navbar />
            ) : (
                <div className="w-64 flex-shrink-0">
                    <Sidebar />
                </div>
            )}
            <main className="flex-1 p-4 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}