import { Outlet } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
