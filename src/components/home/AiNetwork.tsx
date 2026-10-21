import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Container } from '../common/Container'
import { Section } from '../common/Section'
import { Button } from '../common/Button'

const nodes = [
  { label: 'Data', x: 100, y: 100, href: '/services#data-analytics' },
  { label: 'Cloud', x: 100, y: 240, href: '/services#cloud' },
  { label: 'IoT', x: 100, y: 380, href: '/services#mobile-apps' },
  { label: 'Robotics', x: 460, y: 90, href: '/services#robotics' },
  { label: 'Vision', x: 480, y: 240, href: '/services#computer-vision' },
  { label: 'Software', x: 460, y: 390, href: '/services#software-development' },
]

export function AiNetwork() {
  const reducedMotion = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const animated = !reducedMotion && !paused
  const gradientId = useId()

  return (
    <Section ariaLabelledBy="ai-network-heading" className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">Connected intelligence</p>
          <h2 id="ai-network-heading" className="font-display text-balance text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
            One intelligent system. Endless possibilities.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Connect your data, cloud, devices, and software with AI at the center. We bring the right technologies together to turn your business challenges into practical solutions.
          </p>
          <div className="mt-8"><Button href="/contact">Build your connected solution</Button></div>
        </div>
        <div className="min-w-0">
          <svg viewBox="0 0 620 480" className="mx-auto w-full max-w-2xl overflow-visible" role="group" aria-label="AI connects Data, Cloud, IoT, Robotics, Vision, and Software. Select a node to explore its service.">
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0078e7" />
                <stop offset="100%" stopColor="#3455ed" />
              </linearGradient>
            </defs>
            <path d="M460 90 L550 165 L480 240 L550 315 L460 390" fill="none" stroke="#dce6f1" strokeWidth="2" />
            {[165, 315].map((y) => <circle key={y} cx="550" cy={y} r="15" fill="white" stroke="#0b2b50" strokeWidth="2" />)}
            {nodes.map((node, index) => (
              <motion.path
                key={node.label}
                d={`M280 240 L${node.x} ${node.y}`}
                fill="none"
                stroke="#3455ed"
                strokeWidth="2"
                strokeDasharray="6 9"
                animate={{ strokeDashoffset: animated ? [0, -60] : 0 }}
                transition={animated ? { duration: 2.4, repeat: Infinity, ease: 'linear', delay: index * 0.12 } : { duration: 0 }}
                aria-hidden="true"
              />
            ))}
            <motion.g
              initial={false}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              animate={{ scale: animated ? [1, 1.26] : 1, opacity: animated ? [0.35, 0] : 0.2 }}
              transition={animated ? { duration: 3, repeat: Infinity, ease: 'easeOut' } : { duration: 0 }}
              aria-hidden="true"
            >
              <circle cx="280" cy="240" r={87} fill="none" stroke="#0078e7" strokeWidth="1" />
            </motion.g>
            <circle cx="280" cy="240" r="76" fill={`url(#${gradientId})`} />
            <text x="280" y="247" textAnchor="middle" fill="white" fontSize="28" fontWeight="700">AI</text>
            {[164, 316].map((y, index) => (
              <motion.g key={y}
                initial={false}
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                animate={{ scale: animated ? [1, 1.25, 1] : 1 }}
                transition={animated ? { duration: 3, repeat: Infinity, delay: index * 1.5, ease: 'easeInOut' } : { duration: 0 }}
                aria-hidden="true"
              >
                <circle cx="280" cy={y} r={12} fill="#009ac8" />
              </motion.g>
            ))}
            {nodes.map((node) => (
              <Link key={node.label} to={node.href} aria-label={`Explore ${node.label} solutions`} className="group outline-none">
                <circle cx={node.x} cy={node.y} r="28" className="fill-white stroke-[#0b2b50] transition-colors group-hover:fill-blue-50 group-hover:stroke-blue-600 group-focus-visible:fill-blue-100 group-focus-visible:stroke-blue-600" strokeWidth="2" />
                <circle cx={node.x} cy={node.y} r="7" className="fill-blue-200 transition-colors group-hover:fill-blue-600 group-focus-visible:fill-blue-600" />
                <text x={node.x} y={node.y + 49} textAnchor="middle" fontSize="14" fontWeight="600" fill="#0b2b50">{node.label}</text>
              </Link>
            ))}
          </svg>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[var(--color-muted)]">
            <span>Select a node to explore</span>
            {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 font-medium text-[var(--color-brand)] transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">{paused ? 'Play animation' : 'Pause animation'}</button>}
          </div>
        </div>
      </Container>
    </Section>
  )
}