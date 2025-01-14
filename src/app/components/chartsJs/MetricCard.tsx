interface MetricCardProps {
    title: string
    value: string
}

export function MetricCard({ title, value }: MetricCardProps) {
    return (
        <div className="bg-slate-900  p-6 rounded-lg shadow-xl">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="mt-2 text-3xl font-bold text-gray-400">{value}</p>
        </div>
    )
}

