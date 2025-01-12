'use client'

export function Title({ title }: { title: string }) {
    return (
        <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            {title}
        </h1>
    );
}

export function TitleGeneric({ title, color1, color2 }: { title: string, color1: string, color2: string }) {
    return (
        <h1 className={`text-2xl bg-clip-text text-transparent bg-gradient-to-r ${color1} ${color2}`}>
            {title}
        </h1>
    )
}

// Puedes agregar más funciones aquí y exportarlas de la misma manera
export function Subtitle({ subtitle }: { subtitle: string }) {
    return (
        <div>
            <h2 className="text-base text-gray-400">
                {subtitle}
            </h2>
        </div>
    );
}