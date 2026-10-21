import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Map, Code2, ShieldCheck, RefreshCw, Check, ArrowLeft, ArrowRight } from 'lucide-react'
import { processIntro, processSteps } from '../../data/process'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Container } from '../common/Container'
import { Section } from '../common/Section'
import { SectionHeading } from '../common/SectionHeading'

const stages = [
  { icon: Search, label: 'Understand the challenge', points: ['Stakeholder conversations and user needs', 'Existing workflows and system review', 'Clear goals and success criteria'], outcome: 'A shared understanding of the problem and the opportunity.' },
  { icon: Map, label: 'Define a practical roadmap', points: ['Prioritized scope and delivery milestones', 'Architecture and integration planning', 'Dependencies, risks, and delivery responsibilities'], outcome: 'A clear project plan with an agreed first phase.' },
  { icon: Code2, label: 'Bring the solution to life', points: ['User experience and interface design', 'Iterative development and integration', 'Regular demonstrations and feedback'], outcome: 'Working software your team can review as it takes shape.' },
  { icon: ShieldCheck, label: 'Prepare for the real world', points: ['Functional and integration checks', 'Performance, access, and security review', 'Deployment planning and handover'], outcome: 'A tested release with a clear deployment and support plan.' },
  { icon: RefreshCw, label: 'Keep moving forward', points: ['Monitoring and issue investigation', 'Maintenance, updates, and improvements', 'New priorities informed by real usage'], outcome: 'A dependable product that can evolve with your business.' },
]

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const active = processSteps[activeIndex]
  const stage = stages[activeIndex]
  const Icon = stage.icon

  return (
    <Section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]" ariaLabelledBy="process-heading">
      <Container>
        <SectionHeading id="process-heading" eyebrow={processIntro.eyebrow} title={processIntro.title} description={processIntro.description} />
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-[var(--color-muted)]">Select a stage to explore how we work.</p><span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700">Stage {activeIndex + 1} of {processSteps.length}</span></div>
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const StepIcon = stages[index].icon
            const selected = index === activeIndex
            return <li key={step.id}><button type="button" onClick={() => setActiveIndex(index)} aria-pressed={selected} aria-controls="process-detail" className={`group flex h-full w-full items-center gap-3 rounded-2xl border p-4 text-left transition-[background-color,border-color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 lg:flex-col lg:items-start lg:p-5 ${selected ? 'border-blue-600 bg-blue-600 text-white shadow-[0_8px_24px_-12px_rgba(0,90,200,0.5)]' : 'border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-blue-300 hover:bg-blue-50'}`}><span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${selected ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-600'}`}><StepIcon className="h-5 w-5 motion-safe:transition-transform motion-safe:group-hover:scale-110" aria-hidden="true" /></span><span className="min-w-0"><span className={`mb-1 block text-[10px] font-semibold uppercase tracking-widest ${selected ? 'text-blue-100' : 'text-blue-600'}`}>Step {step.number}</span><span className="block text-sm font-semibold leading-6">{step.title}</span></span></button></li>
          })}
        </ol>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-blue-100" aria-hidden="true"><div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 motion-safe:transition-[width] motion-safe:duration-300" style={{width: `${((activeIndex + 1) / processSteps.length) * 100}%`}} /></div>
        <div id="process-detail" className="mt-6 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-6 md:p-9" role="region" aria-label={`${active.title} stage details`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={active.id} initial={reducedMotion ? false : {opacity: 0, y: 8}} animate={{opacity: 1, y: 0}} exit={reducedMotion ? undefined : {opacity: 0, y: -8}} transition={{duration: reducedMotion ? 0 : 0.18}} className="grid items-start gap-8 lg:grid-cols-2">
              <div><div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600"><Icon className="h-4 w-4" aria-hidden="true" />{stage.label}</div><h3 className="font-display text-2xl font-semibold text-[var(--color-text)] md:text-3xl">{active.title}</h3><p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">{active.description}</p></div>
              <div><p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">What this stage includes</p><ul className="space-y-3">{stage.points.map(point => <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-muted-strong)]"><Check className="mt-1 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />{point}</li>)}</ul><div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4"><p className="mb-1 text-xs font-semibold text-blue-700">The outcome</p><p className="text-sm leading-6 text-[var(--color-muted-strong)]">{stage.outcome}</p></div></div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-7 flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-5"><button type="button" onClick={() => setActiveIndex(index => index - 1)} disabled={activeIndex === 0} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 text-sm font-medium text-[var(--color-muted-strong)] hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Previous</button><button type="button" onClick={() => setActiveIndex(index => index + 1)} disabled={activeIndex === processSteps.length - 1} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40">Next stage<ArrowRight className="h-4 w-4" aria-hidden="true" /></button></div>
        </div>
      </Container>
    </Section>
  )
}