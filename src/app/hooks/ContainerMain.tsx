'use client'

import { Sidebar } from "../components/Sidebar"

interface ContainerMainProps {
    children: React.ReactNode
}
export function ContainerMain({ children }: ContainerMainProps) {
    return (
        <div className="flex h-screen ">
            <Sidebar />
            <main className="flex-1 p-4 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}