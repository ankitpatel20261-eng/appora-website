import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Industries } from './pages/Industries'
import { Clients } from './pages/Clients'
import { Company } from './pages/Company'
import { Careers } from './pages/Careers'
import { Insights } from './pages/Insights'
import { Contact } from './pages/Contact'
const DetailPage = lazy(() => import('./pages/DetailPage').then((page) => ({ default: page.DetailPage })))

function TopicPage({ section }: { section: string }) {
  return <Suspense fallback={<div role="status" className="px-6 py-24 text-center text-slate-500">Loading page...</div>}><DetailPage section={section} /></Suspense>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="clients" element={<Clients />} />
          <Route path="company" element={<Company />} />
          <Route path="careers" element={<Careers />} />
          <Route path="insights" element={<Insights />} />
          <Route path="services/:slug" element={<TopicPage section="services" />} />
          <Route path="industries/:slug" element={<TopicPage section="industries" />} />
          <Route path="technologies/:slug" element={<TopicPage section="technologies" />} />
          <Route path="insights/:slug" element={<TopicPage section="insights" />} />
          <Route path="clients/:slug" element={<TopicPage section="clients" />} />
          <Route path="recognition/:slug" element={<TopicPage section="recognition" />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
