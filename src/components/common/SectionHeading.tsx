import type { SectionHeadingProps } from '../../types'
import { cn } from '../../lib/utils'

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 max-w-3xl md:mb-14 lg:mb-16',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)] md:mb-4">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-balance text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:mt-5 md:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
