import { industries } from '../../data/industries'
import { AnimatedElement } from '../common/AnimatedElement'
import { Container } from '../common/Container'
import { Section } from '../common/Section'
import { SectionHeading } from '../common/SectionHeading'
import { IndustryCard } from './IndustryCard'

export function Industries() {
  return (
    <Section
      id="industries"
      ariaLabelledBy="industries-heading"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
    >
      <Container>
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries"
          title="Technology for the sectors you operate in"
          description="From ecommerce and SaaS to healthcare and finance — practical digital solutions shaped around how your industry works."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {industries.map((industry, index) => (
            <AnimatedElement
              key={industry.id}
              delay={index * 0.05}
              className="h-full"
            >
              <IndustryCard industry={industry} />
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </Section>
  )
}
