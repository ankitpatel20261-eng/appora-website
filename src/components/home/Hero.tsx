import { motion } from 'framer-motion'
import { FileText, Lock } from 'lucide-react'
import officeImage from '../../assets/images/hero/office.jpg'
import professionalImage from '../../assets/images/hero/professional.jpg'
import teamImage from '../../assets/images/hero/team.jpg'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/utils'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative grid grid-cols-1 items-start gap-10 py-12 md:gap-12 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-20 xl:gap-12">
        <div className="lg:col-span-5 xl:col-span-5">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Artificial Intelligence · Robotics · Machine Learning
            </p>

            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
              Intelligence in engineering. Automating opportunities.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg md:mt-6">
              We use artificial intelligence to convert complex business challenges into smart,
              scalable, and measurable digital solutions — technology that can learn, adapt, predict,
              and improve.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/contact" variant="primary">
                Start a project
              </Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>

            <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              <li className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <FileText className="h-4 w-4 shrink-0 text-[var(--color-text)]" aria-hidden="true" />
                Result-focused delivery
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <Lock className="h-4 w-4 shrink-0 text-[var(--color-text)]" aria-hidden="true" />
                Secure, scalable systems
              </li>
            </ul>

            <div className="mt-10 flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8 lg:mt-12 lg:flex-col lg:items-start xl:flex-row xl:items-end">
              <div className="max-w-[16rem] sm:max-w-[14rem] md:max-w-[17rem] lg:max-w-none xl:max-w-[17rem]">
                <p className="text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
                  We do not start with technology
                </p>
                <p className="mt-2 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                  Let&apos;s begin with the question — then build AI, software, and automation that
                  solve real commercial challenges.
                </p>
              </div>

              <YearsBadge className="shrink-0 self-center sm:self-end lg:self-start xl:self-end" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative lg:col-span-7"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reducedMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-[1.05fr_0.95fr] sm:gap-4">
        <div className="min-[480px]:row-span-2 overflow-hidden rounded-[1.25rem] bg-[var(--color-bg-soft)] sm:rounded-[1.75rem]">
          <img
            src={officeImage}
            alt="Team collaborating at workstations in a modern office"
            className="h-full min-h-[220px] w-full object-cover min-[480px]:min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]"
            width={1200}
            height={800}
          />
        </div>

        <div className="overflow-hidden rounded-[1.25rem] bg-[var(--color-bg-soft)] sm:rounded-[1.75rem]">
          <img
            src={professionalImage}
            alt="Software professional working at a desktop workstation"
            className="aspect-[16/10] h-full w-full object-cover object-center min-[480px]:aspect-[4/3]"
            width={1200}
            height={800}
          />
        </div>

        <div className="overflow-hidden rounded-[1.25rem] bg-[var(--color-bg-soft)] sm:rounded-[1.75rem]">
          <img
            src={teamImage}
            alt="Colleagues reviewing work together on a shared screen"
            className="aspect-[16/10] h-full w-full object-cover object-center min-[480px]:aspect-[4/3]"
            width={1200}
            height={742}
          />
        </div>
      </div>
    </div>
  )
}

interface YearsBadgeProps {
  className?: string
}

function YearsBadge({ className }: YearsBadgeProps) {
  const reducedMotion = useReducedMotion()
  const ringText = 'AI · ROBOTICS · MACHINE LEARNING • APPORA TECHNOLOGIES • '
  const radius = 84
  const circumference = 2 * Math.PI * radius

  return (
    <motion.div
      className={cn(
        'group relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-sky-100 shadow-[0_12px_45px_rgba(0,105,220,0.15)] sm:h-48 sm:w-48',
        className,
      )}
      whileHover={reducedMotion ? undefined : { scale: 1.04, rotate: -3 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      aria-label="Appora Technologies — 150+ clients, AI and digital solutions partner"
    >
      <svg
        viewBox="0 0 200 200"
        className={cn(
          'pointer-events-none absolute inset-0 h-full w-full',
          !reducedMotion && 'animate-badge-spin',
        )}
        style={{ height: '100%', width: '100%' }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="years-circle"
            fill="none"
            d={`M100,100 m0,-${radius} a${radius},${radius} 0 1,1 0,${radius * 2} a${radius},${radius} 0 1,1 0,-${radius * 2}`}
          />
        </defs>
        <text
          fill="#28649b"
          letterSpacing="0.8"
          style={{ fontSize: '11px', fontWeight: 500 }}
        >
          <textPath
            href="#years-circle"
            startOffset="0%"
            textLength={circumference}
            lengthAdjust="spacing"
          >
            {ringText}
          </textPath>
        </text>
      </svg>
      <div className="relative z-10 flex h-[66%] w-[66%] flex-col items-center justify-center rounded-full border border-white bg-white/90 text-center shadow-[0_4px_20px_rgba(0,80,170,0.08)]">
        <p className="font-display text-[2.5rem] font-bold leading-none tracking-tight text-[#0b2b50] sm:text-[3rem]">
          150+
        </p>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
          Clients
        </p>
      </div>
    </motion.div>
  )
}
