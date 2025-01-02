'use client'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                // El callback ahora acepta un valor de tipo string o number
                callback: function (value: string | number) {
                    // Puedes manejar ambos tipos (string y number) aquí
                    return `$${value}`;
                },
            },
        },
    },
}

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            data: [4500, 3800, 2500, 3000, 2800, 4000],
            backgroundColor: '#84cc16',
            borderRadius: 4,
        },
    ],
}

export function OverviewChart() {
    return (
        <div className="bg-slate-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg text-gray-300 font-semibold mb-4">Overview</h2>
            <Bar options={options} data={data} height={200} />
        </div>
    )
}
