import {
  Settings,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Moon,
  Menu,
  type LucideIcon,
} from 'lucide-react'
import clsx from 'clsx'

export function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) {
  const NavItem = ({
    icon,
    label,
    hasSubmenu = false,
    active = false
  }: {
    icon: string | LucideIcon;
    label: string;
    hasSubmenu?: boolean;
    active?: boolean;
  }) => (
    <button className={clsx(
      'flex items-center gap-2 w-full pl-2 py-1.5 rounded-lg transition-colors group relative text-white cursor-pointer',
      active ? 'bg-[#3C3C3E] font-medium shadow-sm' : 'hover:bg-white/5',
      collapsed && 'justify-center px-2'
    )}>
      <div className={clsx('relative flex items-center justify-center w-5 h-5')}>
        {
          typeof (icon) == 'string' ?
            <img src={`icons/${icon}`} className={clsx('w-5 h-5')} color='#A19FA1' /> :
            (() => {
              const IconComponent = icon as LucideIcon;
              return <IconComponent className="w-5 h-5" color='#A19FA1' />;
            })()
        }
        {active && !collapsed && (
          <div className="absolute -left-[16px] w-[3px] h-6 bg-blue-500 rounded-r-full" />
        )}
      </div>
      {!collapsed && (
        <div className="flex-1 flex items-center justify-between overflow-hidden">
          <span className="truncate trackingtext-[#F5F4F3] text-sm">{label}</span>
          {hasSubmenu && <ChevronRight color='#A19FA1' className="w-4 h-4 group-hover:text-gray-300 transition-transform duration-200 rotate-90 text-[#A2A0A22E]" />}
        </div>
      )}
    </button>
  )

  return (
    <aside className={clsx(
      'h-full bg-quaternary text-white flex flex-col transition-[width] duration-300 ease-in-out',
      collapsed ? 'w-[70px]' : 'w-[220px]'
    )}>
      <div className={`h-[50px] flex items-center ${collapsed ? 'px-4' : 'px-6'} mt-1 border-b border-white/5`}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="px-2 py-1 hover:bg-white/5 rounded-lg active:scale-95 transition-all text-gray-400 cursor-pointer"
        >
          <Menu className="w-5 h-5" color='white' />
        </button>
      </div>

      <nav className={`flex-1 px-3 ${collapsed ? 'space-y-2' : '0'} overflow-y-auto overflow-x-hidden scrollbar-hide mt-4`}>
        <NavItem icon={'home.svg'} label="Главная" />
        <NavItem icon={'user-octagon.svg'} label="CRM" />
        <NavItem icon={'note.svg'} label="Менеджер задач" />
        <NavItem icon={'warehouse.svg'} label="Склад" hasSubmenu />
        <NavItem icon={'profile-user.svg'} label="Организация" />
        <NavItem icon={'calculator.svg'} label="Бухгалтерия" />
        <NavItem icon={'presention-chart.svg'} label="Аналитика" active />
        <NavItem icon={'task-square.svg'} label="Отчеты" hasSubmenu />
      </nav>

      <div className="px-3 py-4 space-y-0.5 border-b border-[#424244]">
        <NavItem icon={BookOpen} label="Справочник" />
        <NavItem icon={Settings} label="Настройки" />

        {!collapsed && (
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 transition-colors text-[#A19FA1]" />
              <span className="tracking-wide text-sm">Темная тема</span>
            </div>
            <div className="w-9 h-5 bg-[#333333] rounded-full p-0.5 relative cursor-pointer border border-white/5">
              <div className="w-4 h-4 bg-white rounded-full shadow-sm translate-x-4 transition-transform" />
            </div>
          </div>
        )}
      </div>

      <div className="p-3">
        <button className={clsx(
          "w-full flex items-center gap-3 p-2 bg-[#A2A0A22E] border border-[#333333] rounded-xl text-left hover:bg-[#333333] transition-colors",
          collapsed && "justify-center px-0"
        )}>
          <div className="w-7 h-7 rounded-lg bg-[#3D9AFF] flex items-center justify-center shrink-0 font-bold">
            Z
          </div>
          {!collapsed && (
            <>
              <span className="flex-1 text-sm font-medium truncate">Zymyran Office</span>
              <div className="flex flex-col gap-0.5">
                <ChevronDown color='white' className="w-4 h-4 rotate-180 -mb-1" />
                <ChevronDown color='white' className="w-4 h-4 -mt-1" />
              </div>
            </>
          )}
        </button>
      </div>
    </aside>
  )
}
