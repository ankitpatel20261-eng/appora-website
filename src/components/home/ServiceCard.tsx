import { Link } from 'react-router-dom'
import type { ServiceItem } from '../../types'
import { ArrowIcon } from '../ui/ArrowIcon'
import aiImage from '../../assets/images/services/ai.jpg'
import machineLearningImage from '../../assets/images/services/machine-learning.jpg'
import generativeAiImage from '../../assets/images/services/generative-ai.jpg'
import roboticsImage from '../../assets/images/services/robotics.jpg'
import computerVisionImage from '../../assets/images/services/computer-vision.jpg'
import softwareImage from '../../assets/images/services/software-development.jpg'
import webImage from '../../assets/images/services/web-development.jpg'
import mobileImage from '../../assets/images/services/mobile-apps.jpg'
import cloudImage from '../../assets/images/services/cloud.jpg'
import analyticsImage from '../../assets/images/services/data-analytics.jpg'

import strategyImage from '../../assets/images/services/strategy-consulting.jpg'
import supportImage from '../../assets/images/services/it-maintenance-support.jpg'

const serviceImages: Record<string, { src: string; alt: string }> = {
  'strategy-consulting': { src: strategyImage, alt: 'Business team reviewing charts and planning a technology roadmap' },
  'it-maintenance-support': { src: supportImage, alt: 'Technician inspecting and maintaining electronic hardware' },
  ai: { src: aiImage, alt: 'Close-up of processors and circuits powering intelligent computing' },
  'machine-learning': { src: machineLearningImage, alt: 'Data visualizations and performance metrics on a monitor' },
  'generative-ai': { src: generativeAiImage, alt: 'People collaborating on a digital workflow using a laptop' },
  robotics: { src: roboticsImage, alt: 'Humanoid service robot with an interactive display' },
  'computer-vision': { src: computerVisionImage, alt: 'Precision optical inspection of an electronic circuit board' },
  'software-development': { src: softwareImage, alt: 'Software engineers collaborating on application development' },
  'web-development': { src: webImage, alt: 'Web development workspace with code on a laptop' },
  'mobile-apps': { src: mobileImage, alt: 'Mobile applications on a smartphone screen' },
  cloud: { src: cloudImage, alt: 'Networked server racks in a data center' },
  'data-analytics': { src: analyticsImage, alt: 'Business intelligence dashboard with charts and analytics' },
}

interface ServiceCardProps {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  const image = serviceImages[service.id]

  return (
    <Link
      id={service.id}
      to={service.href}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:bg-white hover:shadow-[0_12px_32px_rgba(0,102,204,0.10)] focus-visible:bg-[var(--color-bg-soft)]"
    >
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-soft)]">
          <img
            src={image.src}
            alt={image.alt}
            width={960}
            height={540}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" aria-hidden="true" />
          <span className="absolute bottom-4 left-6 inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/50 bg-white/95 px-2 font-display text-sm font-semibold text-[var(--color-text)] shadow-sm md:left-7">
            {service.number}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold leading-snug text-[var(--color-text)] md:text-2xl">
            {service.title}
          </h3>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-brand)] transition-all duration-300 group-hover:border-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white">
            <ArrowIcon />
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
          {service.description}
        </p>
        <span className="mt-6 text-sm font-medium text-[var(--color-muted-strong)] transition-colors group-hover:text-[var(--color-text)]">
          Learn more
        </span>
      </div>
    </Link>
  )
}