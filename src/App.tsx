import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './widgets/layout/layout'
import { AnalyticsPage } from './pages/analytics/ui/analytics-page'
import { EmptyPage } from './pages/empty/ui/empty-page'

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/home" element={<EmptyPage title="Главная" />} />
          <Route path="/crm" element={<EmptyPage title="CRM" />} />
          <Route path="/tasks" element={<EmptyPage title="Менеджер задач" />} />
          <Route path="/warehouse" element={<EmptyPage title="Склад" />} />
          <Route path="/organization" element={<EmptyPage title="Организация" />} />
          <Route path="/accounting" element={<EmptyPage title="Бухгалтерия" />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/reports" element={<EmptyPage title="Отчеты" />} />
          <Route path="/guide" element={<EmptyPage title="Справочник" />} />
          <Route path="/settings" element={<EmptyPage title="Настройки" />} />
        </Routes>
      </AppLayout>
    </Router>
  )
}

export default App
