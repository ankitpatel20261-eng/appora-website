import { caseStudies } from '../../data/caseStudies'
import { AnimatedElement } from '../common/AnimatedElement'
import { Container } from '../common/Container'
import { Section } from '../common/Section'
import { SectionHeading } from '../common/SectionHeading'
import { CaseStudyCard } from './CaseStudyCard'

export function CaseStudies() {
  const [featured, ...rest] = caseStudies

  return (
    <Section id="case-studies" ariaLabelledBy="case-studies-heading" className="border-t border-[var(--color-border)]">
      <Container>
        <SectionHeading
          id="case-studies-heading"
          eyebrow="Our recent best works"
          title="Digital solutions built with precision"
          description="A selection of software, web, mobile, AI, and integrated systems — reliable, scalable, and made for growth."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <AnimatedElement className="lg:col-span-2">
            <CaseStudyCard study={featured} featured />
          </AnimatedElement>

          {rest.map((study, index) => (
            <AnimatedElement key={study.id} delay={(index + 1) * 0.08}>
              <CaseStudyCard study={study} />
            </AnimatedElement>
          ))}
        </div>
      </Container>
    </Section>
  )
}
