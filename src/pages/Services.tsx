import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { services, servicesIntro } from '../data/services'
import { AnimatedElement } from '../components/common/AnimatedElement'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Section } from '../components/common/Section'
import { SectionHeading } from '../components/common/SectionHeading'
import { ServiceCard } from '../components/home/ServiceCard'
import { BuildingServices } from '../components/home/BuildingServices'

export function Services() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <Section ariaLabelledBy="services-page-heading">
      <Container>
        <h1 id="services-page-heading" className="font-display mb-10 text-4xl font-semibold text-[var(--color-text)] md:text-5xl">Our Services</h1>
        <div id="it-services" className="scroll-mt-28">
          <SectionHeading
            id="digital-services-heading"
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            description={servicesIntro.description}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {services.map((service, index) => (
              <AnimatedElement key={service.id} delay={index * 0.05}>
                <ServiceCard service={service} />
              </AnimatedElement>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-[var(--color-border)] pt-12">
          <BuildingServices />
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[var(--color-text)]">
              Ready to solve a real commercial challenge?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              Tell us what you need. We&apos;ll help you plan the right building systems,
              digital solutions, and ongoing technical support.
            </p>
          </div>
          <Button href="/contact">Start a project</Button>
        </div>
      </Container>
    </Section>
  )
}
