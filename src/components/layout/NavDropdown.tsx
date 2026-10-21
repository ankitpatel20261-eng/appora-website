import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import type { NavItem } from '../../types'
import { cn } from '../../lib/utils'

interface NavDropdownProps {
  item: NavItem
}

export function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuId = useId()
  const location = useLocation()
  const hasChildren = Boolean(item.children && item.children.length > 0)

  const childIsActive = item.children?.some(
    (child) =>
      location.pathname === child.href || location.pathname.startsWith(`${child.href}/`),
  )

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  if (!hasChildren) {
    return (
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          cn(
            'nav-link inline-flex items-center gap-1 px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200',
            isActive
              ? 'text-[var(--color-text)]'
              : 'text-[var(--color-muted-strong)] hover:text-[var(--color-text)]',
          )
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          'nav-link inline-flex items-center gap-1 px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200',
          open || childIsActive
            ? 'text-[var(--color-text)]'
            : 'text-[var(--color-muted-strong)] hover:text-[var(--color-text)]',
        )}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn('h-3.5 w-3.5 opacity-70 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={`${item.label} menu`}
          className="absolute left-0 top-full z-50 min-w-[11.5rem] pt-2"
        >
          <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white py-2 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                role="menuitem"
                className={cn(
                  'block px-4 py-2.5 text-[0.9375rem] font-medium transition-colors',
                  location.pathname === child.href
                    ? 'bg-[var(--color-bg-soft)] text-[var(--color-text)]'
                    : 'text-[var(--color-text)] hover:bg-[var(--color-bg-soft)]',
                )}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
