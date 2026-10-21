import { Link } from 'react-router-dom'
import type { CaseStudyItem } from '../../types'
import { cn } from '../../lib/utils'
import { ArrowIcon } from '../ui/ArrowIcon'
import { Badge } from '../ui/Badge'

interface CaseStudyCardProps {
  study: CaseStudyItem
  featured?: boolean
}

export function CaseStudyCard({ study, featured = false }: CaseStudyCardProps) {
  return (
    <Link
      to={study.href}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-colors duration-300 hover:border-[var(--color-border-strong)]',
        featured && 'lg:flex-row',
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-[var(--color-bg-soft)]',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-full lg:w-[52%]' : 'aspect-[16/10]',
        )}
      >
        <img
          src={study.image}
          alt={study.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          width={1280}
          height={720}
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-sm">
            <p className="font-display text-lg font-semibold text-white">{study.title}</p>
          </div>
        </div>
      </div>

      <div className={cn('flex flex-1 flex-col p-5 md:p-6', featured && 'lg:justify-center lg:p-8')}>
        <Badge className="w-fit">{study.category}</Badge>
        <h3
          className={cn(
            'mt-4 font-display font-semibold text-[var(--color-text)]',
            featured ? 'text-2xl md:text-3xl' : 'text-xl',
          )}
        >
          {study.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
          {study.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted-strong)] transition-colors group-hover:text-[var(--color-text)]">
          View case study
          <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
