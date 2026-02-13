import { useNavigate } from 'react-router-dom'

interface EmptyPageProps {
    title: string;
}

export function EmptyPage({ title }: EmptyPageProps) {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm mx-5 mt-5">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl opacity-50">📁</span>
            </div>
            <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2">{title}</h1>
            <p className="text-gray-400 mb-6 max-w-md">
                Этот раздел находится в разработке или не содержит данных на данный момент.
            </p>
            <button
                onClick={() => navigate('/analytics')}
                className="px-6 py-2 bg-[#007AFF] text-white rounded-xl font-medium hover:bg-[#0063CC] transition-colors cursor-pointer"
            >
                Вернуться в Аналитику
            </button>
        </div>
    )
}
