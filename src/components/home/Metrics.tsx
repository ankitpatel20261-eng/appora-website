import { useEffect, useRef, type CSSProperties } from 'react'
import { animate, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, BriefcaseBusiness, Layers, UsersRound } from 'lucide-react'
import { metrics } from '../../data/stats'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { AnimatedElement } from '../common/AnimatedElement'
import { Container } from '../common/Container'
import { Section } from '../common/Section'

const visuals = [
  { icon: BriefcaseBusiness, color: '#0878c9', href: '/company', link: 'Meet our team', caption: 'Experience that delivers' },
  { icon: Layers, color: '#7351bf', href: '/clients', link: 'Explore our work', caption: 'Ideas into outcomes' },
  { icon: UsersRound, color: '#128477', href: '/clients', link: 'Discover our client projects', caption: 'Built on collaboration' },
]

function AnimatedValue({ value }: { value: string }) {
  const valueRef = useRef<HTMLSpanElement>(null)
  const visible = useInView(valueRef, { once: true, amount: 0.5 })
  const reducedMotion = useReducedMotion()
  const numeric = /^\d+\+?$/.test(value)
  useEffect(() => {
    if (!numeric || !visible || reducedMotion) return
    const element = valueRef.current
    if (!element) return
    const target = Number.parseInt(value, 10)
    const suffix = value.endsWith('+') ? '+' : ''
    const controls = animate(0, target, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (latest) => {
        element.textContent = `${Math.round(latest)}${suffix}`
      },
    })
    return () => {
      controls.stop()
      element.textContent = value
    }
  }, [numeric, visible, reducedMotion, value])
  return <><span className="sr-only">{value}</span><span ref={valueRef} aria-hidden="true">{value}</span></>
}

export function Metrics() {
  return (
    <Section className="border-t border-[var(--color-border)]" ariaLabelledBy="metrics-heading">
      <Container>
        <h2 id="metrics-heading" className="sr-only">Appora Technologies by the numbers</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {metrics.map((metric, index) => {
            const visual = visuals[index % visuals.length]
            const Icon = visual.icon
            return (
              <AnimatedElement key={metric.id} delay={index * 0.08} className="h-full">
                <Link to={visual.href} style={{ '--accent': visual.color, background: 'linear-gradient(145deg, white 20%, color-mix(in srgb, var(--accent) 9%, white))' } as CSSProperties} className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--accent)_20%,white)] p-6 transition-[border-color,box-shadow,transform] hover:border-[var(--accent)] hover:shadow-[0_16px_40px_-22px_color-mix(in_srgb,var(--accent)_35%,transparent)] motion-safe:duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:p-8">
                  <span className="absolute inset-x-8 top-0 h-[3px] origin-left scale-x-50 rounded-b-full bg-[var(--accent)] opacity-60 transition-opacity group-hover:opacity-100 motion-safe:transition-[transform,opacity] motion-safe:duration-300 motion-safe:group-hover:scale-x-100 motion-safe:group-focus-visible:scale-x-100" aria-hidden="true" />
                  <div className="mb-7 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-xs">{visual.caption}</span>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_10%,white)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white group-focus-visible:bg-[var(--accent)] group-focus-visible:text-white"><Icon className="h-5 w-5 motion-safe:transition-transform motion-safe:group-hover:-rotate-6" aria-hidden="true" /></span>
                  </div>
                  <p className="font-display text-4xl font-semibold leading-none tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl"><AnimatedValue value={metric.value} /></p>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--color-text)] md:text-xl">{metric.label}</h3>
                  {metric.description && <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)] md:text-base">{metric.description}</p>}
                  <div className="mt-7 flex items-center justify-between gap-3 border-t border-[color-mix(in_srgb,var(--accent)_15%,white)] pt-5">
                    <span className="text-sm font-semibold text-[var(--accent)]">{visual.link}</span>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_20%,white)] bg-white/80 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white"><ArrowUpRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" /></span>
                  </div>
                </Link>
              </AnimatedElement>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}