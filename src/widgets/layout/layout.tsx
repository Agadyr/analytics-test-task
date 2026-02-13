import type { ReactNode } from 'react'
import { useState } from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'

export function AppLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768)

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-[#121212]">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}
