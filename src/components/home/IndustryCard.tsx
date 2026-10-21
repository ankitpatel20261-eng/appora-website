import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Rocket, Building2, HeartPulse, GraduationCap, Store, Landmark, BriefcaseBusiness, type LucideIcon } from 'lucide-react'
import type { IndustryItem } from '../../types'
import { cn } from '../../lib/utils'
import { ArrowIcon } from '../ui/ArrowIcon'

const industryVisuals: Record<string, { icon: LucideIcon; color: string; tags: string[] }> = {
  ecommerce: { icon: ShoppingCart, color: '#0078e7', tags: ['Storefronts', 'Commerce'] },
  saas: { icon: Rocket, color: '#7452d6', tags: ['MVPs', 'Product scale'] },
  enterprise: { icon: Building2, color: '#2874a6', tags: ['ERP', 'Integration'] },
  healthcare: { icon: HeartPulse, color: '#16866e', tags: ['Care platforms', 'Privacy'] },
  education: { icon: GraduationCap, color: '#b27318', tags: ['EdTech', 'Campus tools'] },
  retail: { icon: Store, color: '#b34e7c', tags: ['D2C', 'Customer experience'] },
  finance: { icon: Landmark, color: '#3d60c7', tags: ['Payments', 'Reporting'] },
  professional: { icon: BriefcaseBusiness, color: '#367988', tags: ['CRM', 'Client portals'] },
}

interface IndustryCardProps {
  industry: IndustryItem
  className?: string
}

export function IndustryCard({ industry, className }: IndustryCardProps) {
  const visual = industryVisuals[industry.id] ?? industryVisuals.enterprise
  const Icon = visual.icon

  return (
    <Link
      to={industry.href}
      style={{ '--industry-accent': visual.color, background: 'linear-gradient(145deg, white 15%, color-mix(in srgb, var(--industry-accent) 10%, white) 100%)' } as CSSProperties}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--industry-accent)_20%,white)] bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--industry-accent)] hover:shadow-[0_16px_36px_-18px_color-mix(in_srgb,var(--industry-accent)_45%,transparent)] motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:p-7',
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-x-6 top-0 h-[3px] origin-left scale-x-50 rounded-b-full bg-[var(--industry-accent)] opacity-50 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-[transform,opacity] motion-safe:duration-300 motion-safe:group-hover:scale-x-100 motion-safe:group-focus-visible:scale-x-100 md:inset-x-7" aria-hidden="true" />
      <div className="mb-5 flex items-center justify-between gap-4">
        <span
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--industry-accent)_12%,white)] text-[var(--industry-accent)] transition-colors duration-300 group-hover:bg-[var(--industry-accent)] group-hover:text-white group-focus-visible:bg-[var(--industry-accent)] group-focus-visible:text-white"
          style={{ backgroundColor: 'color-mix(in srgb, var(--industry-accent) 9%, white)' }}
        >
          <Icon className="h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110" strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--industry-accent)_18%,white)] bg-white/70 text-[var(--industry-accent)] transition-colors duration-300 group-hover:bg-[var(--industry-accent)] group-hover:text-white group-focus-visible:bg-[var(--industry-accent)] group-focus-visible:text-white">
          <ArrowIcon className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:-rotate-45 motion-safe:group-focus-visible:-rotate-45" />
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-[var(--color-text)]">
        {industry.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
        {industry.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2 border-t border-[color-mix(in_srgb,var(--industry-accent)_15%,white)] pt-4" aria-label={`${industry.title} capabilities`}>
        {visual.tags.map((tag) => (
          <li key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--industry-accent)_12%,white)] bg-white/80 px-2.5 py-1 text-xs font-medium text-[var(--color-muted-strong)]">
            <span className="h-1 w-1 rounded-full bg-[var(--industry-accent)]" aria-hidden="true" />
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  )
}