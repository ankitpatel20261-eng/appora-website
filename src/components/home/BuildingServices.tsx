import { Check, Wrench } from 'lucide-react'
import { buildingServices, technicalSupport } from '../../data/buildingServices'
import boschLogo from '../../assets/images/services/bosch.svg'
import honeywellLogo from '../../assets/images/services/honeywell.svg'
import { AnimatedElement } from '../common/AnimatedElement'
import { SectionHeading } from '../common/SectionHeading'
import { ServiceCard } from './ServiceCard'

export function BuildingServices() {
  return (
    <section id="building-systems" aria-labelledby="building-systems-heading" className="scroll-mt-28">
      <SectionHeading
        id="building-systems-heading"
        eyebrow="Building systems & integration"
        title="Smarter spaces. Connected systems."
        description="Installation, integration, and ongoing care for the systems that keep your building connected, secure, and running smoothly."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {buildingServices.map((service) => (
          <AnimatedElement key={service.id}>
            <ServiceCard service={service} />
          </AnimatedElement>
        ))}
      </div>

      <section aria-labelledby="technical-support-heading" className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <Wrench className="h-6 w-6 shrink-0 text-[var(--color-brand)]" aria-hidden="true" />
          <h2 id="technical-support-heading" className="font-display text-2xl font-semibold text-[var(--color-text)]">Common Services & Technical Support</h2>
        </div>
        <p className="mt-3 text-[var(--color-muted)]">Practical support throughout your system lifecycle, from initial setup to everyday performance.</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {technicalSupport.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-muted-strong)] md:text-base">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand)]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="trusted-brands-heading" className="mt-8 rounded-3xl border border-[var(--color-border)] p-6 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 id="trusted-brands-heading" className="font-display text-2xl font-semibold text-[var(--color-text)]">Trusted Brands</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted)] md:text-base">Explore building and security technologies from Bosch and Honeywell. Talk to us about your equipment and integration requirements.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2">
            {[
              { name: 'Bosch', logo: boschLogo, href: 'https://www.bosch.com/' },
              { name: 'Honeywell', logo: honeywellLogo, href: 'https://www.honeywell.com/' },
            ].map((brand) => (
              <a key={brand.name} href={brand.href} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} official website (opens in a new tab)`} className="flex min-h-28 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-border-strong)]">
                <img src={brand.logo} alt={brand.name} width={180} height={48} loading="lazy" className="h-12 w-full max-w-44 object-contain" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 border-t border-[var(--color-border)] pt-4 text-xs leading-relaxed text-[var(--color-muted)]">Brand names and logos belong to their respective owners. Their inclusion does not imply an official partnership, authorization, certification, or endorsement.</p>
      </section>
    </section>
  )
}
