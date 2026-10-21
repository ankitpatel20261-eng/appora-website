import { services, servicesIntro } from '../../data/services'
import { AnimatedElement } from '../common/AnimatedElement'
import { Container } from '../common/Container'
import { Section } from '../common/Section'
import { SectionHeading } from '../common/SectionHeading'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <Section id="services" ariaLabelledBy="services-heading" className="border-t border-[var(--color-border)]">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          description={servicesIntro.description}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <AnimatedElement
              key={service.id}
              delay={index * 0.06}
              className={index === 0 ? 'sm:col-span-2 lg:col-span-1' : undefined}
            >
              <ServiceCard service={service} />
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </Section>
  )
}
