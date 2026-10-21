import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  ariaLabelledBy?: string
}

export function Section({ children, className, id, ariaLabelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('relative py-16 md:py-24 lg:py-32', className)}
    >
      {children}
    </section>
  )
}
