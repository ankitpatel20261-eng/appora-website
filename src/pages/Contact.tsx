import { MapPin, Phone, UserRound } from 'lucide-react'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Section } from '../components/common/Section'
import { companyContact } from '../data/company'

export function Contact() {
  return (
    <Section className="min-h-[60vh]">
      <Container>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Contact
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-semibold text-[var(--color-text)] sm:text-5xl md:text-6xl">
          Let&apos;s create the future together
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          Get in touch with our team at{' '}
          <a
            className="font-medium text-[var(--color-text)] underline-offset-4 hover:underline"
            href="mailto:info@appora.net"
          >
            info@appora.net
          </a>{' '}
          or connect with our CEO using the details below.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-lg focus-within:-translate-y-1 focus-within:border-[var(--color-border-strong)]">
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              <MapPin className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
              Company address
            </h2>
            <a
              className="mt-3 inline-block text-base leading-relaxed text-[var(--color-muted-strong)] transition-colors group-hover:text-[var(--color-text)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyContact.address)}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${companyContact.address} on Google Maps`}
            >
              {companyContact.address}
            </a>
          </article>
          <article className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-lg focus-within:-translate-y-1 focus-within:border-[var(--color-border-strong)]">
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              <UserRound className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
              CEO
            </h2>
            <a
              className="mt-3 inline-block text-base font-medium text-[var(--color-muted-strong)] transition-colors hover:text-[var(--color-accent)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              href={`tel:${companyContact.phone}`}
              aria-label={`Call CEO ${companyContact.ceo}`}
            >
              {companyContact.ceo}
            </a>
          </article>
          <article className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-lg focus-within:-translate-y-1 focus-within:border-[var(--color-border-strong)] sm:col-span-2 lg:col-span-1">
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              <Phone className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
              Call us
            </h2>
            <a
              className="mt-3 inline-flex text-base font-semibold text-[var(--color-text)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:underline focus-visible:underline"
              href={`tel:${companyContact.phone}`}
              aria-label={`Call ${companyContact.ceo} at ${companyContact.phone}`}
            >
              70435 33706
            </a>
          </article>
        </div>

        <div className="mt-8">
          <Button href="mailto:info@appora.net">Talk to us</Button>
        </div>
      </Container>
    </Section>
  )
}
