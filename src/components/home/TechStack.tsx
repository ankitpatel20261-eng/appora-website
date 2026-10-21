import { Link } from 'react-router-dom'
import { useState, type CSSProperties } from 'react'
import { BrainCircuit, Code2, Database, Cloud, Server, Layers, Search, X, ArrowUpRight } from 'lucide-react'
import { technologies } from '../../data/technologies'
import { Container } from '../common/Container'
import { Section } from '../common/Section'
import { SectionHeading } from '../common/SectionHeading'

const groups = [
  { id: 'all', label: 'All technologies', icon: Layers, color: '#1672d0' },
  { id: 'ai', label: 'AI & Robotics', icon: BrainCircuit, color: '#7750c5' },
  { id: 'frontend', label: 'Web & Mobile', icon: Code2, color: '#087b9c' },
  { id: 'backend', label: 'Backend', icon: Server, color: '#197c59' },
  { id: 'data', label: 'Data', icon: Database, color: '#af6621' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud, color: '#3264c4' },
]

export function TechStack() {
  const [selected, setSelected] = useState('all')
  const [query, setQuery] = useState('')
  const visible = technologies.filter((tech) => (selected === 'all' || tech.category === selected) && tech.name.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <Section className="border-t border-[var(--color-border)]" ariaLabelledBy="tech-stack-heading">
      <Container>
        <SectionHeading id="tech-stack-heading" eyebrow="Tech stack" title="Built on a stack for intelligence and scale" description="AI, data, cloud, and modern software engineering — the tools enterprise teams hire for, trust, and run in production." />
        <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter technologies by category">
          {groups.map((group) => <button key={group.id} type="button" aria-pressed={selected === group.id} onClick={() => setSelected(group.id)} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${selected === group.id ? 'border-blue-600 bg-blue-600 text-white shadow-sm' : 'border-[var(--color-border)] bg-white text-[var(--color-muted-strong)] hover:border-blue-300 hover:bg-blue-50'}`}><group.icon className="h-4 w-4" aria-hidden="true" />{group.label}</button>)}
        </div>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-sm"><span className="sr-only">Search technologies</span><Search className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" aria-hidden="true" /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a technology..." className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--color-text)] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label>
          {(query || selected !== 'all') && <button type="button" onClick={() => {setQuery(''); setSelected('all')}} className="inline-flex min-h-11 items-center gap-2 self-start rounded-full px-3 text-sm font-medium text-blue-600 hover:bg-blue-50"><X className="h-4 w-4" aria-hidden="true" />Reset filters</button>}
        </div>
        <p className="mb-4 text-xs text-[var(--color-muted)]" role="status">Showing {visible.length} technologies{selected !== 'all' ? ` in ${groups.find((group) => group.id === selected)?.label}` : ''}</p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {visible.map((tech) => {
            const group = groups.find((item) => item.id === tech.category) ?? groups[0]
            const Icon = group.icon
            return <li key={tech.id}><Link to={`/technologies/${tech.id}`} style={{ '--accent': group.color } as CSSProperties} className="group flex h-full min-h-28 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 flex-col items-center justify-center gap-3 rounded-2xl border border-[color-mix(in_srgb,var(--accent)_18%,white)] bg-[color-mix(in_srgb,var(--accent)_4%,white)] px-3 py-5 text-center transition-[border-color,box-shadow,transform] hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_9%,white)] hover:shadow-[0_10px_25px_-16px_color-mix(in_srgb,var(--accent)_45%,transparent)] motion-safe:duration-300 motion-safe:hover:-translate-y-1"><Icon className="h-6 w-6 text-[var(--accent)] motion-safe:transition-transform motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6" strokeWidth={1.7} aria-hidden="true" /><span className="text-sm font-semibold text-[var(--color-text)]">{tech.name}</span><span className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">{group.label}</span><span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--accent)]">Explore<ArrowUpRight className="h-3 w-3 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" /></span></Link></li>
          })}
        </ul>
        {visible.length === 0 && <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-8 text-center"><p className="font-semibold text-[var(--color-text)]">No matching technologies</p><p className="mt-2 text-sm text-[var(--color-muted)]">Try another name or reset the filters to see all technologies.</p></div>}
      </Container>
    </Section>
  )
}