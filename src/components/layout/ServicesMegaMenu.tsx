import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { servicesMegaMenu } from '../../data/navigation'
import { Container } from '../common/Container'

interface ServicesMegaMenuProps {
  id: string
  onNavigate: () => void
}

export function ServicesMegaMenu({ id, onNavigate }: ServicesMegaMenuProps) {
  const midpoint = Math.ceil(servicesMegaMenu.links.length / 2)
  const leftLinks = servicesMegaMenu.links.slice(0, midpoint)
  const rightLinks = servicesMegaMenu.links.slice(midpoint)

  return (
    <div
      id={id}
      role="menu"
      aria-label="Services menu"
      className="services-panel absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-[var(--color-border)] shadow-[0_24px_60px_rgba(8,39,80,0.12)]"
    >
      <Container className="py-8 md:py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative rounded-2xl border border-[var(--color-border)] bg-white/70 p-6 lg:col-span-5">
            <div className="relative">
              <h2 className="font-display inline-flex items-center gap-2 text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
                {servicesMegaMenu.title}
              </h2>

              <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted-strong)]">
                {servicesMegaMenu.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {servicesMegaMenu.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--color-muted-strong)] md:text-base"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
              <span className="h-2 w-2 bg-[var(--color-brand)]" aria-hidden="true" />
              {servicesMegaMenu.linksLabel}
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              {[leftLinks, rightLinks].map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-1">
                  {column.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        role="menuitem"
                        onClick={onNavigate}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-3 text-[0.95rem] font-medium text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-border)] hover:bg-[var(--color-bg-soft)] hover:text-[var(--color-brand)] focus-visible:bg-[var(--color-bg-soft)] focus-visible:text-[var(--color-brand)]"
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-brand)] opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="mt-5 border-t border-[var(--color-border)] pt-4">
              <Link
                to="/services"
                onClick={onNavigate}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)] underline-offset-4 hover:underline"
              >
                View all services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
