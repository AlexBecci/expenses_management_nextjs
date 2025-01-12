import { BsFront } from "react-icons/bs"
import { MdDateRange } from "react-icons/md"

interface CardProps {
    description: string
    date: string
    category_name: string
    amount: string
}
export const Card = ({ description, amount, category_name, date }: CardProps) => {
    return (
        <div className="space-y-4">
            <div className="transition-all">
                <div className="group bg-gray-800/50 border border-gray-700 hover:bg-gray-800 transition-all duration-200 rounded-md">
                    <div className="p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                            {/* Icon + Details */}
                            <div className="flex items-start sm:items-center space-x-4">
                                <div className="p-2 rounded-md bg-green-500/10 text-green-400 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 5v14m7-7H5"></path>
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <h3 className=" text-gray-100 group-hover:text-blue-400 transition-colors">
                                            {description}
                                        </h3>
                                        {/* Amount + Action */}
                                        <div className="flex items-center space-x-4 sm:justify-end">
                                            <span
                                                className={`text-lg  ${amount.startsWith('-') ? 'text-red-400' : 'text-green-400'
                                                    }`}
                                            >
                                                {amount.startsWith('-') ? '' : '+'}
                                                {amount}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center space-x-3 mt-2">
                                        {/* Date */}
                                        <div className="flex items-center text-xs text-gray-500 space-x-1">
                                            <MdDateRange className="w-4 h-4" />
                                            <span>{date}</span>
                                        </div>
                                        {/* Category */}
                                        <div className="flex items-center text-xs text-gray-500 space-x-1">
                                            <BsFront className="w-4 h-4" />
                                            <span>{category_name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}