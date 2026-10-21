import { Link } from 'react-router-dom'
import {
  footerCompany,
  footerResources,
  footerServices,
  socialLinks,
} from '../../data/navigation'
import { Container } from '../common/Container'
import { Logo } from '../ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <Container className="py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo className="h-28" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              Appora Technologies turns complex business challenges into smart, scalable digital
              solutions — powered by AI, robotics, machine learning, software engineering, and cloud.
            </p>
            <a
              href="mailto:info@appora.net"
              className="mt-5 inline-flex text-sm font-medium text-[var(--color-text)] underline-offset-4 transition-colors hover:underline"
            >
              info@appora.net
            </a>
          </div>

          <FooterColumn title="Services" links={footerServices} className="lg:col-span-2" />
          <FooterColumn title="Company" links={footerCompany} className="lg:col-span-2" />
          <FooterColumn title="Resources" links={footerResources} className="lg:col-span-2" />

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Contact
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted-strong)]">
              Al Mirqab - Olua Tower - 2nd floor
            </p>
            <a
              href="tel:+96541033441"
              className="mt-3 inline-flex text-sm font-medium text-[var(--color-text)]"
            >
              +965 41033441
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-muted)]">
            Appora Technologies {year}. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="text-sm font-medium text-[var(--color-muted-strong)] transition-colors hover:text-[var(--color-text)]"
          >
            Ready to work? Let&apos;s chat
          </Link>
        </div>
      </Container>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  links: Array<{ label: string; href: string }>
  className?: string
}

function FooterColumn({ title, links, className }: FooterColumnProps) {
  return (
    <div className={className}>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm text-[var(--color-muted-strong)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
