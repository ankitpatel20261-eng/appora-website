import { Link } from 'react-router-dom'
import type { ButtonProps } from '../../types'
import { cn } from '../../lib/utils'
import { ArrowIcon } from '../ui/ArrowIcon'

const variantClasses = {
  primary:
    'brand-button text-white',
  secondary:
    'border border-[var(--color-border-strong)] bg-white text-[var(--color-brand)] hover:border-[var(--color-brand)] hover:bg-[var(--color-bg-soft)]',
  ghost:
    'bg-transparent text-[var(--color-muted-strong)] hover:text-[var(--color-brand)]',
} as const

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  type = 'button',
  ariaLabel,
  showArrow = true,
}: ButtonProps) {
  const classes = cn(
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 motion-safe:hover:-translate-y-0.5 active:translate-y-0',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]',
    variantClasses[variant],
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" /> : null}
    </>
  )

  if (href) {
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          {content}
        </a>
      )
    }

    return (
      <Link to={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
