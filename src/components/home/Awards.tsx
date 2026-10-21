import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageSquare, BriefcaseBusiness, PenTool, Search, Compass } from 'lucide-react'
import { awards } from '../../data/stats'
import { Container } from '../common/Container'
import { Section } from '../common/Section'
import { SectionHeading } from '../common/SectionHeading'

const visuals = [
  { icon: MessageSquare, color: '#c83a45' },
  { icon: BriefcaseBusiness, color: '#16824a' },
  { icon: PenTool, color: '#6750bf' },
  { icon: Search, color: '#2671ce' },
  { icon: Compass, color: '#087e99' },
]

export function Awards() {
  return (
    <Section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]" ariaLabelledBy="awards-heading">
      <Container>
        <SectionHeading id="awards-heading" eyebrow="Recognition" title="Trusted delivery across the platforms that matter" description="Independent reviews and partner profiles that reflect how we ship — practical, reliable, and results-focused." />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {awards.map((award, index) => {
            const { icon: Icon, color } = visuals[index % visuals.length]

            const content = <>
              <div className="mb-7 flex items-center justify-between gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--accent)_10%,white)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white group-focus-visible:bg-[var(--accent)] group-focus-visible:text-white"><Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" /></span>
                <ArrowUpRight className="h-4 w-4 text-[var(--accent)] motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">{award.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-[var(--color-muted)]">{award.title}</p>
              <span className="mt-6 border-t border-[color-mix(in_srgb,var(--accent)_14%,white)] pt-4 text-xs font-semibold text-[var(--accent)]">{award.id === 'results' ? 'Meet Appora' : 'Platform details'}</span>
            </>
            const className = 'group flex h-full flex-col rounded-2xl border border-[color-mix(in_srgb,var(--accent)_20%,white)] p-6 transition-[border-color,box-shadow,transform] hover:border-[var(--accent)] hover:shadow-[0_12px_30px_-18px_rgba(8,39,80,0.3)] motion-safe:duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500'
            const style = { '--accent': color, background: 'linear-gradient(150deg, white 40%, color-mix(in srgb, var(--accent) 7%, white))' } as CSSProperties
            return <li key={award.id}><Link to={`/recognition/${award.id}`} className={className} style={style}>{content}</Link></li>
          })}
        </ul>
      </Container>
    </Section>
  )
}