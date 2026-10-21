import { useEffect, useId, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { mainNavigation } from '../../data/navigation'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { cn } from '../../lib/utils'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Logo } from '../ui/Logo'
import { MobileMenu } from './MobileMenu'
import { NavDropdown } from './NavDropdown'
import { ServicesMegaMenu } from './ServicesMegaMenu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const scrollY = useScrollPosition()
  const menuId = useId()
  const servicesMenuId = useId()
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const servicesTriggerRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const isScrolled = scrollY > 12

  const openServices = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setServicesOpen(true)
  }

  const closeServices = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false)
      closeTimerRef.current = null
    }, 140)
  }

  useEffect(() => {
    setServicesOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  useEffect(() => {
    if (!servicesOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        servicesTriggerRef.current?.focus()
      }
    }

    const handleOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setServicesOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('pointerdown', handleOutsideClick)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('pointerdown', handleOutsideClick)
    }
  }, [servicesOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false)
      }}
      className={cn(
        'relative sticky top-0 z-50 border-b bg-white transition-[border-color,box-shadow] duration-300',
        isScrolled || menuOpen || servicesOpen
          ? 'border-[var(--color-border)] shadow-[0_1px_0_rgba(0,0,0,0.03)]'
          : 'border-[var(--color-border)]',
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between gap-6 md:h-[4.75rem]">
        <div className="flex min-w-0 items-center gap-8 lg:gap-12">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {mainNavigation.map((item) => {
              if (item.menuType === 'mega') {
                return (
                  <button
                    ref={servicesTriggerRef}
                    key={item.label}
                    type="button"
                    className={cn(
                      'nav-link relative inline-flex items-center gap-1 px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200',
                      servicesOpen || location.pathname.startsWith('/services')
                        ? 'text-[var(--color-text)]'
                        : 'text-[var(--color-muted-strong)] hover:text-[var(--color-text)]',
                    )}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                    aria-controls={servicesMenuId}
                    onMouseEnter={openServices}
                    onMouseLeave={closeServices}
                    onClick={openServices}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 opacity-70 transition-transform duration-200',
                        servicesOpen && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                    {servicesOpen ? (
                      <span
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-[var(--color-brand)]"
                        aria-hidden="true"
                      />
                    ) : null}
                  </button>
                )
              }

              return <NavDropdown key={item.label} item={item} />
            })}
          </nav>
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" className="min-h-11 rounded-xl px-5 text-sm">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-soft)] lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      {servicesOpen ? (
        <div
          className="hidden lg:block"
          onMouseEnter={openServices}
          onMouseLeave={closeServices}
        >
          <ServicesMegaMenu id={servicesMenuId} onNavigate={() => setServicesOpen(false)} />
        </div>
      ) : null}

      <MobileMenu id={menuId} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
