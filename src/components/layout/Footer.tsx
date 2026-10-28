import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, UserRound } from 'lucide-react'
import {
  footerCompany,
  footerResources,
  footerServices,
  socialLinks,
} from '../../data/navigation'
import { companyContact } from '../../data/company'
import { Container } from '../common/Container'
import { Logo } from '../ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1fr_1fr_1.45fr] xl:gap-x-10">
          <div className="min-w-0 sm:col-span-2 xl:col-span-1">
            <Logo className="h-20 sm:h-24" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--color-muted)]">
              Appora Technologies turns complex business challenges into smart, scalable digital
              solutions — powered by AI, robotics, machine learning, software engineering, and cloud.
            </p>
            <a
              href="mailto:info@appora.net"
              className="mt-4 inline-flex cursor-pointer text-sm font-medium text-[var(--color-text)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              info@appora.net
            </a>
          </div>

          <FooterColumn title="Services" links={footerServices} />
          <FooterColumn title="Company" links={footerCompany} />
          <FooterColumn title="Resources" links={footerResources} />

          <section aria-labelledby="footer-contact-heading" className="min-w-0 sm:col-span-2 xl:col-span-1">
            <h2
              id="footer-contact-heading"
              className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]"
            >
              Contact us
            </h2>
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-sm leading-6 text-[var(--color-muted-strong)]">
                <UserRound className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                <span>
                  <span className="mr-1 font-medium text-[var(--color-text)]">CEO:</span>
                  {companyContact.ceo}
                </span>
              </p>
              <a
                className="flex cursor-pointer items-start gap-3 rounded-sm text-sm leading-6 text-[var(--color-muted-strong)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyContact.address)}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${companyContact.address} on Google Maps`}
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                <span>{companyContact.address}</span>
              </a>
              <a
                href={`tel:${companyContact.phone}`}
                className="flex cursor-pointer items-start gap-3 rounded-sm text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                aria-label={`Call ${companyContact.ceo} at ${companyContact.phone}`}
              >
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    Call us
                  </span>
                  <span className="mt-0.5 block font-semibold">70435 33706</span>
                </span>
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-9 cursor-pointer items-center rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted-strong)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-7">
          <p className="text-sm text-[var(--color-muted)]">
            Appora Technologies {year}. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="group inline-flex w-fit cursor-pointer items-center gap-2 rounded-sm text-sm font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          >
            Ready to work? Let&apos;s chat
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  links: Array<{ label: string; href: string }>
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-label={`Footer ${title}`} className="min-w-0">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
        {title}
      </h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className={`inline-flex cursor-pointer rounded-sm text-sm leading-5 text-[var(--color-muted-strong)] transition-colors hover:text-[var(--color-accent)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]${link.label === 'Software Development' ? ' xl:whitespace-nowrap' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
