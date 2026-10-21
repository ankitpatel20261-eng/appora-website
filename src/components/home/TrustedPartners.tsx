import { partners, reviewBadges } from '../../data/stats'
import { AnimatedElement } from '../common/AnimatedElement'
import { Container } from '../common/Container'
import { Section } from '../common/Section'

export function TrustedPartners() {
  return (
    <Section
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-14 md:py-20 lg:py-24"
      ariaLabelledBy="trusted-partners-heading"
    >
      <Container>
        <AnimatedElement>
          <h2
            id="trusted-partners-heading"
            className="text-center text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl"
          >
            Trusted partners
          </h2>
        </AnimatedElement>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:mt-12 sm:gap-x-10 md:gap-x-12 lg:gap-x-14">
          {partners.map((partner, index) => (
            <AnimatedElement key={partner.id} delay={index * 0.04}>
              <li>
                <span
                  className="block whitespace-nowrap text-sm font-bold tracking-tight text-[var(--color-text)] sm:text-base md:text-lg"
                  style={{ fontFamily: partnerStyle(partner.name) }}
                >
                  {partner.name}
                </span>
              </li>
            </AnimatedElement>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:mt-14 sm:flex-row sm:gap-10 md:gap-14">
          {reviewBadges.map((badge, index) => (
            <AnimatedElement key={badge.id} delay={0.2 + index * 0.08}>
              <a
                href={badge.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
                aria-label={`${badge.score} ${badge.reviewCount}`}
              >
                <PlatformMark platform={badge.platform} />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-[var(--color-text)]">
                      {badge.score}
                    </span>
                    <StarRow />
                  </div>
                  <p className="mt-0.5 text-sm text-[var(--color-muted)]">{badge.reviewCount}</p>
                </div>
              </a>
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function partnerStyle(name: string): string {
  if (name === 'SPACEBOT' || name === 'TRAK RACER') {
    return 'Inter, sans-serif'
  }
  if (name === 'pawrti') {
    return 'Georgia, serif'
  }
  return 'Inter, sans-serif'
}

function StarRow() {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className="h-3.5 w-3.5 fill-[#e11d48]" viewBox="0 0 20 20">
          <path d="M10 1.5l2.35 4.76 5.25.76-3.8 3.7.9 5.24L10 13.77l-4.7 2.47.9-5.24-3.8-3.7 5.25-.76L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}

interface PlatformMarkProps {
  platform: string
}

function PlatformMark({ platform }: PlatformMarkProps) {
  if (platform === 'Google') {
    return (
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold shadow-sm ring-1 ring-[var(--color-border)]"
        aria-hidden="true"
      >
        <span className="bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">
          G
        </span>
      </span>
    )
  }

  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#163339] text-sm font-bold text-white"
      aria-hidden="true"
    >
      C
    </span>
  )
}
