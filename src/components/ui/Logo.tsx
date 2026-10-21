import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('inline-flex shrink-0 items-center', className ?? 'h-16')}
      aria-label="Appora Technologies — home"
    >
      <img
        src="/logo.jpeg"
        alt="Appora Technologies"
        width={1254}
        height={1254}
        className="h-full w-auto object-contain"
      />
    </Link>
  )
}
