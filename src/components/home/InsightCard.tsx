import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { BrainCircuit, ChartNoAxesCombined, Sparkles, Clock3 } from 'lucide-react'
import type { InsightItem } from '../../types'
import { ArrowIcon } from '../ui/ArrowIcon'

interface InsightCardProps { insight: InsightItem }

export function InsightCard({ insight }: InsightCardProps) {
  const visual = insight.category === 'Machine Learning' ? { icon: ChartNoAxesCombined, color: '#137f77' } : insight.category === 'Generative AI' ? { icon: Sparkles, color: '#7750c5' } : { icon: BrainCircuit, color: '#176fcd' }
  const Icon = visual.icon
  return (
    <Link to={insight.href} style={{ '--accent': visual.color } as CSSProperties} className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-6 transition-[border-color,box-shadow,transform] hover:border-[var(--accent)] hover:shadow-[0_16px_40px_-24px_rgba(8,39,80,0.3)] motion-safe:duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:p-7">
      <span className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)] opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true" />
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[color-mix(in_srgb,var(--accent)_9%,white)] px-3 py-1.5 text-xs font-semibold text-[var(--accent)]">{insight.category}</span>
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_8%,white)] text-[var(--accent)]"><Icon className="h-5 w-5 motion-safe:transition-transform motion-safe:group-hover:scale-110" aria-hidden="true" /></span>
      </div>
      <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--accent)] md:text-2xl">{insight.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)] md:text-base">{insight.description}</p>
      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--color-border)] pt-4 text-xs text-[var(--color-muted)]"><span>{insight.date}</span><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{insight.readingTime}</span></div>
      <div className="mt-5 flex items-center justify-between gap-3"><span className="text-sm font-semibold text-[var(--accent)]">Read insight</span><span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_9%,white)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white group-focus-visible:bg-[var(--accent)] group-focus-visible:text-white"><ArrowIcon className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:-rotate-45" /></span></div>
    </Link>
  )
}