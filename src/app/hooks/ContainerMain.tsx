'use client'

import { Sidebar, SidebarMobile } from "../components/sidebars/Sidebar"
import { useDeviceType } from "./useDeviceType"

interface ContainerMainProps {
    children: React.ReactNode
}
export function ContainerMain({ children }: ContainerMainProps) {
    const { isDesktop, isMobile, isTablet } = useDeviceType()
    return (
        <div className="flex-col h-screen ">
            {isMobile ? <SidebarMobile /> : <Sidebar />}
            <main className="flex-1 p-4 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}