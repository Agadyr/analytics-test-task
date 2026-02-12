import { Search, ChevronDown } from 'lucide-react'
import { Input } from '@/shared/ui/input'

export function Header() {
    return (
        <header className="sticky top-0 z-10 bg-quaternary border-b border-white/5">
            <div className="h-[50px] px-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 justify-center">
                    <div className="flex-1 max-w-[320px]">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAB4BC] group-focus-within:text-gray-300 transition-colors" />
                            <Input
                                placeholder="Поиск"
                                className="w-full h-8 bg-[#3C3C3E] text-[#AAB4BC] text-sm pl-8 pr-4 rounded-full outline-none focus:ring-none border-none transition-all placeholder:text-[#AAB4BC]"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="relative cursor-pointer group">
                        <img src="icons/message.svg" alt="message" width={20} />
                        <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-500 border-2 border-[#1A1A1A] rounded-full" />
                    </div>
                    <img className='cursor-pointer' src="icons/notification.svg" alt="notification" width={20} />

                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-8 h-8 rounded-full border border-[#2A2A2A] transition-colors">
                            <img src="/profile.png" alt="Profile photo" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <ChevronDown className="w-4 h-4 text-white group-hover:text-gray-200 transition-colors" />
                    </div>
                </div>
            </div>
        </header>
    )
}
