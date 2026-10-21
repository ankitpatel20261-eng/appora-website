import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Cloud, Server, ShieldCheck, Activity, Layers, LockKeyhole, Check, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { testimonials } from '../../data/testimonials'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { AnimatedElement } from '../common/AnimatedElement'
import { Container } from '../common/Container'
import { Section } from '../common/Section'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const active = testimonials[activeIndex]

  const goTo = (index: number) => {
    const next = (index + testimonials.length) % testimonials.length
    setActiveIndex(next)
  }

  return (
    <Section
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
      ariaLabelledBy="testimonials-heading"
    >
      <Container>
        <AnimatedElement>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Partnership that goes further
          </p>
          <h2
            id="testimonials-heading"
            className="font-display max-w-2xl text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl"
          >
            Why customers work with Appora
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">From your first business question to the infrastructure behind your product, we bring software, AI, cloud, and ongoing support together to help your business move forward.</p>
        </AnimatedElement>

        <div className="mt-10 grid grid-cols-1 gap-8 rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_12px_40px_-24px_rgba(8,39,80,0.15)] md:p-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.id}
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="font-display text-2xl font-medium leading-relaxed text-[var(--color-text)] sm:text-3xl"
              >
                “{active.quote}”
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${active.id}-meta`}
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base font-semibold text-[var(--color-text)]">{active.author}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {active.role}, {active.company}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <p className="ml-2 text-sm text-[var(--color-muted)]">
                {activeIndex + 1} / {testimonials.length}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5">
          <AnimatedElement>
            <div className="relative h-full overflow-hidden rounded-3xl border border-blue-800 bg-gradient-to-br from-[#09294e] via-[#0c4380] to-[#006dcc] p-7 text-white md:p-10">
              <Cloud className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-white/5" strokeWidth={1} aria-hidden="true" />
              <div className="relative">
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100"><Server className="h-4 w-4" aria-hidden="true" /> Infrastructure, handled</span>
                <h3 className="max-w-md font-display text-2xl font-semibold leading-tight md:text-3xl">Cloud &amp; Server Provisioning</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 md:text-base">Give your applications a dependable foundation. We help plan, provision, and configure cloud environments and servers around your workloads, performance needs, and budget, so your team can focus on building your business.</p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    'Cloud environments and server configuration',
                    'Application deployment and environment setup',
                    'Access controls, networking, and backup planning',
                    'Monitoring, resource tuning, and capacity planning',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-blue-50"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
                <Link to="/services#cloud" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0c4380] transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore cloud solutions<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </AnimatedElement>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatedElement delay={0.08} className="h-full">
              <div className="h-full rounded-3xl border border-teal-100 bg-gradient-to-br from-white to-teal-50 p-7 md:p-8">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700"><ShieldCheck className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">Support beyond launch</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">Deployment is the beginning of your product's next chapter. Ongoing maintenance, troubleshooting, updates, and monitoring help keep your systems dependable as your users and business needs evolve.</p>
                <Link to="/services#it-maintenance-support" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:underline focus-visible:underline">Explore ongoing support<Activity className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.16} className="h-full">
              <div className="h-full rounded-3xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-7 md:p-8">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700"><Layers className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">Built around your next stage</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">Start with the capabilities you need today and a clear path for tomorrow. We connect architecture, integrations, and infrastructure planning with your priorities, helping you scale thoughtfully and manage technical complexity.</p>
                <Link to="/services#strategy-consulting" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:underline focus-visible:underline">Plan your next step<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.24} className="h-full md:col-span-2 xl:col-span-1">
              <div className="flex h-full flex-col rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-7 md:p-8">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><LockKeyhole className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">Security &amp; Data Protection</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">Protecting your business starts with thoughtful engineering. We build access controls, secure configuration, and responsible data handling into your applications and infrastructure, with practical safeguards shaped around your users and operations.</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline focus-visible:underline">Discuss your security needs<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </Section>
  )
}
