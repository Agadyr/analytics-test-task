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
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

const workspaces = [
  { id: 'zym', name: 'Zymyran Office', initial: 'Z', color: '#3D9AFF' },
  { id: 'kaspi', name: 'Just Office', initial: 'J', color: '#F00000' },
]

interface SidebarProps {
  icon: string | LucideIcon;
  label: string;
  to: string;
  hasSubmenu?: boolean;
}

export function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) {
  const [activeWorkspace, setActiveWorkspace] = useState(workspaces[0])

  const NavItem = ({
    icon,
    label,
    to,
    hasSubmenu = false,
  }: SidebarProps) => (
    <NavLink
      to={to}
      className={({ isActive }) => clsx(
        'flex items-center gap-2 w-full pl-2 py-1.5 rounded-lg transition-all group relative text-white cursor-pointer',
        isActive ? 'bg-[#3C3C3E] font-medium shadow-sm' : 'hover:bg-[#2C2C2E]',
        collapsed && 'justify-center px-2'
      )}
    >
      {({ isActive }) => (
        <>
          <div className={clsx('relative flex items-center justify-center w-5 h-5')}>
            {
              typeof (icon) == 'string' ?
                <img src={`icons/${icon}`} className={clsx('w-5 h-5')} color='#A19FA1' /> :
                (() => {
                  const IconComponent = icon as LucideIcon;
                  return <IconComponent className="w-5 h-5" color='#A19FA1' />;
                })()
            }
            {isActive && !collapsed && (
              <div className="absolute -left-[16px] w-[3px] h-6 bg-blue-500 rounded-r-full animate-in fade-in slide-in-from-left-1 duration-300" />
            )}
          </div>
          {!collapsed && (
            <div className="flex-1 flex items-center justify-between overflow-hidden">
              <span className="truncate tracking-[#F5F4F3] text-sm">{label}</span>
              {hasSubmenu && <ChevronRight color='#A19FA1' className="w-4 h-4 group-hover:text-gray-300 transition-transform duration-200 rotate-90 text-[#A2A0A22E]" />}
            </div>
          )}
        </>
      )}
    </NavLink>
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
        <NavItem icon={'home.svg'} label="Главная" to="/home" />
        <NavItem icon={'user-octagon.svg'} label="CRM" to="/crm" />
        <NavItem icon={'note.svg'} label="Менеджер задач" to="/tasks" />
        <NavItem icon={'warehouse.svg'} label="Склад" hasSubmenu to="/warehouse" />
        <NavItem icon={'profile-user.svg'} label="Организация" to="/organization" />
        <NavItem icon={'calculator.svg'} label="Бухгалтерия" to="/accounting" />
        <NavItem icon={'presention-chart.svg'} label="Аналитика" to="/analytics" />
        <NavItem icon={'task-square.svg'} label="Отчеты" hasSubmenu to="/reports" />
      </nav>

      <div className="px-3 py-4 space-y-0.5 border-b border-[#424244]">
        <NavItem icon={BookOpen} label="Справочник" to="/guide" />
        <NavItem icon={Settings} label="Настройки" to="/settings" />

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
        <Popover>
          <PopoverTrigger asChild>
            <button className={clsx(
              "w-full flex items-center gap-3 p-2 bg-[#A2A0A22E] border border-[#333333] rounded-xl text-left hover:bg-[#333333] transition-colors",
              collapsed && "justify-center px-0"
            )}>
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-bold text-white transition-colors"
                style={{ backgroundColor: activeWorkspace.color }}
              >
                {activeWorkspace.initial}
              </div>
              {!collapsed && (
                <>
                  <span className="flex-1 text-sm font-medium truncate">{activeWorkspace.name}</span>
                  <div className="flex flex-col gap-0.5">
                    <ChevronDown color='white' className="w-4 h-4 rotate-180 -mb-1" />
                    <ChevronDown color='white' className="w-4 h-4 -mt-1" />
                  </div>
                </>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent
            side="right"
            align="end"
            sideOffset={10}
            className="w-60 p-2 bg-[#1C1C1E] border border-[#333333] text-white rounded-xl shadow-2xl"
          >
            <div className="text-sm font-medium text-gray-500 px-2 py-1 mb-1">
              Выбор рабочего пространства
            </div>
            <div className="space-y-1">
              {workspaces.map((ws) => (
                <button
                  key={ws.id}
                  onClick={() => setActiveWorkspace(ws)}
                  className={clsx(
                    "w-full flex items-center gap-3 p-2 rounded-lg text-sm transition-all hover:bg-white/10",
                    activeWorkspace.id === ws.id && "bg-white/5 font-medium"
                  )}
                >
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center shrink-0 text-[11px] font-bold"
                    style={{ backgroundColor: ws.color }}
                  >
                    {ws.initial}
                  </div>
                  <span className="truncate">{ws.name}</span>
                  {activeWorkspace.id === ws.id && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                  )}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </aside>
  )
}
